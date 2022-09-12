import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Equipments from './pages/equipments';
import Equipment from './pages/equipment';
import PageNotFound from './pages/pageNotFound';
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/equipos" element={ <Equipments /> } />
        <Route path="/equipo/:eqName" element={ <Equipment /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
