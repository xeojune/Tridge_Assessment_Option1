import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import SpeciesList from './pages/SpeciesList/SpeciesList';
import SpeciesDetail from './pages/SpeciesDetail/SpeciesDetail';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import Header from './components/Header/Header';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import { useBreadcrumbs } from './hooks/useBreadCrumbs';

function AppContent() {
  const { items, isLoading } = useBreadcrumbs();

  return (
    <div className="app">
      <Header />
      <BreadCrumb items={items} isLoading={isLoading} />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<SpeciesList />} />
          <Route path="/species/:species" element={<SpeciesDetail />} />
          <Route path="/species/:species/pokemons" element={<PokemonList />} />
          <Route path="/species/:species/pokemons/:pokemon" element={<PokemonDetail />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;