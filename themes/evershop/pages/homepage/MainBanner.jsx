import React from "react";
import "./MainBanner.scss";
import "./tailwind.scss";

function MainBanner() {
  return (
    <div className="main-banner-home page-width flex items-center">
      <div className="text-center md:text-left px-2">
        <h2 className="h1">E-Moio | Realizando Desejos</h2>
        <p>Liberte seu Estilo Interior ❤‍🔥🛍️🇲🇿</p>
        <p>Descubra as Últimas Tendências e Eleve seu Guarda-Roupa Hoje</p>
        <a className="button button-primary" href="/todos-os-produtos">
          MOSTRAR TUDO AGORA
        </a>
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
