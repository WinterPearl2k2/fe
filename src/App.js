import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from "./component/Layout";
import {Routes, Route} from "react-router-dom";

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies/all_movies")
      console.log(response.data);
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Layout}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
