import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BirdQuiz from './pages/BirdQuiz';
import AddBird from './pages/AddBirdd';
import BirdsInPoland from './pages/BirdsInPoland';
import Comments from './pages/Comments'; 
import './styles/styles.scss';

const App = () => {
  const [birds, setBirds] = useState([]);
  const [comments, setComments] = useState([]);

  const addBird = (bird) => {
    setBirds([...birds, bird]);
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Strona Główna</Link>
          <Link to="/quiz">Quiz o Ptakach</Link>
          <Link to="/add-bird">Dodaj Ptaka</Link>
          <Link to="/birds-in-poland">Ptaki w Polsce</Link>
          <Link to="/comments">Komentarze</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<BirdQuiz />} />
          <Route path="/add-bird" element={<AddBird addBird={addBird} birds={birds} />} />
          <Route path="/birds-in-poland" element={<BirdsInPoland />} />
          <Route path="/comments" element={<Comments addComment={addComment} comments={comments} />} />
        </Routes>
        <footer>
          <p>Kontakt:</p>
          <p>Instagram: @ptaakiiii1231313</p>
          <p>Email: ptaakiiii1231313@gmailus.com</p>
          <Link to="/comments">Zostaw komentarz</Link>
        </footer>
      </div>
    </Router>
  );
};

export default App;
