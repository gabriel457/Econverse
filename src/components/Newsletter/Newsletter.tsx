
import type { FormEvent } from "react";
import "./Newsletter.scss";

function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="newsletter"
      className="newsletter"
      aria-labelledby="newsletter-title"
    >
      <div className="newsletter__content">
        <h2 id="newsletter-title">
          Inscreva-se na nossa newsletter
        </h2>

        <p>
          Receba novidades, ofertas e informações
          sobre nossos produtos.
        </p>
      </div>

      <form
        className="newsletter__form"
        onSubmit={handleSubmit}
      >
        <label className="newsletter__field newsletter__field--name">
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            aria-label="Digite seu nome"
            autoComplete="name"
            required
          />
        </label>

        <label className="newsletter__field newsletter__field--email">
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            aria-label="Digite seu e-mail"
            autoComplete="email"
            required
          />
        </label>

        <button className="newsletter__submit" type="submit">
          Inscrever
        </button>

        <label className="newsletter__terms">
          <input
            type="checkbox"
            name="terms"
            required
          />

          <span>Aceito os termos e condições</span>
        </label>
      </form>
    </section>
  );
}

export default Newsletter;
