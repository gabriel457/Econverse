
import "./PartnerBanners.scss";

interface PartnerBannersProps {
  id?: string;
}

const banners = [
  {
    src: "/assets/Header/banner 1.png",
    alt: "Conheça nossos parceiros",
  },
  {
    src: "/assets/Header/banner 2.png",
    alt: "Conheça nossas marcas parceiras",
  },
];

function PartnerBanners({ id }: PartnerBannersProps) {
  return (
    <section
      id={id}
      className="partner-banners"
      aria-label="Banners de parceiros"
    >
      {banners.map((banner) => (
        <a
          className="partner-banner"
          href="#produtos"
          aria-label={banner.alt}
          key={banner.src}
        >
          <img
            className="partner-banner__image"
            src={banner.src}
            alt={banner.alt}
          />
        </a>
      ))}
    </section>
  );
}

export default PartnerBanners;
