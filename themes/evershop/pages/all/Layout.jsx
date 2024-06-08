import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";
import Banner from "./Banner";

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <Banner message={<><strong>OFERTA ESPECIAL:</strong> Frete grátis em todos os pedidos acima de 5.000 MZN!Desejamos a Você Boas Compras ❤️🛍️🛒</>} />


      <header className="2xl:px-[50px] border-b border-header-border">
        <div className="page-width grid grid-cols-2 md:grid-cols-3 h-6">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },
                props: {
                  id: "icon-wrapper",
                  className: "icon-wrapper flex justify-self-end justify-end space-x-1",
                },
                sortOrder: 20,
              },
            ]}
          />
        </div>
      </header>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="page-width grid grid-cols-1 xl:grid-cols-3 gap-2 justify-between">
          <div>
            <div className="card-icons flex justify-center space-x-1 xl:justify-start">
              <div>
                <a href="mailto:support@e-moio.com">
                  <img src="/email.svg" alt="Email" width="32" height="28"/>
                </a>
              </div>
              <div>
                <a href="https://tiktok.com/@e_moio/">
                  <img src="/tiktok.svg" alt="TikTok" width="32" height="28"/>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/e_moio_oficial/">
                  <img src="/instagram.svg" alt="Instagram" width="32" height="28"/>
                </a>
              </div>
              <div>
                <a href="https://x.com/e_moio_oficial">
                  <img src="/twitter.svg" alt="X" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/@e_moio/">
                  <img src="/youtube.svg" alt="youtube" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://www.t.me/e_moio_oficial/">
                  <img src="/telegram.svg" alt="telegram" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://wa.me/258847215419">
                  <img src="/whatsapp.svg" alt="WhatsApp" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/lojae-moio/">
                  <img src="/facebook.svg" alt="facebook" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://k.kwai.com/u/@e-moio/ElcofCJ0">
                  <img src="/kwai.svg" alt="kwai" width="32" height="28" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/e-moio">
                  <img src="/social.svg" alt="LinkedIn" width="32" height="28" />
                </a>
              </div>
            </div>
          </div>
  <div>
  <ul className="card-icons flex justify-center space-x-1 xl:justify-start">
    <li key="visa">
      <img src="/visa.svg" alt="Visa" width="32" height="28" />
    </li>
    <li key="mastercard">
      <img src="/mastercard.svg" alt="Mastercard" width="32" height="28" />
    </li>
    <li key="paypal">
      <img src="/paypal.svg" alt="PayPal" width="32" height="28" />
    </li>
  </ul>
</div>
          <div className="copyright self-center text-center xl:text-right text-textSubdued">
            <span>Direitos Autorais © 2024 E-Moio, E.I</span>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 1,
};
