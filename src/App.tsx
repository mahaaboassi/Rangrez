import './App.css'
import Hero from './sections/hero'
import Navbar from './components/navbar'
import Services from './sections/services'
import Heading from './components/heading'
import Metrics from './sections/metrics'
import Insdustries from './sections/industries'
import About from './sections/about'
import Values from './sections/values'
import ESG from './sections/esg'
import Highlights from './sections/highlights'
import Footer from './components/footer'
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
