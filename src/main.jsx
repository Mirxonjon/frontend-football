import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/config-store";
import "./assets/scss/main.scss";
import App from "./App";
import Aos from "aos";
import { HelmetProvider } from "react-helmet-async";
Aos.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider> 
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>  
    </HelmetProvider>
);
