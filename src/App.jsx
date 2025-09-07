import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Post from './pages/Post';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryAuthor from './pages/CategoryAuthor';
import QuemSomos from './pages/QuemSomos';
import UltimasNoticias from './pages/UltimasNoticias';
import Search from './pages/Search';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade';
import Login from './pages/Login';
import { Helmet } from 'react-helmet';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function AppContent() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Provider store={store}>
        <Helmet>
          <title>Revista Timeline</title>
        </Helmet>

        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path='/' element={currentUser ? <Home /> : <Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/news/:id' element={currentUser ? <Post /> : <Login />} />
              <Route path='/category/:id' element={currentUser ? <Categories /> : <Login />} />
              <Route path='/author/:id' element={currentUser ? <CategoryAuthor /> : <Login />} />
              <Route path='/ultimas-noticias' element={currentUser ? <UltimasNoticias /> : <Login />} />
              <Route path='/search' element={currentUser ? <Search /> : <Login />} />
              <Route path='/quem-somos' element={currentUser ? <QuemSomos /> : <Login />} />
              <Route path='/politicas-privacidade' element={<PoliticasPrivacidade />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
    </Provider>

  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App
