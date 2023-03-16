
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {AllReviews} from "./components/AllReviews"
import { SingleReview } from './components/SingleReview';
import { Category } from './components/Category';
import { Nav } from './components/Nav'
import { Filter } from './components/Filter';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState({})

  return (
    <>
      <Header className="Header" />
      <Nav />
      <Filter filter={filter} setFilter={setFilter} />
      <Routes>
        <Route 
          path="/"
          element={<AllReviews className="AllReviews" filter={filter}/>}/>
        <Route 
          path="/reviews/:review_id"
          element={<SingleReview />} filter={filter}/>
        <Route 
          path="/category/:category"
          element={<Category />}/>
      </Routes>
    </>
  );
}

export default App;
