import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './ThemeContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </StrictMode>,
)
