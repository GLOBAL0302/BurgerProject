import mainPic from '../../img/mainPageAdd.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';import { Button } from '@mui/material';
import "./IntroPage.scss"

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
          color="inherit"
          onClick={onClick}
          variant="outlined"
        >
          Get Started <ChevronRightIcon/>
        </Button>
      </div>
    </div>
  );
};

export default IntroPage;