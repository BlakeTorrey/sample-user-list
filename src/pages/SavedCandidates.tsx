import React from "react";
import { Candidate } from "../interfaces/Candidate.interface"; 

interface SavedCandidatesProps {
  savedCandidates: Candidate[]; 
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ savedCandidates }) => {
  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>GitHub Profile</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={candidate.avatar_URL}
                    alt={candidate.login}
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.login}</td>
                <td>{candidate.location || "Not provided"}</td>
                <td>{candidate.email || "Not provided"}</td>
                <td>{candidate.company || "Not provided"}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
