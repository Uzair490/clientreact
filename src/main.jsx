import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./context/auth";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from './context/search.jsx';
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </SearchProvider>
  </AuthProvider>
);
