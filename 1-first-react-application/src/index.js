import { createRoot } from 'react-dom/client';
import App from './App.jsx';      

const root = createRoot(document.querySelector('#root'))

const myVar = "World"

root.render(
    <div>
        <App clickersCount = {3}>
            <h2>My First React Application</h2>
        </App>
    </div>
)