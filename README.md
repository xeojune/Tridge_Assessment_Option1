# My React Data Breadcrumb

## Overview
Breadcrumbs are navigational elements typically positioned at the top-left of a webpage. They provide users with a clear indication of their current location within the website and allow them to easily navigate back to previous pages.

> **Note:** The term "Breadcrumb" (Breadcrum) here refers to the navigational text that displays the user's path through the website.

## Route Structure
The application follows the structure below, where each route reflects a specific level in the navigation hierarchy:

- **`/`**  
  *Home*

- **`/species`**  
  *Home > Pokemon Species List*

- **`/species/:species`**  
  *Home > Pokemon Species List > {{pokemonSpeciesName}} Overview*

- **`/species/:species/pokemons`**  
  *Home > Pokemon Species List > {{pokemonSpeciesName}} Overview > Pokemon List*

- **`/species/:species/pokemons/:pokemon`**  
  *Home > Pokemon Species List > {{pokemonSpeciesName}} Overview > Pokemon List > {{pokemonName}}*

## API Reference
This project uses the [PokeAPI](https://pokeapi.co/docs/v2) to fetch Pokemon data. The following endpoints are utilized:

- **Pokemon Species List Query:**  
  `https://pokeapi.co/api/v2/pokemon-species`

- **Pokemon Species Retrieve Query:**  
  `https://pokeapi.co/api/v2/pokemon-species/{{speciesId}}`

- **Pokemon List by Species Query:**  
  `https://pokeapi.co/api/v2/pokemon-species/{{speciesId}}`  
  *(Utilize the `varieties` field for fetching species-specific Pokemon.)*

- **Pokemon Retrieve Query:**  
  `https://pokeapi.co/api/v2/pokemon/{{pokemonId}}`

## Requirements
- **Route Reflection:**  
  The application must mirror the provided route structure and update the breadcrumb according to URL changes.

- **Independent Routes:**  
  Each route should be independent and include its own breadcrumb component.

- **Parent-Child Logic:**  
  Implement internal logic to accurately represent the relationship between parent and child routes.

- **Navigation:**  
  - Clicking a breadcrumb should navigate to the corresponding URL.
  - The breadcrumb for the current route should be displayed as non-clickable.

- **Dynamic Data & Validation:**  
  The breadcrumb must accept dynamic data (e.g., `{{pokemonSpeciesName}}` and `{{pokemonName}}`) and perform necessary validations to display appropriate names.

## Advanced Features (Optional)
- **Mobile Optimization:**  
  Optimize the breadcrumb UI for mobile by collapsing intermediate paths when needed.

- **TypeScript Integration:**  
  Use TypeScript to enhance validation and minimize human errors.

- **Data Loading States:**  
  Implement handling for loading states to provide feedback when data is being fetched.

- **Event Callbacks:**  
  Include callback functions on breadcrumb clicks to track user interactions.

## Tech Stack
- **Framework:** React
- **Language:** JavaScript (ES6) or TypeScript (for enhanced validation)
- **Styling:** Any preferred styling library

## Getting Started

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
2. **Navigate into the project directory:**
   ```bash
    cd my-react-data-breadcrumb

3. **Install dependencies:**
   ```bash
    npm install
or
    yarn install

4. **Running the Application**
To start the development server, run:
  ```bash
    npm start
or
    yarn start

Then, open http://localhost:3000 in your browser to view the application.

