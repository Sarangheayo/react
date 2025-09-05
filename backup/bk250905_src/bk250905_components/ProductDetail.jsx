import { useEffect, useState } from 'react';
import './ProductDetail.css';

function ProductDetail(props) {
  const {product, setmodalFlg } = props;

  const [cnt, setCnt] = useState(0);  

  //Lifecycle Hooks -> 필요시 후크 걸듯 걸어서 사용할거야!!
  //mount 단계에서 최초 1회만 실행
  // useEffect(() => {
  //   console.log('Mount!!');
  // }, []); 

   //unmount 전에 실행 :Clean up function 작성
  //  useEffect(() => {
  //       console.log('Mount!!');
  //       //Clean up function
  //       return () => {
  //         console.log('UnMount');
  //       }
  //  }, []);
 

    //state가 변할때마다 실행, mount 후 최초 1회 실행
    useEffect(() => {
    }, [cnt]);



     return (
        <>
          <div className="detail-modal" 
          // onClick={() => { setmodalFlg(false)}} 
          >
            <div className="detail-box">
              <div className="detail-img" style={{backgroundImage : `url('${product.img}')`}}></div>
              <p className='detail-title'>{product.title}</p>
              <p className='detail-info'>{product.info}</p>
              <p className='detail-price'>{product.price}</p>
              <p>{cnt}</p>
              <button className='btn' type='button' onClick={() => { setCnt((prev) => prev + 1) }}>+</button>
            </div>
          </div>
        </>
     )
}


export default ProductDetail;