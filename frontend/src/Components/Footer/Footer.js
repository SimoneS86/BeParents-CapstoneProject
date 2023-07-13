import { Container } from "react-bootstrap";
import "./Footer.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <Container className="navbarFooter px-5 py-3 my-4">
      <p className="text-center pb-3 ">A smal description about social network</p>
      <div className="text-center pb-3 d-flex justify-content-center ">
        
          <a href="#" className="text-white">
            <BiLogoFacebookCircle />
          </a>
        
          <a href="#" className="text-white mx-4">
            <BiLogoTwitter />
          </a>
        
          <a href="#" className="text-white">
            <BsInstagram />
          </a>
      </div>
      <p className="text-center ">&copy; {currentYear} Social network. All rights reserved.</p>
    </Container>
  );
};
export default Footer;
