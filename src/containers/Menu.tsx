import './Menu.scss';
import IntroPage from '../components/IntroPage/IntroPage.tsx';
import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar.tsx';
import Dishes from '../components/Dishes/Dishes.tsx';


const Menu = () => {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  return (
    <div className="menu">
      {isIntroOpen && <IntroPage onClick={()=>setIsIntroOpen(false)} />}
      <NavBar/>
      <Dishes/>

    </div>
  );
};

export default Menu;
