import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    // 컴포넌트 내부에서 프로그래밍 방식(JS)로 페이지 이동을 구현
    const navigate = useNavigate();

    const ok = () => {
      navigate('/ok');
    }

  return (
    <>
      <header>
          <h1>앱</h1>
          <div className="nav">
            <Link to={'/list'} className='test'>리스트 페이지</Link>
            <Link to={'/detail'}>상세 페이지</Link>
            <br />
            <NavLink to={'/list'}>list page</NavLink>
            <NavLink to={'/detail'}>detail page</NavLink>
            <br /> <button type='button' onClick={ok}>확인 </button>
          </div>
      </header>
    
      <main>
          {/* 라우터의 자식 컴포넌트를 출력 */}
          <Outlet></Outlet>
      </main>

      <footer>
          <p>카피라이트</p>
      </footer>
    </>
  )
}
export default App;