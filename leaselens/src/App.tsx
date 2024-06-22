import './assets/scss/LJG.scss';
import './assets/scss/hyunh.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './screens/ProductPage';
import ProductDetailPage from './screens/ProductDetailPage';
import ReviewListPage from './screens/ReviewListPage';

function App() {
  return (
    <div className="App">
      {/* <ProductPage /> */}
      <ProductDetailPage />
      {/* <ReviewListPage /> */}
    </div>
  );
}

export default App;
