import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
  onRemoveCandidate: (candidateToRemove: Candidate) => void;
}


const SavedCandidates: React.FC<SavedCandidatesProps> = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(storedCandidates);
  }, []);

  const handleRemoveCandidate = (candidateToRemove: Candidate) => {
    const updatedCandidates = savedCandidates.filter(
      (candidate) => candidate.login !== candidateToRemove.login
    );

    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    setSavedCandidates(updatedCandidates); 
  };

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates have been saved yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Username</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>GitHub URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.login} style={{ width: '50px', borderRadius: '50%' }} />
                </td>
                <td>{candidate.login}</td>
                <td>{candidate.name || 'Not provided'}</td>
                <td>{candidate.location || 'Not provided'}</td>
                <td>{candidate.email || 'Not provided'}</td>
                <td>{candidate.company || 'Not provided'}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    View GitHub Profile
                  </a>
                </td>
                <td>
                  <button onClick={() => handleRemoveCandidate(candidate)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;
