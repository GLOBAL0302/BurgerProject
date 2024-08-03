import './Menu.scss';
import IntroPage from '../components/IntroPage/IntroPage.tsx';
import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar.tsx';
import Dishes from '../components/Dishes/Dishes.tsx';
import BottomNav from '../components/BottomNav/BottomNav.tsx';


const Menu = () => {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  return (
    <>
      {isIntroOpen ? <IntroPage onClick={() => setIsIntroOpen(false)} /> :
        <div className="menu d-flex flex-column container">
          <NavBar/>
          <Dishes/>
          <BottomNav />
        </div>
      }
    </>
  );
};

export default Menu;
