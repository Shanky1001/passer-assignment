import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./route";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import NotFound from "./pages/404";
import Error from "./pages/Error";

function App() {
  return (
    <div className="container">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            {ROUTES.map((val) => (
              <Route key={val.path} path={val.path} element={val.component} errorElement={<Error />} />
            ))}
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
