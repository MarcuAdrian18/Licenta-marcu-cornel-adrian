import "./index.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
import { useState, useEffect } from "react";
import LoadingCapy from "./components/loading-capybara";
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const loading = setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Provider store={store}>
      {loading ? (
        <LoadingCapy />
      ) : (
        <div className="main-container">
          <CellList />
        </div>
      )}
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
