import { useRef } from "react";
import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.scss";

interface ProductSectionProps {
  id?: string;
  products: Product[];
  loading: boolean;
  error: string | null;
  onProductSelect: (product: Product) => void;
  showCategoryNav?: boolean;
  showViewAll?: boolean;
}

const categories = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

function ProductSection({
  id,
  products,
  loading,
  error,
  onProductSelect,
  showCategoryNav = false,
  showViewAll = false,
}: ProductSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollProducts(direction: "prev" | "next") {
    const track = trackRef.current;

    if (!track) return;

    const distance = track.clientWidth * 0.85;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <section id={id} className="product-section">
      <div className="product-section__heading">
        <span aria-hidden="true" />
        <h2>Produtos relacionados</h2>
        <span aria-hidden="true" />
      </div>

      {showViewAll && !loading && !error && products.length > 0 && (
        <a
          href="#produtos"
          className="product-section__view-all"
        >
          Ver todos
        </a>
      )}

      {showCategoryNav && (
        <nav
          className="product-section__category-nav"
          aria-label="Categorias de produtos"
        >
          {categories.map((category) => (
            <span
              key={category}
              className={`product-section__category ${
                category === "CELULAR"
                  ? "product-section__category--active"
                  : ""
              }`}
            >
              {category}
            </span>
          ))}
        </nav>
      )}

      {loading && <p>Carregando produtos...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="product-section__carousel">
          <button
            type="button"
            className="product-section__arrow"
            onClick={() => scrollProducts("prev")}
            aria-label="Ver produtos anteriores"
          >
            ‹
          </button>

          <div
            className="product-section__track"
            ref={trackRef}
            aria-label="Lista de produtos"
          >
            {products.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onSelect={onProductSelect}
              />
            ))}
          </div>

          <button
            type="button"
            className="product-section__arrow"
            onClick={() => scrollProducts("next")}
            aria-label="Ver próximos produtos"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductSection;
