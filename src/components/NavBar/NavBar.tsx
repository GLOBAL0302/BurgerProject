import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./NavBar.scss";
import { NavBarList } from '../../constants.ts';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { NavBarItems } from '../../types.ts';
import {selectSelectedItem, setSelectedItem } from '../../store/navSlice.ts';



const NavBar = () => {
  const dispatch = useAppDispatch();
  const selectedItem:string = useAppSelector(selectSelectedItem);

  const onClickDishBar = (item:NavBarItems)=>{
    dispatch(setSelectedItem(item.title))
  }

  return (
    <div className="pt-3">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3><ChevronLeftIcon />Menu</h3>
        <img
          className="rounded-circle"
          width="60px"
          height="60px"
          src="https://pyxis.nymag.com/v1/imgs/f93/127/b735a890f6d5a0f3719c83d3155b7a1241-tom-holland.rsquare.w330.png" alt="userPhoto" />
      </div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end',marginBottom: 2 }}>
        <TextField id="input-with-sx" label="Search" variant="standard" fullWidth/>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      </Box>
      <ul className="d-flex gap-3 p-0">
        {NavBarList.map((item) => (
          <li
            className="text-center"
            onClick={()=>onClickDishBar(item)}
            key={item.title}>
            <div
              className={`mb-2 ${selectedItem === item.title ? 'active' : ''}`}>
              <img
                width="90%"
                height="100%"
                src={item.image} alt="itemIMg" />
            </div>
            <a
              href="#">{item.title.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;