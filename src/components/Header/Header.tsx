import "./Header.scss";
import avatarCirculoAcima from "./avatarCirculoAcima.png";
import avatarCirculoExterno from "./avatarCirculoExterno.png";
import avatarCirculoPrincipal from "./avatarCirculoPrincipal.png";

import carrinhoParteSegura from "./carrinhoParteSegura.png";
import carrinhoRetanguloInterno from "./carrinhoRetanguloInterno.png";
import carrinhoRodinhaDireita from "./carrinhoRodinhaDireita.png";
import carrinhoRodinhaEsquerda from "./carrinhoRodinhaEsquerda.png";

import heartIcon from "./Heart.png";
import vectorIcon from "./Vector.png";


function Header() {
  return (
    <header className="site-header">
      <div className="site-header__benefits">
        <div className="site-header__benefits-inner">
          <div className="site-header__benefit">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m9 12 2 2 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>Compra <strong>100% segura</strong></span>
          </div>

          <div className="site-header__benefit">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M2 5h12v12H2zM14 9h5l3 4v4h-8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="18" r="2" fill="white" stroke="currentColor" />
              <circle cx="18" cy="18" r="2" fill="white" stroke="currentColor" />
            </svg>
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>

          <div className="site-header__benefit">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M3 10h18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      <div className="site-header__main">
        <a
          href="#inicio"
          className="site-header__logo"
          aria-label="Econverse - início"
        >
          <img src="/assets/Header/Logo.svg" alt="Econverse" />
        </a>

        <form
          className="site-header__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />

          <button type="submit" aria-label="Buscar produtos">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle
                cx="10.5"
                cy="10.5"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m16 16 5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </button>
        </form>

        
<div className="site-header__actions">
  <button type="button" aria-label="Meus pedidos">
    <img
      className="site-header__action-single"
      src={vectorIcon}
      alt=""
    />
  </button>

  <button type="button" aria-label="Favoritos">
    <img
      className="site-header__action-single"
      src={heartIcon}
      alt=""
    />
  </button>

  <button type="button" aria-label="Minha conta">
    <span className="header-avatar" aria-hidden="true">
      <img
        className="header-avatar__outer"
        src={avatarCirculoExterno}
        alt=""
      />
      <img
        className="header-avatar__head"
        src={avatarCirculoPrincipal}
        alt=""
      />
      <img
        className="header-avatar__body"
        src={avatarCirculoAcima}
        alt=""
      />
    </span>
  </button>

  <button type="button" aria-label="Carrinho de compras">
    <span className="header-cart" aria-hidden="true">
      <img
        className="header-cart__body"
        src={carrinhoParteSegura}
        alt=""
      />
      <img
        className="header-cart__basket"
        src={carrinhoRetanguloInterno}
        alt=""
      />
      <img
        className="header-cart__wheel header-cart__wheel--left"
        src={carrinhoRodinhaEsquerda}
        alt=""
      />
      <img
        className="header-cart__wheel header-cart__wheel--right"
        src={carrinhoRodinhaDireita}
        alt=""
      />
    </span>
  </button>
  </div>

      </div>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <a href="#categorias">TODAS CATEGORIAS</a>
        <a href="#categorias">SUPERMERCADO</a>
        <a href="#produtos">LIVROS</a>
        <a href="#categorias">MODA</a>
        <a href="#produtos">LANÇAMENTOS</a>
        <a className="site-header__nav-highlight" href="#produtos">
          OFERTAS DO DIA
        </a>
        <a href="#produtos">♧ ASSINATURA</a>
      </nav>
    </header>
  );
}

export default Header;
