# Pokedex App

## Overview

The **Pokedex App** is a React-based web application that allows users to view and capture Pokémon from the Pokémon API. Users can browse a list of Pokémon, view details about each one, and "capture" their favorite Pokémon by assigning them a nickname and capture date. Captured Pokémon are stored locally using the browser's `localStorage`.

## Features

- **Pokémon List**: Browse a list of all available Pokémon fetched from the Pokémon API.
- **Pokémon Details**: View detailed information for each Pokémon, including stats, abilities, and more.
- **Search Pokemon**: You search a pokemon by its name.
- **Capture Pokémon**: Capture your favorite Pokémon, give them a nickname, and store them locally.
- **Release Pokémon**: Remove Pokémon from your captured collection.
- **List and Grid View**: You can toggle the list based on your preference.
- **All and Capture**: Enable users to filter the list.
- **Mobile Responsive**: Responsive across different devices (mobile, ipad, etc.).
- **Persisted Storage**: Captured Pokémon are stored using `localStorage`, ensuring they persist between sessions.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **TypeScript**: Strongly-typed language that builds on JavaScript, used to ensure type safety.
- **React Hooks**: Utilized for state management and encapsulating business logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Toastify**: Provides notifications for user actions (e.g., capture success, capture failure).
- **PokeAPI**: Public Pokémon API for fetching Pokémon data.
- **localStorage**: Used for persisting captured Pokémon data on the client side.

### Environment Variables

Create .env file and paste this

```plaintext
REACT_APP_API_URL=https://pokeapi.co/api/v2
```

### Prerequisites

- Node.js (version 14+)
- npm or yarn package manager

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/pokedex-app.git
   cd pokedex-app
   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Run the app**:

   ```bash
   npm run dev
   ```

### Usage

# Capturing Pokémon

1. Browse the Pokémon list on the home page.
2. Click on a Pokémon to view details.
3. In the Pokémon details page, click the "Capture" button to open the capture modal.
4. Enter a nickname for the Pokémon and select a capture date.
5. Save the Pokémon, which will store it in localStorage.

# Viewing Captured Pokémon

- Navigate to the "Captured Pokémon" section to view all the Pokémon you have captured.

# Releasing Pokémon

1. Go to the "Captured Pokémon" section.
2. Select the Pokémon you want to release.
3. Click "Release" to remove it from the captured list.

### API Reference

- The app uses PokeAPI to fetch Pokémon data.

# Endpoints

- Pokémon List: GET https://pokeapi.co/api/v2/pokemon
- Pokémon Details: GET https://pokeapi.co/api/v2/pokemon/{id}
