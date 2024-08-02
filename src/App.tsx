import './App.css';
import Menu from './containers/Menu.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu/>}/>
      </Routes>
    </>
  );
};

export default App;
