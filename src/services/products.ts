import type { Product, ProductsResponse } from "../types/Product";

const PRODUCTS_URL = "/api/produtos";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error("A resposta não confirmou o carregamento dos produtos.");
  }

  return data.products;
}