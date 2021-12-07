import {Image} from 'react-bootstrap';
import "./Banner.css"
import Logo from '../Logo.png'

const Banner = () => {
  return (
    <Image id="banner" src={Logo} className="mx-auto d-block" fluid/>
  );
};

export default Banner;