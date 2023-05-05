import { createRoot } from 'react-dom/client';
import App from './components/App';
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';

setupIonicReact();

const root = createRoot(document.querySelector('.root'));
root.render(<App />);