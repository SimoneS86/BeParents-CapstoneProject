import { Container } from "react-bootstrap";
import "./Footer.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container className="navbarFooter px-5 py-3 my-4">
      <p className="text-center pb-3 ">Connect with Expert Professionals for Your Parenting Needs - BeParents</p>
      <p className="text-center pb-3 ">
        Discover a diverse network of skilled professionals, from lactation consultants to family therapists, dedicated
        to empowering you on your parenting journey.
      </p>
      <p className="text-center pb-3 ">
        BeParents is not just a platform; it's a community of caring individuals who share a common goal - to help
        parents thrive. Join us in connecting, learning, and growing together as we navigate the beautiful yet
        challenging journey of parenthood.
      </p>
      <div className="text-center pb-3 d-flex justify-content-center ">
        <a href="https://www.facebook.com/ZimaoZ" className="text-white">
          <BiLogoFacebookCircle />
        </a>

        <a href="#" className="text-white mx-4">
          <BiLogoTwitter />
        </a>

        <a href="https://www.linkedin.com/in/simone-sensini/" className="text-white">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-center ">&copy; {currentYear} Social network. All rights reserved.</p>
    </Container>
  );
};
export default Footer;
