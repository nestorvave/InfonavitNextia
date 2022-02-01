/**
 * Dependencies
 */
import React, { useContext } from "react";

/**
 * Components
 */
import { Gifs } from "./Components/GifBody/Gifs";
import { Header } from "./Components/Header/Header";
import { Searcher } from "./Components/Searcher/Searcher";
import { TrendingContainer } from "./Components/TrendingContainer/TrendingContainer";
import { Footer } from "./Components/Footer/Footer";
import { DataContext } from "./context/DataContext";

/**
 * Styles
 */
import './App.scss'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

  const {theme}=useContext( DataContext )

  return (
    <div className={` ${theme && "dark" }`}>
      <Header />
      <Searcher />
      <Gifs />
      <TrendingContainer />
      <Footer />
    </div>

  );
};
