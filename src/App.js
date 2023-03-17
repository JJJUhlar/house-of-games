
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {AllReviews} from "./components/AllReviews"
import { SingleReview } from './components/SingleReview';
import { Category } from './components/Category';
import { ErrorPage } from './components/ErrorPage';
import { Nav } from './components/Nav'
import { Filter } from './components/Filter';
import { useState } from 'react';

function App() {

  return (
    <>
        <section className='banner'>
          <Nav />
          <Header  />
          <Filter />
        </section>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<AllReviews />}/>
          <Route 
            path="/reviews/:review_id"
            element={<SingleReview />} />
          <Route 
            path="/category/:category"
            element={<Category />}/>
          <Route path="/*" element={<ErrorPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
