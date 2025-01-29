import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';

interface HomeProps {
  onSaveCandidate: (candidate: Candidate) => void;
}

const CandidateSearch: React.FC<HomeProps> = ({ onSaveCandidate }) => {
  const [users, setUsers] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await searchGithub();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users.");
      }
    };
    fetchUsers();
  }, []);

  const handleSelectUser = async (username: string) => {
    try {
      const userData = await searchGithubUser(username);
      setSelectedCandidate(userData);
    } catch (err) {
      setError("Failed to load user details.");
    }
  };

  const handleSaveCandidate = () => {
    if (selectedCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      const updatedCandidates = [...savedCandidates, selectedCandidate];
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
      onSaveCandidate(selectedCandidate); 
      setSelectedCandidate(null);
      goToNextCandidate();
    }
  };

  const handleReject = () => {
    setSelectedCandidate(null);
    goToNextCandidate();
  };

  const goToNextCandidate = () => {
    setCurrentCandidateIndex((prevIndex) => (prevIndex + 1) % users.length);
  }

  if (users.length === 0) {
    return <p>Loading Candidates...</p>;
  }

  const currentCandidate = users[currentCandidateIndex];

  return (
    <div>
      <h1>Candidate Search</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedCandidate && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h2>{selectedCandidate.name || "Name not available"}</h2>
          <img
            src={selectedCandidate.avatar_url}
            alt={selectedCandidate.login}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <p>
            <strong>Username:</strong> {selectedCandidate.login}
          </p>
          <p>
            <strong>Location:</strong> {selectedCandidate.location || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {selectedCandidate.email || "Not provided"}
          </p>
          <p>
            <strong>Company:</strong> {selectedCandidate.company || "Not provided"}
          </p>
          <p>
            <a href={selectedCandidate.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
          <div>
            <button onClick={handleSaveCandidate}>Add to Candidate Table</button>
            <button onClick={handleReject}>Reject</button>
          </div>
        </div>
      )}

      {/* Show one user card at a time */}
      {!selectedCandidate && currentCandidate && (
        <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <img
            src={currentCandidate.avatar_url}
            alt={currentCandidate.login}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{currentCandidate.login}</h2>
          <button onClick={() => handleSelectUser(currentCandidate.login)}>View Details</button>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
