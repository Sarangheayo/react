import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Link, Outlet } from 'react-router-dom';
// import ProductList from './components/ProductList.jsx';
// import TapUi  from './components/TapUi.jsx';
import './App.css';



function App() {
  // const [prodFlg, setProadFlg] = useState(true);
  // const [tapFlg, setTapFlg] = useState(false);

  // const viewProductList = () => {
  //   setProadFlg(true);
  //   setTapFlg(false);
  // }

  // const viewTapUi = () => {
  //   setProadFlg(false);
  //   setTapFlg(true);
  // }

  return (
    <>
      <Header></Header> 
      
      <main>
          <div>
            <Link to={'/'}>상품 리스트</Link>
            <Link to={'/test'}>테스트</Link>
            <Outlet></Outlet>
          </div>
          {/* <span onClick={viewProductList}>상품 리스트</span>
          <span onClick={viewTapUi}>테스트</span>  */}
          {/* { tapFlg && <TapUi></TapUi> }
         { prodFlg && <ProductList></ProductList> } */} 
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;  