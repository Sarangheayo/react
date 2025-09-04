import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx';
import TapUi  from './components/TapUi.jsx';
import './App.css';
import { useState } from 'react';


function App() {
  const [prodFlg, setProadFlg] = useState(true);
  const [tapFlg, setTapFlg] = useState(false);

  const viewProductList = () => {
    setProadFlg(true);
    setTapFlg(false);
  }

  const viewTapUi = () => {
    setProadFlg(false);
    setTapFlg(true);
  }

  return (
    <>
      <Header></Header> 
      <main>
         <div>
          <span onClick={viewProductList}>상품 리스트</span>
          <span onClick={viewTapUi}>테스트</span>
         </div>
         { tapFlg && <TapUi></TapUi> }
         { prodFlg && <ProductList></ProductList> }
      </main>
      <Footer></Footer>
    </>
  );
}

export default App; 