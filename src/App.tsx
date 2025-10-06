import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import Validation from './pages/validation/page'
import Terms from './pages/termsAndConditions/page'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="validation" element={<Validation/>}/>
        <Route path="terms-and-conditions" element={<Terms/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
