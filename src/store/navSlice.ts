import { createSlice } from '@reduxjs/toolkit';

export interface NavState {
  searchItem:string
  selectedItem:string
}

const initialState:NavState = {
  searchItem:"",
  selectedItem:"all"
}

export const navSlice = createSlice({
  name:"nav",
  initialState,
  reducers:{
    setSearchItem:(state, {payload}) => {
      state.searchItem = payload;
    },
    setSelectedItem:(state, {payload}) => {
      state.selectedItem = payload;
    }
  },
  selectors:{
    selectSearchItem: state=>state.searchItem,
    selectSelectedItem:state=> state.selectedItem
  }
})

export const navReducer =  navSlice.reducer;
export const {setSearchItem,setSelectedItem} = navSlice.actions;
export const {selectSearchItem, selectSelectedItem,} = navSlice.selectors;
