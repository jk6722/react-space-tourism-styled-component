import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { ModalOpened, SelectedRouter } from "../../recoil/SelectedRoute";
import { useNavigate } from "react-router-dom";

const NavMobile = ({ number, title }) => {
  const setIsModalOpen = useSetRecoilState(ModalOpened);
  const [selectedRouter, setSelectedRouter] = useRecoilState(SelectedRouter);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(false);
    setSelectedRouter(title);
    // console.log(title.toLowerCase());
    if (title == "HOME") navigate("/");
    else navigate(title.toLowerCase());
  };
  return (
    <>
      {selectedRouter === title ? (
        <NavBox__selected>
          <Nav>
            <NumberBox>{number}</NumberBox>
            <TitleBox>{title}</TitleBox>
          </Nav>
        </NavBox__selected>
      ) : (
        <NavBox onClick={handleClick}>
          <Nav>
            <NumberBox>{number}</NumberBox>
            <TitleBox>{title}</TitleBox>
          </Nav>
        </NavBox>
      )}
    </>
  );
};

export default NavMobile;

const NavBox__selected = styled.div`
  display: flex;
  font-family: "Barlow Condensed", sans-serif;
  background-color: rgba(151, 151, 151, 0.4);
`;
const NavBox = styled.div`
  display: flex;
  font-family: "Barlow Condensed", sans-serif;
`;

const Nav = styled.div`
  display: flex;
  padding: 20px 20px;
  color: white;
`;
const NumberBox = styled.div`
  font-size: 16px;
  letter-spacing: 2.7px;
  font-weight: bold;
  margin-right: 10px;
`;
const TitleBox = styled.div`
  font-size: 16px;
  letter-spacing: 2.7px;
`;
