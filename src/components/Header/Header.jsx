import { styled } from "styled-components";
import Logo from "/assets/shared/logo.svg";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const NavData = [
  {
    num: "00",
    title: "HOME",
    path: "/",
  },
  {
    num: "01",
    title: "DESTINATION",
    path: "destination",
  },
  {
    num: "02",
    title: "CREW",
    path: "crew",
  },
  {
    num: "03",
    title: "TECHNOLOGY",
    path: "technology",
  },
];

const Header = () => {
  return (
    <HeaderBox>
      <ImageBox>
        <img src={Logo} alt="logo" />
      </ImageBox>
      <LineBox>
        <div className="first-box"></div>
        <div></div>
      </LineBox>
      <NavBarBox>
        <NavBar>
          {NavData.map((nav) => (
            <Link to={nav.path} key={nav.num} className="NavBar__link">
              <Nav key={nav.num} number={nav.num} title={nav.title} />
            </Link>
          ))}
        </NavBar>
      </NavBarBox>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  z-index: 1;
  margin-left: 30px;
  position: absolute;
  width: 100%;
  max-width: 1280px;
`;

const ImageBox = styled.div`
  width: 100%;
  img {
    width: 48px;
    height: 48px;
  }
`;

const NavBarBox = styled.div`
  display: flex;
`;

const NavBar = styled.div`
  width: 100%;
  height: 96px;
  padding: 0 10em;
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);

  .NavBar__link {
    text-decoration: none;
  }
`;

const LineBox = styled.div`
  width: 30%;
  margin-left: 10em;
  z-index: 2;
  position: absolute;
  .first-box {
    border-bottom: 1px solid var(--gray);
  }
`;
