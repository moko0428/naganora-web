async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
}
export default async function ProductsDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <h1>detail{id}</h1>;
}
