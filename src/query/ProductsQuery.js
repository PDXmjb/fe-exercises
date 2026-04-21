import { useQuery } from '@tanstack/react-query';

async function fetchProducts(params) {
  console.log('Parameters', params);
  const searchParams = new URLSearchParams();
  searchParams.set('_quantity', params.quantity.toString());

  if (params.priceMin !== undefined) {
    searchParams.set('_price_min', params.priceMin.toFixed(2));
  }
  if (params.priceMax !== undefined && params.priceMax !== 'Infinity') {
    searchParams.set('_price_max', params.priceMax.toFixed(2));
  }
  if (params.taxes !== undefined) {
    searchParams.set('_taxes', params.taxes.toString());
  }
  if (params.categoriesType !== undefined) {
    searchParams.set('_categories_type', params.categoriesType);
  }

  const response = await fetch(
    `https://fakerapi.it/api/v2/products?${searchParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return (await response.json()).data;
}

export function useProductsQuery(params) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    staleTime: 500,
  });
}
