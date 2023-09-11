import{Route, Routes} from 'react-router-dom';
import ProductsPage from './components/pages/ProductsPage';
import AboutPage from './components/pages/AboutPage';
import Navigation from './components/Navigation';

function App() {
  return(
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
    

  )
  
}

export default App;
