# Candidate Search Application

This application allows you to search for candidates on GitHub, view their information, and save potential candidates to a list. It is built with React, Vite, and fetches data from the GitHub API.

## User Story

### Candidate Search

**GIVEN** a candidate search application  
**WHEN** the candidate search page loads  
**THEN** the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, HTML URL, and company.

### Saving and Rejecting Candidates

**WHEN** I click the "add to candidate table" button  
**THEN** the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed.  

**WHEN** I click the "reject" button  
**THEN** the next candidate's information should be displayed without saving the current candidate.

### Potential Candidates Page

**WHEN** the potential candidates page loads  
**THEN** the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, HTML URL, and company if it was made available.  

**WHEN** the page reloads  
**THEN** the list of potential candidates should persist and be available for viewing.

**WHEN** there are no potential candidates  
**THEN** an appropriate message should be displayed indicating no candidates have been accepted.

### Rejecting Candidates

**WHEN** I click the "reject" button  
**THEN** the next candidate's information should be displayed without saving the current candidate.

## Features

- Search for candidates randomly from the GitHub API.
- View detailed information about each candidate (name, username, location, avatar, email, company, etc.).
- Save potential candidates to a list.
- Reject candidates with the "reject" button, skipping them and moving to the next candidate.
- View a list of saved candidates on a separate page with all their details.
- The list of saved candidates persists across page reloads.

## Setup and Installation

### Prerequisites

- **Node.js** (recommended version: v14+)
- **npm** or **yarn**

### Installation

1. Clone the repository

2. Install the dependencies:
   ```json
   npm install
   ```

3. Set-up your enviornment variables.
   The name of the variable must be as follows.
```json
VITE_GITHUB_TOKEN=<your-github-api-token>
```

4. Start the application
   ```json
   npm run build
   ```

## Image
![screenshotlistdemo](./public/Screenshot%202025-01-28%20220226.png)


