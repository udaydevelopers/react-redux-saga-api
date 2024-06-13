import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <div className="App">
      <Router>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/products'>Products</Link></li>
          </ul>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="products" element={<ProductList />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
      </div>
    </Provider>
    </div>
  );
}

export default App;
