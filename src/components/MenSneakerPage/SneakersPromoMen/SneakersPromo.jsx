import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Button, Dropdown } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import debounce from "lodash.debounce";
import SneakerCard from "../../SneakersPromo/SneakersCard";
import { menSneakers } from "./data";
import SlideBarCatalog from "../../SlideBarCatalog/SlideBarCatalog";


export default function SneakersPromoMen() {
  Aos.init({ duration: 1000 });

  const [filteredSneakers, setFilteredSneakers] = useState(menSneakers);
  const [filters, setFilters] = useState({
    brands: [],
    models: [],
    sizes: [],
  });
  const [sortOrder, setSortOrder] = useState("asc");

  // Применение фильтров с задержкой (debounce) для оптимизации
  const applyFilters = useCallback(
    debounce(() => {
      let result = [...menSneakers];

      // Фильтр по брендам
      if (filters.brands.length > 0) {
        result = result.filter((sneaker) =>
          filters.brands.includes(sneaker.title.split(" ")[0])
        );
      }

      // Фильтр по моделям
      if (filters.models.length > 0) {
        result = result.filter((sneaker) =>
          filters.models.some((model) =>
            sneaker.title.toLowerCase().includes(model.toLowerCase())
          )
        );
      }

      // Фильтр по размерам (если добавить availableSizes в данные)
      if (filters.sizes.length > 0) {
        result = result.filter((sneaker) =>
          filters.sizes.some((size) =>
            sneaker.availableSizes?.includes(size) || true
          )
        );
      }

      // Сортировка по цене
      if (sortOrder === "asc") {
        result.sort((a, b) => parseInt(a.price.replace(",", "")) - parseInt(b.price.replace(",", "")));
      } else {
        result.sort((a, b) => parseInt(b.price.replace(",", "")) - parseInt(a.price.replace(",", "")));
      }

      setFilteredSneakers(result);
    }, 300),
    [filters, sortOrder]
  );

  useEffect(() => {
    applyFilters();
  }, [filters, sortOrder, applyFilters]);

  // Обработка изменений фильтров
  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter((item) => item !== value);
      }
      return newFilters;
    });
  };

  // Очистка фильтров
  const clearFilters = () => {
    setFilters({ brands: [], models: [], sizes: [] });
  };

  return (
    <section className="sneaker__cnt">
      <SlideBarCatalog onFilterChange={handleFilterChange} activeFilters={filters} />
      <div className="sneaker__CardCont">
        <div className="sneaker__filterControls" data-aos="fade-up">
          <Dropdown onSelect={(eventKey) => setSortOrder(eventKey)}>
            <Dropdown.Toggle variant="outline-light" id="dropdown-sort">
              Сортировка: {sortOrder === "asc" ? "по возрастанию" : "по убыванию"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="asc">По возрастанию</Dropdown.Item>
              <Dropdown.Item eventKey="desc">По убыванию</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-danger" onClick={clearFilters} className="clear-filters-btn">
            Очистить фильтры
          </Button>
          <span className="results-count">{filteredSneakers.length} результатов</span>
        </div>
        {filteredSneakers.length === 0 ? (
          <div className="no-results">
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить фильтры или сбросить их.</p>
          </div>
        ) : (
          <Row className="sneaker__row">
            {filteredSneakers.map((sneaker) => (
              <SneakerCard
                key={sneaker.id}
                id={sneaker.id}
                img={sneaker.img}
                title={sneaker.title}
                price={sneaker.price}
              />
            ))}
          </Row>
        )}
      </div>
    </section>
  );
}