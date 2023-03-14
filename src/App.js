
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Header} from "./components/Header"
import {AllReviews} from "./components/AllReviews"


function App() {
  return (
    <>
      <Header className="Header" />
      <Routes>
        <Route 
          path="/"
          element={<AllReviews className="AllReviews" />}/>
      </Routes>
    </>
  );
}

export default App;
