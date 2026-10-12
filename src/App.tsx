import BrandsSection from "./components/BrandsSection/BrandsSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import type { Product } from "./types/Product";
import { getProducts } from "./services/products";

import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductSection from "./components/ProductSection/ProductSection";
import PartnerBanners from "./components/PartnerBanners/PartnerBanners";
import ProductModal from "./components/ProductModal/ProductModal";

import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err: unknown) => {
        const message =
          err instanceof Error
            ? err.message
            : "Ocorreu um erro ao carregar os produtos.";

        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  
return (
  <>
    <Header />

    <main id="inicio">
      <HeroBanner />

      <CategoryList />

      <ProductSection
        id="produtos"
        products={products}
        loading={loading}
        error={error}
        onProductSelect={setSelectedProduct}
        showCategoryNav
      />

      <PartnerBanners id="parceiros" />

      <ProductSection
        products={products}
        loading={loading}
        error={error}
        onProductSelect={setSelectedProduct}
      />

      <PartnerBanners />

      <BrandsSection />
    
      <ProductSection
        products={products}
        loading={loading}
        error={error}
        onProductSelect={setSelectedProduct}
        showViewAll
      />
    </main>

    <Newsletter />

    <Footer />

    {selectedProduct && (
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}
  </>
);

}

export default App;
