import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p className="hero-banner__offer">
          <strong>50% OFF</strong> nos produtos
        </p>

        <a href="#produtos" className="hero-banner__button">
          Ver produtos
        </a>
      </div>

      <div className="hero-banner__decoration" aria-hidden="true">
        <span>BLACK</span>
        <span>FRIDAY</span>
      </div>
    </section>
  );
}

export default HeroBanner;
