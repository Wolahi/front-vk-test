import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import "./ui/style/Index.scss";
import App from "./App";

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root") as HTMLElement,
);
