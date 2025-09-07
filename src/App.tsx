import { QueryClient } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Baselayout from './pages/baselayout';

const queryClient = new QueryClient();

const App = () => (
  <Routes>
    <Route element={<Baselayout></Baselayout>}>
      <Route path="/" element={<Index />} />
      <Route></Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
