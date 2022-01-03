import Planets from "./components/Planets";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Favorites from "./components/Favorites";
import './styles/base.scss'
function App() {
  const store = generateStore ()
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Planets/>}/>
      <Route path='/fav' element={<Favorites/>}/>
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
