import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkAndBustCache } from './utils/cacheBuster'

// Force hard-reload on new deployments (max 3 times) to clear browser cache
checkAndBustCache();

createRoot(document.getElementById("root")!).render(<App />);

