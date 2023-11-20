import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./route";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

function App() {
  return (
    <div className="container">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            {ROUTES.map((val) => (
              <Route path={val.path} element={val.component} />
            ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
