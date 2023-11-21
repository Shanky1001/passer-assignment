import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./route";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import NotFound from "./pages/404";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="container">
      <ErrorBoundary fallback={<Error />}>
        <Provider store={Store}>
          <BrowserRouter>
            <Wrapper />
            <Routes>
              {ROUTES.map((val) => (
                <Route key={val.path} path={val.path} element={val.component} />
              ))}
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
