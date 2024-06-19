import React from 'react';
import Footer from './components/Footer';
import './assets/scss/hyunh.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import RevCard from './components/RevCard';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import Banner from './components/Banner';
import Login from './components/Login';
// import ProCard from './components/proCard';
// import PostTable from './components/PostTable';
import ProInfo from './components/ProInfo';
// import Comment from "./components/Comment";
// import Search from "./components/Search";
import LodingPage from "./screens/LodingPage";

function App() {
  return (
    <div className="App">
      <LodingPage />
    </div>
  );
}

export default App;
