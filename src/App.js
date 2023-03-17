
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
  const [filter, setFilter] = useState({})

  return (
    <>
        <section className='banner'>
          <Nav />
          <Header  />
          <Filter filter={filter} setFilter={setFilter} />
        </section>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<AllReviews filter={filter}/>}/>
          <Route 
            path="/reviews/:review_id"
            element={<SingleReview />} filter={filter}/>
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
