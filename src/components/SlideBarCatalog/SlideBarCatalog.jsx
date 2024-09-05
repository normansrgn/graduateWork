import React from "react";

import "./__SlideBarCatalog.scss";

export default function SlideBarCatalog() {
  return (
    <>
      <section className="slideee">
        <div className="SlideBarCatalog">
          <div className="SlideBarCatalog__brands">
            <h1 className="SlideBarCatalog__title">Бренд:</h1>
            <div className="SlideBarCatalog__filterList">
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Nike"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="nike">Nike</label>
              </div>
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Adidas"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Adidas">Adidas</label>
              </div>
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Puma"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Puma">Puma</label>
              </div>
            </div>
          </div>
        </div>
        <div className="SlideBarCatalog">
          <div className="SlideBarCatalog__brands">
            <h1 className="SlideBarCatalog__title">Модель:</h1>
            <div className="SlideBarCatalog__filterList">
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Jordan"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Jordan">Jordan</label>
              </div>
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Dunk"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Dunk">Dunk</label>
              </div>
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Air Max"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Air Max">Air Max</label>
              </div>
              <div className="SlideBarCatalog__filterItem">
                <input
                  type="checkbox"
                  readonly
                  name="Air Max"
                  className="SlideBarCatalog__filterItemChecbox"
                />
                <label for="Air Max">Air Max</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}