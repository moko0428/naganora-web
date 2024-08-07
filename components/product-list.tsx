'use client';

import { InitialProducts } from '@/app/(Tabs)/products/page';
import ListProduct from './list-product';
import { useEffect, useRef, useState } from 'react';
import { getMoreProducts } from '@/app/(Tabs)/products/actions';

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          setIsLoading(true);
          const newProducts = await getMoreProducts(page + 1);
          setProducts((prev) => [...prev, ...newProducts]);
        }
      },
      {
        threshold: 1.0,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <div className="p-5 flex flex-col">
      {initialProducts.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {!isLastPage ? (
        <span
          ref={trigger}
          style={{
            marginTop: `${page + 1 * 300}vh`,
          }}
          className=" mb-96 text-sm font-semibold bg-main w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? '로딩 중...' : 'Load more'}
        </span>
      ) : null}
    </div>
  );
}
