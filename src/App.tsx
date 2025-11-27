import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';

// Lazy-loaded pages
const Layout = lazy(() => import('./pages/layout'));
const Home = lazy(() => import('./pages/home/page'));
const Validation = lazy(() => import('./pages/validation/page'));
const Terms = lazy(() => import('./pages/termsAndConditions/page'));
const Page_404 = lazy(() => import('./pages/404/page'));

function App() {
  return (
    <BrowserRouter>
      {/* Suspense fallback */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Home />} />
            <Route path="industries" element={<Home />} />
            <Route path="engagments" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="contact" element={<Home />} />
            <Route path="validation" element={<Validation />} />
            <Route path="terms-and-conditions" element={<Terms />} />
            <Route path="*" element={<Page_404 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
