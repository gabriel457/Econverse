import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__about">
          
        <a
          href="#inicio"
          className="site-footer__logo"
          aria-label="Econverse - início"
        >
          <img
            src="/assets/Header/Logo.svg"
            alt=""
            className="site-footer__logo-image"
          />
        </a>

          <p>
            Tecnologia e soluções para uma melhor
            experiência de compra.
          </p>

          

<div className="site-footer__social">
  <a href="#inicio" aria-label="Instagram">
    <span
      className="site-footer__social-composite site-footer__social-composite--instagram"
      aria-hidden="true"
    >
      <img
        className="instagram-outer"
        src="/assets/footer/instagram/InstagramLogoParteExterna.png"
        alt=""
      />
      <img
        className="instagram-inner"
        src="/assets/footer/instagram/InstagramLogoParteInterna.png"
        alt=""
      />
      <img
        className="instagram-dot"
        src="/assets/footer/instagram/instagramLogoPontinho.png"
        alt=""
      />
    </span>
  </a>

  <a href="#inicio" aria-label="Facebook">
    <img
      className="site-footer__social-image"
      src="/assets/footer/facebook/facebookLogo.png"
      alt=""
    />
  </a>

  <a href="#inicio" aria-label="LinkedIn">
    <span
      className="site-footer__social-composite site-footer__social-composite--linkedin"
      aria-hidden="true"
    >
      <img
        className="linkedin-i"
        src="/assets/footer/linkedin/ILinkedin.png"
        alt=""
      />
      <img
        className="linkedin-n"
        src="/assets/footer/linkedin/NLinkedin.png"
        alt=""
      />
      <img
        className="linkedin-dot"
        src="/assets/footer/linkedin/PontoLinkedin.png"
        alt=""
      />
    </span>
  </a>
</div>

        </div>

        <div className="site-footer__column">
          <h2>Institucional</h2>
          <a href="#inicio">Sobre nós</a>
          <a href="#parceiros">Parceiros</a>
          <a href="#marcas">Marcas</a>
        </div>

        <div className="site-footer__column">
          <h2>Ajuda</h2>
          <a href="#inicio">Atendimento</a>
          <a href="#inicio">Perguntas frequentes</a>
          <a href="#inicio">Política de privacidade</a>
        </div>

        <div className="site-footer__column">
          <h2>Minha conta</h2>
          <a href="#inicio">Meus pedidos</a>
          <a href="#inicio">Minha conta</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© Econverse — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
