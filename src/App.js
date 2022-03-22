import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './page/Home';
import Nabvar from './components/Nabvar';
import Products from './page/Products';
import Product from './page/Product';
import About from './page/About';
import Contact from './page/Contact';
import 'react-loading-skeleton/dist/skeleton.css'
import { Routes, Route} from 'react-router-dom'
import Error from './components/Error';
import Cart from './page/Cart';

function App() {
  return (
    <div className="App">      
      <Nabvar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/product" element={<Products/>} />
      <Route exact path="/product/:id" element={<Product/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="*" element={<Error/>} />      
      <Route/>
      </Routes>
    </div>
  );
}

export default App;
