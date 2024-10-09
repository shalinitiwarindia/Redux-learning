import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Store } from "redux";
import App from "./App";
import { AppContextProvider } from "./Redux/AppContextProvider";
import { store } from "./Redux/store";

console.log(store.getState());
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </StrictMode>
);
