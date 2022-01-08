import { GlobalStyle } from './styles/GlobalStyle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Nav, Footer } from './components';
// Pages
import { Home, Stories, Features, Pricing } from './pages';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
