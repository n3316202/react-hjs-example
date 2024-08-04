import BootStrapButton from './components/BootstrapExample';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './route/Routes';

// https://innovatorwhy.tistory.com/12
// route 동적 생성



function App() {

  return (
    <BrowserRouter>
      <HeaderNav/>
      <div className='text-center mt-5'>
      <Routes>
        {
          routes.map((route,index) =>{
            return(
              <Route key={route.path || index} path={route.path} element={route.element}>      
             </Route>
            );
          })
        }
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
      </div>
    </BrowserRouter>    
  )
}

export default App
