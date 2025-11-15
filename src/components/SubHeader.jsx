import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx"
import { useEffect, useRef } from "react";

const SubHeader = () => {
  const container = useRef(null);

  useEffect(() => {
    // limpa o container antes de inserir
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.textContent = `
      {
        "symbols": [
          { "proName": "FX_IDC:USDBRL", "title": "USD" },
          { "proName": "FX_IDC:EURBRL", "title": "EUR" },
          { "proName": "FX_IDC:JPYBRL", "title": "JPY" },
          { "proName": "FX_IDC:CADBRL", "title": "CAD" },
          { "proName": "FX_IDC:GBPBRL", "title": "GBP" }
        ],
        "colorTheme": "light",
        "locale": "br",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "displayMode": "regular"
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div className="msgAssine">
          <p>Apoie o verdadeiro jornalismo</p>
          <Link to="#"><Button>Assine</Button></Link>
      </div>

      <div style={{ borderBottom: '2px solid #ccc' }}>
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
