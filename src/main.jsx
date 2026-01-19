import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalWrapper from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalWrapper>
            <App />
        </GlobalWrapper>
    </StrictMode>
    
)
