import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import { Candidate } from './interfaces/Candidate.interface';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const handleSaveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prev) => [...prev, candidate]);
  };

  const handleRemoveCandidate = (candidateToRemove: Candidate) => {
    setSavedCandidates((prev) => prev.filter((candidate) => candidate.login !== candidateToRemove.login));
  }

  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CandidateSearch onSaveCandidate={handleSaveCandidate} />} />
          <Route path="/SavedCandidates" element={<SavedCandidates savedCandidates={savedCandidates} onRemoveCandidate={handleRemoveCandidate} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;