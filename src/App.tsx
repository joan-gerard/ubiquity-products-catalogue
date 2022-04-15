import { useState, useEffect, useCallback } from 'react'
import './App.css';
import Header from './components/Header/Header';
import UtilityBar from './components/UtilityBar/UtilityBar';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import { Routes, Route } from 'react-router-dom';
import { ProductType } from './interface/interface';
import ProductListView from './components/ProductListView/ProductListView';
import ProductGridView from './components/ProductGridView/ProductGridView';


const App = () => {

  const [isGrid, setIsGrid] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://static.ui.com/fingerprint/ui/public.json')
      const json = await data.json();
      setProducts(json.devices)
    }
    fetchData();
  }, [])

  const switchToGrid = useCallback(() => {
    setIsGrid(true)
  }, [])
  const switchToView = useCallback(() => {
    setIsGrid(false)
  }, [])


  return (
      <div className="app">
        <Header />
        <UtilityBar switchToGrid={switchToGrid} switchToView={switchToView} />
        <Routes>
          <Route path="/" element={isGrid
            ? <ProductGridView products={products} setSelectedProduct={setSelectedProduct} />
            : <ProductListView products={products} setSelectedProduct={setSelectedProduct} />
          } />
          <Route path="/devices/:id" element={<ProductDetailsPage products={products} selectedProduct={selectedProduct} />} />
        </Routes>
      </div>
  )
}

export default App