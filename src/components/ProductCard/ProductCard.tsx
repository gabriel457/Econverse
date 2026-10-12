
import type { Product } from "../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__trigger"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />

        <h3 className="product-card__name">
          {product.productName}
        </h3>

        <p className="product-card__description">
          {product.descriptionShort}
        </p>

        <p className="product-card__price">
          {formattedPrice}
        </p>

        <span className="product-card__cta">
          COMPRAR
        </span>
      </button>
    </article>
  );
}

export default ProductCard;
