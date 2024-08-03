import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';


const BottomNav = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    setValue(newValue);
  };
  return (
    <div className="mt-auto">
      <BottomNavigation className="border border-3 rounded-pill"
                        value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<FastfoodIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Cart"
          value="cart"
          icon={<ShoppingCartIcon/>}
        />
        <BottomNavigationAction
          label="Orders"
          value="orders"
          icon={<DeliveryDiningIcon/>}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;