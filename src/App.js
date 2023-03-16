
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {AllReviews} from "./components/AllReviews"
import { SingleReview } from './components/SingleReview';
import { Category } from './components/Category';


function App() {
  return (
    <>
      <Header className="Header" />
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
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </>
  );
}

export default App;
