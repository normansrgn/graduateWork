import React from "react";

import "./__SlideBarCatalog.scss";

export default function SlideBarCatalog() {
  return (
    <>
      <section className="SlideBarCatalog">
        <div className="SlideBarCatalog__brands">
          <h1 className="SlideBarCatalog__title">Бренды</h1>
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
      </section>
    </>
  );
}
