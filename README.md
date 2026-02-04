# Pokémon Roster & Battle Application Project

This project is a full-stack application for managing a Pokémon roster and battling. Students have a choice of frameworks to implement this project.

## Project Overview

*   **Duration:** 5 days (Full Time) / 10 Days (Part Time)
*   **Presentation:** To be Determined (TBD) by Instructor | Mandatory

## Project Requirements

The project is structured around a set of functional requirements.  Please review these carefully.

### General Project Guidelines

*   **Group Project:** Develop the application collaboratively, ensuring tasks are shared evenly among team members.
*   **Group Work Guidelines:** Adhere to the bootcamp's best practices for teamwork and collaboration.
*   **Single Public Repository:**  All client and server code *must* reside in a single public GitHub repository.  Instructors will *not* be added as collaborators.
*   **Pull Request Workflow:** All code changes must be merged into the `main` branch via reviewed Pull Requests. This promotes code quality and collaboration.

### Framework Choice

Choose **one** of the following frameworks for implementation:

*   **Next.js (with React Server Components - RSC):** Leveraging Next.js's features and utilizing React Server Components for efficient data fetching and rendering.
*   **React Router (in Framework Mode):** Implementing data loading and actions using React Router's framework mode.

### Technology Stack

*   **TypeScript:**  Used consistently throughout both the browser and server codebases.
*   **Environment Variables:** Secrets (database connection strings, PokeAPI URLs, etc.) should be managed using `.env` files and framework-specific environment variable helpers.
*   **PostgreSQL (Neon):** A cloud-hosted PostgreSQL database will be provisioned.
*   **Tailwind CSS:**  Used for styling with a focus on responsive design.
*   **Zod:** Used for form validation.

## Functional Requirements

Here's a breakdown of the specific functionalities required for the project, categorized for clarity.

### Database & Data Layer

*   **FR008: Cloud DB Provisioning:** Provision a PostgreSQL database using Neon.
*   **FR009: Leaderboard Model:** Create a database schema for the leaderboard with the following fields:
    *   `id` / `_id` (Unique identifier)
    *   `username` (String, NOT NULL)
    *   `score` (Number, NOT NULL)
    *   `date` (Date, default: current timestamp)

### Data Fetching and Mutations

*   **FR011: Retrieve Leaderboard:** Implement an endpoint to fetch all leaderboard scores, ordered by score in descending order (highest score first).
*   **FR012: Add to Leaderboard:** Implement an endpoint that accepts `username` and `score`, validates the input, writes the new record to the database, and returns the created record.
    *   *Implementation Note:*  Use React Server Components (RSC) and Server Actions if using Next.js. Use Loaders and Actions if using React Router framework mode.

### Front-End Features

*   **FR014: Route Map:**  Implement navigation for the following pages using the chosen framework's routing primitives:
    *   Home
    *   Pokémon Details
    *   My Roster
    *   Battle
    *   Leaderboard
*   **FR015: Home Page – Pokémon List:** Fetch Pokémon data from the PokeAPI and display them as cards. Each card should link to the Pokémon details page (/pokemon/:id).
*   **FR016: Pokémon Details Page:** Display detailed Pokémon information, including stats, types, and abilities.  Include a button to "Add to Roster."
*   **FR017: My Roster Page:** Display the user's chosen Pokémon. Allow for removal of Pokémon from the roster.  Persist the roster data, either in `localStorage` or in the database.
*   **FR018: Battle Page:**  Allow users to battle a random Pokémon, using simple type/stat logic.  Track wins, losses, and experience points.
*   **FR019: Leaderboard Page:** Fetch and display the leaderboard scores.  After a battle, prompt the user for their name and allow them to submit a new score to the leaderboard.
*   **FR020: Form Validation:** Validate all user inputs (e.g., username, roster changes) using Zod *before* submitting them.
*   **FR021: Responsive Styling:**  Ensure the application is styled using Tailwind CSS and is responsive and usable across both mobile and desktop devices.
