import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Button, Dropdown } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import debounce from "lodash.debounce";
import SneakerCard from "../../SneakersPromo/SneakersCard";
import { menSneakers } from "./data";
import SlideBarCatalog from "../../SlideBarCatalog/SlideBarCatalog";
import { FaSearch } from "react-icons/fa";

export default function SneakersPromoMen() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [filteredSneakers, setFilteredSneakers] = useState(menSneakers);
  const [filters, setFilters] = useState({
    brands: [],
    models: [],
    sizes: [],
  });
  const [sortOrder, setSortOrder] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters, search, and sorting
  const applyFilters = useCallback(() => {
    let result = [...menSneakers];

    // Поиск по заголовку
    if (searchQuery.trim()) {
      result = result.filter((sneaker) =>
        sneaker.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }

    // Фильтры по брендам (исправлено)
    if (filters.brands.length > 0) {
      result = result.filter((sneaker) =>
        filters.brands.includes(sneaker.brand) // Используем поле brand из данных
      );
    }

    // Фильтры по моделям (исправлено)
    if (filters.models.length > 0) {
      result = result.filter((sneaker) =>
        filters.models.includes(sneaker.model) // Используем поле model из данных
      );
    }

    // Фильтры по размерам
    if (filters.sizes.length > 0) {
      result = result.filter((sneaker) =>
        sneaker.availableSizes?.some((size) => filters.sizes.includes(size))
      );
    }

    // Сортировка
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
  }, [filters, sortOrder, searchQuery]);

  const debouncedApplyFilters = useCallback(
    debounce(applyFilters, 300),
    [applyFilters]
  );

  useEffect(() => {
    debouncedApplyFilters();
    return () => {
      debouncedApplyFilters.cancel();
    };
  }, [filters, sortOrder, searchQuery, debouncedApplyFilters]);

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
    setFilters({ brands: [], models: [], sizes: [] });
    setSearchQuery("");
    setSortOrder("none");
  };

  const handleSortSelect = (eventKey) => {
    setSortOrder(eventKey);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="sneaker__cnt">
      <SlideBarCatalog
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />
      <div className="sneaker__CardCont">
        <div className="sneaker__filterControls" data-aos="fade-up">
          <div className="sneaker__controls-left">
            <span>Сортировка:</span>
            <Dropdown onSelect={handleSortSelect}>
              <Dropdown.Toggle
                className="sneaker__toggle"
                variant="outline-secondary"
                id="dropdown-sort"
              >
                {sortOrder === "asc"
                  ? "По возрастанию цены"
                  : sortOrder === "desc"
                  ? "По убыванию цены"
                  : "Без сортировки"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="none">Без сортировки</Dropdown.Item>
                <Dropdown.Item eventKey="asc">По возрастанию цены</Dropdown.Item>
                <Dropdown.Item eventKey="desc">По убыванию цены</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <Button 
            variant="outline-danger" 
            onClick={clearFilters}
            className="sneaker__clear-btn"
          >
            Сбросить фильтры
          </Button> */}
        </div>
        
        <div className="sneaker__search" data-aos="fade-up">
          <FaSearch className="sneaker__search-icon" />
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        {filteredSneakers.length === 0 ? (
          <div className="no-results">
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить фильтры или сбросить их.</p>
            <Button variant="primary" onClick={clearFilters}>
              Сбросить фильтры
            </Button>
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