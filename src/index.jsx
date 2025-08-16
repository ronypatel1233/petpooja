import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OutletHomepage } from "./screens/OutletHomepage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <OutletHomepage />
  </StrictMode>,
);
