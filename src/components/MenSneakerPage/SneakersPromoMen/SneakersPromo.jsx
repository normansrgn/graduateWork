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
  const [sortOrder, setSortOrder] = useState("none");

  // Применение фильтров
  const applyFilters = useCallback(() => {
    let result = [...menSneakers];

    if (filters.brands.length > 0) {
      result = result.filter((sneaker) =>
        filters.brands.includes(sneaker.title.split(" ")[0])
      );
    }

    if (filters.models.length > 0) {
      result = result.filter((sneaker) =>
        filters.models.some((model) =>
          sneaker.title.toLowerCase().includes(model.toLowerCase())
        )
      );
    }

    if (filters.sizes.length > 0) {
      result = result.filter((sneaker) =>
        sneaker.availableSizes?.some((size) => filters.sizes.includes(size))
      );
    }

    if (sortOrder === "asc") {
      result.sort((a, b) =>
        parseInt(a.price.replace(/,/g, "")) - parseInt(b.price.replace(/,/g, ""))
      );
    } else if (sortOrder === "desc") {
      result.sort((a, b) =>
        parseInt(b.price.replace(/,/g, "")) - parseInt(a.price.replace(/,/g, ""))
      );
    }

    setFilteredSneakers(result);
  }, [filters, sortOrder]);

  const debouncedApplyFilters = useCallback(
    debounce(applyFilters, 300),
    [applyFilters]
  );

  useEffect(() => {
    debouncedApplyFilters();
    return () => {
      debouncedApplyFilters.cancel();
    };
  }, [filters, sortOrder, debouncedApplyFilters]);

  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    debouncedApplyFilters.cancel();
    setFilters({ brands: [], models: [], sizes: [] });
    let resetSneakers = [...menSneakers];
    if (sortOrder === "asc") {
      resetSneakers.sort((a, b) =>
        parseInt(a.price.replace(/,/g, "")) - parseInt(b.price.replace(/,/g, ""))
      );
    } else if (sortOrder === "desc") {
      resetSneakers.sort((a, b) =>
        parseInt(b.price.replace(/,/g, "")) - parseInt(a.price.replace(/,/g, ""))
      );
    }
    setFilteredSneakers(resetSneakers);
  };

  return (
    <section className="sneaker__cnt">
      <SlideBarCatalog
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />
      <div className="sneaker__CardCont">
        <div className="sneaker__filterControls" data-aos="fade-up">
          <Dropdown onSelect={(eventKey) => setSortOrder(eventKey)}>
            <Dropdown.Toggle className="sneaker__dropdown-toggle">
              Сортировка:{" "}
              {sortOrder === "asc"
                ? "по возрастанию"
                : sortOrder === "desc"
                ? "по убыванию"
                : "без сортировки"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="sneaker__dropdown-menu">
              <Dropdown.Item
                eventKey="none"
                className="sneaker__dropdown-item"
              >
                Без сортировки
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="asc"
                className="sneaker__dropdown-item"
              >
                По возрастанию
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="desc"
                className="sneaker__dropdown-item"
              >
                По убыванию
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={clearFilters}
            className="sneaker__clear-btn"
          >
            Очистить фильтры
          </Button>
          <span className="sneaker__results-count">{filteredSneakers.length} результатов</span>
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