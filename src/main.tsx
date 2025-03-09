import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/Fonts.css'
import './css/App.css'
import {DessertApp} from './DessertApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DessertApp />
  </StrictMode>,
)
