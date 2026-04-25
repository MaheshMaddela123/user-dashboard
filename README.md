# User Management Dashboard

A responsive and dynamic React application that fetches, displays, and manages user data from an external API (`jsonplaceholder.typicode.com`). It includes features like searching, sorting, and viewing detailed user profiles, utilizing modern React practices.

## Features

- **User Directory**: View a list of users with their basic information.
- **Search**: Case-insensitive real-time search functionality by user name.
- **Sort**: Alphabetical sorting (A-Z and Z-A) by user name.
- **Detailed User Profiles**: Click on any user card to view comprehensive contact and company details.
- **State Management**: Built efficiently using the React Context API to manage global state (users, loading, error, search, sort).
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop, built entirely with standard custom CSS.

## Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (Functional Components, Hooks)
- **Tooling**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: Context API
- **Styling**: Standard custom CSS (Variables, Grid, Flexbox)

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation Process

Follow these steps to get the project running locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaheshMaddela123/user-dashboard.git
   cd user-dashboard
   ```

2. **Install dependencies**
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open your browser and navigate to the URL provided in your terminal (usually `http://localhost:5173/`).

## Project Structure

The project is structured in a highly modular way, where every component and page has its own folder containing an `index.jsx` and an `index.css`:

```
src/
├── components/          # Reusable UI components
│   ├── ErrorMessage/    # API error fallback
│   ├── Home/            # Main directory components (Search, Filter)
│   ├── Loader/          # Loading spinner
│   ├── Navbar/          # Top navigation bar
│   ├── UserCard/        # Individual user summary card
│   └── UserDetail/      # User profile details layout
├── context/             # Global State Management
│   └── UserContext.jsx  # Context Provider for user data
├── index.css            # Global CSS variables and resets
├── App.jsx              # Application routing setup
└── main.jsx             # React entry point
```

## Available Scripts

- `npm run dev` - Starts the development server with Hot Module Replacement.
- `npm run build` - Builds the application for production in the `dist/` directory.
- `npm run lint` - Runs ESLint to check for code quality issues.
- `npm run preview` - Previews the production build locally.
