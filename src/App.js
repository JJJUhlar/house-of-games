
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {AllReviews} from "./components/AllReviews"
import { SingleReview } from './components/SingleReview';
import { Category } from './components/Category';
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <Header className="Header" />
      <Nav />
      <Routes>
        <Route 
          path="/"
          element={<AllReviews className="AllReviews" />}/>
        <Route 
          path="/reviews/:review_id"
          element={<SingleReview />}/>
        <Route 
          path="/category/:category"
          element={<Category />}/>
      </Routes>
    </>
  );
}

export default App;
