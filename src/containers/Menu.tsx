import './Menu.scss';
import mainPic from '../img/mainPageAdd.svg';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const introPage = (
  <div className="menu-starter">
    <div
      style={{ width: '320px', height: '320px' }}
      className="bg-white rounded-circle d-flex align-items-center justify-content-center w-100 mb-3"
    >
      <img
        style={{ width: '321px', height: '280px' }}
        src={mainPic}
        alt="mainPageImg"
      />
    </div>
    <h4 className="mb-5">
      Enjoy <br />
      Your Food
    </h4>
    <Button type="dashed">
      Get Started <RightOutlined />
    </Button>
  </div>
);

const Menu = () => {
  return <div className="menu">{introPage}</div>;
};

export default Menu;
