import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Automatically reload the page when a new deployment invalidates cached chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
