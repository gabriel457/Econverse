
import { useEffect } from "react";
import type { Product } from "../../types/Product";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="product-modal__overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <div className="product-modal__image-container">
          <img
            className="product-modal__image"
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className="product-modal__details">
          <h2 id="product-modal-title">
            {product.productName}
          </h2>

          <p id="product-modal-description">
            {product.descriptionShort}
          </p>

          <p className="product-modal__price">
            {formattedPrice}
          </p>

          <button
            type="button"
            className="product-modal__buy"
          >
            COMPRAR
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
