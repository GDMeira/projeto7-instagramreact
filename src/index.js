import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    )
}

const root = createRoot(document.querySelector('.root'));
root.render(<App />);