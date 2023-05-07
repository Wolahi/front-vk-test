import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import "./ui/style/Index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,

  document.getElementById("root") as HTMLElement,
);
