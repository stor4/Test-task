Real Estate Project Viewer

Overview

This project allows users to load and display a list of real estate properties from an API. It features a responsive design and is built with React and TypeScript without external libraries (except for SASS).

Live Demo

View the project

![image](https://github.com/user-attachments/assets/2e69d519-10ef-4c4e-87d0-155e9b4782e7)


Features

Fetches and displays real estate properties from an API.

Responsive design for seamless viewing on various devices.

Pagination support to navigate through property listings.

Image carousel for viewing multiple images of each property.

Error handling and loading indicators.

Tech Stack

React: Component-based UI

TypeScript: Type safety and better development experience

SASS: Styling

Vite: Fast development server and build tool

Installation & Setup

Prerequisites

Ensure you have Node.js installed on your system.

Steps

Clone the repository:

git clone <repository-url>
cd project-directory

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app in your browser at http://localhost:5173/

Project Structure

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

API Integration

The project fetches real estate listings using an API request:

const API_URL = "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects";
const ACCESS_KEY = "your-access-key";
const SECRET_KEY = "your-secret-key";

fetch(`${API_URL}?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}&isPagination=true&size=${size}&page=${page}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("API Error:", error));

Deployment

The project is deployed on Netlify. To deploy your version:

Build the project:

npm run build

Deploy the dist folder using Netlify or any static hosting provider.
