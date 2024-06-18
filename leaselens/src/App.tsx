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

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <RevCard />
      <Profile />
      <Banner />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
