/**
 * Author: Wenping Wang
 * File Name: main.jsx  
 * Date: 2024-09-30
 *  Student number: 301250155
 */

// ========================
// Imports
// ========================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ========================
// Rendering the Application
// ========================
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
