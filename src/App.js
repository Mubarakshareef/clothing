import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Wardrobe from './pages/Wardrobe';
import OutfitCreator from './pages/OutfitCreator';
import Calendar from './pages/Calendar';
import PackingList from './pages/PackingList';
import ColorAnalysis from './pages/ColorAnalysis';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Wardrobe />} />
              <Route path="/outfits" element={<OutfitCreator />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/packing-lists" element={<PackingList />} />
              <Route path="/color-analysis" element={<ColorAnalysis />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
