import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ContadorApp } from './ContadorApp'
import { ContadorApp2 } from './ContadorApp2'
// import {PrimerComponente} from './PrimerComponente'
// import { SegundoComponente } from './SegundoComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimerComponente/> */}
    {/* <SegundoComponente /> */}
    {/* <ContadorApp/> */}
    <ContadorApp2 value={10}/>
    <hr />
  </StrictMode>
)