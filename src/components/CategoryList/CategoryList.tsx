
import "./CategoryList.scss";

import corridaIcone from "./corridaIcone.png";
import cuidadosDeSaudeIcone from "./cuidados-de-saudeIcone.png";
import ferramentasIcone from "./ferramentasIcone.png";
import modaIcone from "./modaIcone.png";
import supermercadosIcone from "./supermercadosIcone.png";
import tecnologiaIcone from "./tecnologiaIcone.png";
import whiskeyIcone from "./whiskeyIcone.png";

const categories = [
  { name: "Tecnologia", icon: tecnologiaIcone },
  { name: "Supermercado", icon: supermercadosIcone },
  { name: "Bebidas", icon: whiskeyIcone },
  { name: "Ferramentas", icon: ferramentasIcone },
  { name: "Saúde", icon: cuidadosDeSaudeIcone },
  { name: "Esportes e Fitness", icon: corridaIcone },
  { name: "Moda", icon: modaIcone },
];

function CategoryList() {
  return (
    <nav
      id="categorias"
      className="category-list"
      aria-label="Categorias de produtos"
    >
      {categories.map((category) => (
        <a
          className="category-list__item"
          href="#produtos"
          key={category.name}
        >
          <span className="category-list__icon">
            <img src={category.icon} alt="" />
          </span>

          <span className="category-list__name">
            {category.name}
          </span>
        </a>
      ))}
    </nav>
  );
}

export default CategoryList;
