import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import Validation from './pages/validation/page'
import Terms from './pages/termsAndConditions/page'
import Page_404 from './pages/404/page'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='services' element={<Home/>} />
        <Route path='industries' element={<Home/>} />
        <Route path='engagments' element={<Home/>} />
        <Route path='about' element={<Home/>} />
        <Route path='contact' element={<Home/>} />
        <Route path="validation" element={<Validation/>}/>
        <Route path="terms-and-conditions" element={<Terms/>}/>
        <Route path='*' element={<Page_404/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
