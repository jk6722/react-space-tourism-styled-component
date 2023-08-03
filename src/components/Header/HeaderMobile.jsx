import { styled } from "styled-components";
import Logo from "/assets/shared/logo.svg";
import Hambug from "/assets/shared/icon-hamburger.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ModalOpened, SelectedRouter } from "../../recoil/SelectedRoute";

const HeaderMobile = () => {
  const navigate = useNavigate();
  const setSelectedRouter = useSetRecoilState(SelectedRouter);
  const [isModalOpen, setModalOpened] = useRecoilState(ModalOpened);
  const onClick = () => {
    setSelectedRouter("HOME");
    navigate("/");
  };
  return (
    <HeaderBox>
      <ImageBox>
        <LogoBox>
          <img src={Logo} alt="Logo" onClick={onClick} />
        </LogoBox>
        <ListBox>
          {!isModalOpen && (
            <img
              src={Hambug}
              alt="Hambug"
              onClick={() => setModalOpened(true)}
            />
          )}
        </ListBox>
      </ImageBox>
    </HeaderBox>
  );
};

export default HeaderMobile;

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 80px;
  display: flex;
  background-color: transparent;
  margin-top: 15px;
`;
const ImageBox = styled.div`
  width: 100%;
  position: relative;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;
const LogoBox = styled.div`
  width: 100%;
  img {
    width: 40px;
    height: 40px;
  }
`;
const ListBox = styled.div`
  img {
    width: 24px;
    height: 21px;
  }
`;
