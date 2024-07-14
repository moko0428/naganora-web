'use client';

import { InitialProducts } from '@/app/(Tabs)/products/page';
import ListProduct from './list-product';
import { useState } from 'react';
import { getMoreProducts } from '@/app/(Tabs)/products/actions';

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...newProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <div className="p-5 flex flex-col">
      {initialProducts.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {isLastPage ? null : (
        <button
          onClick={onLoadMoreClick}
          disabled={isLoading}
          className="text-sm font-semibold bg-main w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? '로딩 중...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
