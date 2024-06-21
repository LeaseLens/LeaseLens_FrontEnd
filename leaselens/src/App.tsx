import './assets/scss/LJG.scss';
import './assets/scss/hyunh.scss'
import MobileSideBar from './components/MobileSideBar';
import MainPage from "./screens/MainPage";
import ProductPage from './screens/ProductPage';
// import ReviewPage from './screens/ReviewPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <ReviewPage /> */}
      {/* <MobileSideBar /> */}
      <ProductPage />
    </div>
  );
}

export default App;
