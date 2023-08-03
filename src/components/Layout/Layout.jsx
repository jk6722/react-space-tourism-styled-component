import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderMobile from "../Header/HeaderMobile";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { ModalOpened } from "../../recoil/SelectedRoute";
import Modal from "../Modal/Modal";

const Layout = () => {
  // console.log(theme.device.mobile);
  const isModalOpen = useRecoilValue(ModalOpened);

  return (
    <>
      {isModalOpen && <Modal />}
      <HeaderBox>
        <Header />
      </HeaderBox>
      <HeaderMobileBox>
        <HeaderMobile />
      </HeaderMobileBox>
      <Outlet />
    </>
  );
};

export default Layout;

const HeaderBox = styled.div`
  @media (width <= 600px) {
    display: none;
  }
`;
const HeaderMobileBox = styled.div`
  @media (600px <= width <= 900px) {
    display: none;
  }
  @media (900px <= width) {
    display: none;
  }
`;
