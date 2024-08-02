import mainPic from "./img/mainPageAdd.svg"
import burgerBar from "./img/menuBar/burgerBar.svg";
import pizzaBar from "./img/menuBar/PizzaBar.svg";
import dessertsBar from "./img/menuBar/dessertsBar.svg";
import drinksBar from "./img/menuBar/drinksBar2.png";
import { NavBarItems } from './types.ts';

export const NavBarList:NavBarItems[]= [
  {
    title:"all",
    image:mainPic,
  },
  {
    title:"burger",
    image:burgerBar,
  },
  {
    title: "pizza",
    image:pizzaBar
  },
  {
    title:"desserts",
    image:dessertsBar,
  },
  {
    title:"drinks",
    image: drinksBar
  }
]