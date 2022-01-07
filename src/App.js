import { GlobalStyles } from './styles/GlobalSyles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Navigation } from './components';
// Pages
import { Home, Stories, Features, Pricing } from './pages';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <GlobalStyles />
    </Router>
  );
}

export default App;
