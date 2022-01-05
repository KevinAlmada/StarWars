import Planets from "./components/Planets";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import "./styles/styles.scss";
import NotFound from "./components/NotFound";
function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/fav" element={<Favorites />} />
          <Route
            path="*"
            element={
              <NotFound error="are you trying to access the dark side ?" />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
