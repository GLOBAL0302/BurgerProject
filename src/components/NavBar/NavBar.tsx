import { Input } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import "./NavBar.scss";
import { NavBarList } from '../../constants.ts';
const NavBar = () => {

  return (
    <div className="pt-3 container">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3><LeftOutlined />Menu</h3>
        <img
          className="rounded-circle"
          width="60px"
          height="60px"
          src="https://pyxis.nymag.com/v1/imgs/f93/127/b735a890f6d5a0f3719c83d3155b7a1241-tom-holland.rsquare.w330.png" alt="userPhoto" />
      </div>
      <Input
        className="rounded-pill mb-4"
        size="large" placeholder="Search dish" prefix={<SearchOutlined />}/>
      <ul className="d-flex gap-3 p-0">
        {NavBarList.map((item) => (
          <li
            className="text-center"
            key={item.title}>
            <div className="mb-2">
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