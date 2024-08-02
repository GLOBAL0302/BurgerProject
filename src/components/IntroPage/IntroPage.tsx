import mainPic from '../../img/mainPageAdd.svg';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

interface Props{
  onClick: ()=>void;
}

const IntroPage:React.FC<Props> = ({onClick}) => {
  return (
    <div>
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
        <Button
          onClick={onClick}
          type="dashed">
          Get Started <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default IntroPage;