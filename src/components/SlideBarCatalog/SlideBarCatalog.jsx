import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./__SlideBarCatalog.scss";

const BRANDS = ["Nike", "Adidas", "Dior", "Zara"];
const MODELS = ["Air Jordan", "Air Max", "Ultraboost", "B23", "Casual"];
const SIZES = ["41", "42", "43", "44"];

export default function SlideBarCatalog({ onFilterChange, activeFilters }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  Aos.init({ duration: 1000 });

  const handleCheckboxChange = (filterType, value) => (e) => {
    onFilterChange(filterType, value, e.target.checked);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      {/* Кнопка для открытия фильтров на мобильных устройствах */}
      <div className="SlideBarCatalog__mobileToggle">
        <button onClick={toggleFilter} className="SlideBarCatalog__toggleBtn">
          {isFilterOpen ? "Закрыть фильтры" : "Фильтры"}
        </button>
      </div>

      {/* Основной контейнер фильтров */}
      <section
        className={`slideee ${isFilterOpen ? "slideee--open" : ""}`}
        data-aos="fade-up"
      >
        <div className="SlideBarCatalog">
          <div className="SlideBarCatalog__section">
            <h1 className="SlideBarCatalog__title">Бренд:</h1>
            <div className="SlideBarCatalog__filterList">
              {BRANDS.map((brand) => (
                <div className="SlideBarCatalog__filterItem" key={brand}>
                  <input
                    type="checkbox"
                    id={brand}
                    name={brand}
                    className="SlideBarCatalog__filterItemCheckbox"
                    checked={activeFilters.brands.includes(brand)}
                    onChange={handleCheckboxChange("brands", brand)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="SlideBarCatalog">
          <div className="SlideBarCatalog__section">
            <h1 className="SlideBarCatalog__title">Модель:</h1>
            <div className="SlideBarCatalog__filterList">
              {MODELS.map((model) => (
                <div className="SlideBarCatalog__filterItem" key={model}>
                  <input
                    type="checkbox"
                    id={model}
                    name={model}
                    className="SlideBarCatalog__filterItemCheckbox"
                    checked={activeFilters.models.includes(model)}
                    onChange={handleCheckboxChange("models", model)}
                  />
                  <label htmlFor={model}>{model}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="SlideBarCatalog">
          <div className="SlideBarCatalog__section">
            <h1 className="SlideBarCatalog__title">Размер:</h1>
            <div className="SlideBarCatalog__filterList">
              {SIZES.map((size) => (
                <div className="SlideBarCatalog__filterItem" key={size}>
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    name={size}
                    className="SlideBarCatalog__filterItemCheckbox"
                    checked={activeFilters.sizes.includes(size)}
                    onChange={handleCheckboxChange("sizes", size)}
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}