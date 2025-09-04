import './ProductList.css';

function ProductList() {
   const products = [
     {id: 0, title: '바지', info: '좋은 바지', price: 10000, img: 'https://unsplash.com/photos/yC-Yzbqy7PYhttps://picsum.photos/id/0/5000/3333'},
     {id: 1, title: '티샤스', info: '좋은 티샤스', price: 4000, img: 'https://picsum.photos/id/1/5000/3333'},
     {id: 2, title: '양말', info: '좋은 양말', price: 5000, img: 'https://unsplash.com/photos/yC-Yzbqy7PY'},
   ];

return (
  <div className="card-container">
    {
      products.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
            <p className="card-title">{item.title}</p>
            <p className="card-price">{item.price}</p>
          </div>
        )
      })
    }
  </div>
)

}

export default ProductList;