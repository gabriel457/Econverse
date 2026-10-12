
import "./BrandsSection.scss";

const brands = [
  { id: 1, name: "Econverse" },
  { id: 2, name: "Econverse" },
  { id: 3, name: "Econverse" },
  { id: 4, name: "Econverse" },
  { id: 5, name: "Econverse" },
];

function BrandsSection() {
  return (
    <section
      id="marcas"
      className="brands-section"
      aria-labelledby="brands-title"
    >
      <h2 id="brands-title">Navegue por marcas</h2>

      <div className="brands-section__list">
        {brands.map((brand) => (
          <a
            href="#produtos"
            className="brands-section__item"
            key={brand.id}
            aria-label={`Ver produtos da ${brand.name}`}
          >
            <img
              src="/assets/Header/Logo.svg"
              alt=""
              className="brands-section__logo-image"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default BrandsSection;
