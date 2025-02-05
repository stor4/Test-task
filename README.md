# Real Estate Project Viewer

## Overview
This project allows users to load and display a list of real estate properties from an API. It features a responsive design and is built with React and TypeScript without external libraries (except for SASS).

## Live Demo
[View the project](https://test-task-projects.netlify.app/)

![Снимок экрана 2025-02-05 в 18 21 11](https://github.com/user-attachments/assets/97cd48cb-7261-4b7b-bcd4-66a3ab35acd1)


## Features
- Fetches and displays real estate properties from an API.
- Responsive design for seamless viewing on various devices.
- Pagination support to navigate through property listings.
- Image carousel for viewing multiple images of each property.
- Error handling and loading indicators.

## Tech Stack
- **React**: Component-based UI
- **TypeScript**: Type safety and better development experience
- **SASS**: Styling
- **Vite**: Fast development server and build tool

## Installation & Setup
### Prerequisites
Ensure you have Node.js installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd project-directory
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser at `http://localhost:5173/`

## Project Structure
```
├── src/
│   ├── components/       # React components
│   ├── api/              # API calls
│   ├── pages/            # Pages
├── public/
├── types.ts              # TS types file
├── .eslintrc.js          # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## API Integration
The project fetches real estate listings using an API request:
```ts
const API_URL = "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects";
const ACCESS_KEY = "your-access-key";
const SECRET_KEY = "your-secret-key";

fetch(`${API_URL}?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}&isPagination=true&size=${size}&page=${page}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("API Error:", error));
```

## Deployment
The project is deployed on [Netlify](https://test-task-projects.netlify.app/). To deploy your version:
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy the `dist` folder using Netlify or any static hosting provider.

## License
This project is licensed under the MIT License.

---

For any issues or feature requests, feel free to open an issue or contribute to the project!


