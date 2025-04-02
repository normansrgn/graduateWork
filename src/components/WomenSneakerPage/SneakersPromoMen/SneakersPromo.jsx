import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../SneakersPromo/__SneakersPromo.scss";

import SneakerCard from "../../SneakersPromo/SneakersCard";
import { womenSneakers } from "./data";
import SlideBarCatalog from "../../SlideBarCatalog/SlideBarCatalog";

export default function SneakersPromoMen() {
  Aos.init({ duration: 1000 });
  
  const [filteredSneakers, setFilteredSneakers] = useState(womenSneakers);
  const [filters, setFilters] = useState({
    brands: [],
    models: [],
    sizes: []
  });

  // Функция для обработки изменений фильтров
  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters(prevFilters => {
      const newFilters = {...prevFilters};
      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      }
      return newFilters;
    });
  };

  // Функция для фильтрации кроссовок
  const applyFilters = () => {
    let result = [...womenSneakers];
    
    // Фильтрация по брендам
    if (filters.brands.length > 0) {
      result = result.filter(sneaker => {
        const brand = sneaker.title.split(' ')[0]; // Извлекаем бренд из названия
        return filters.brands.includes(brand);
      });
    }
    
    // Фильтрация по моделям
    if (filters.models.length > 0) {
      result = result.filter(sneaker => {
        return filters.models.some(model => 
          sneaker.title.toLowerCase().includes(model.toLowerCase())
        );
      });
    }
    
    // Фильтрация по размерам (в нашем случае просто пример, так как в данных нет размеров)
    // Можно добавить поле sizes в данные о кроссовках
    if (filters.sizes.length > 0) {
      result = result.filter(sneaker => {
        // Здесь должна быть логика проверки размеров
        // Например, если у кроссовок есть массив доступных размеров:
        // return filters.sizes.some(size => sneaker.availableSizes.includes(size));
        return true; // Временно, пока нет данных о размерах
      });
    }
    
    setFilteredSneakers(result);
  };

  // Применяем фильтры при их изменении
  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Функция для сортировки по цене
  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    setFilteredSneakers(prev => {
      const sorted = [...prev];
      if (sortOrder === "asc") {
        sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else {
        sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      }
      return sorted;
    });
  };

  return (
    <>
      <section className="sneaker__cnt">
        <SlideBarCatalog 
          onFilterChange={handleFilterChange}
          activeFilters={filters}
        />
        <div className="sneaker__CardCont">
          <div className="sneaker__PriceFiltr" data-aos="fade-up">
            <span>
              Сортировка по: цена{" "}
              <select name="" id="" onChange={handleSortChange}>
                <option value="asc">возрастанию</option>
                <option value="desc">убыванию</option>
              </select>
            </span>
          </div>
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
        </div>
      </section>
    </>
  );
}