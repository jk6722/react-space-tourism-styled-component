import React, { useRef } from "react";
import { styled } from "styled-components";
import Xbtn from "/assets/shared/icon-close.svg";
import { useSetRecoilState } from "recoil";
import { ModalOpened, SelectedRouter } from "../../recoil/SelectedRoute";
import NavMobile from "./NavMobile";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

const navData = [
  {
    number: "00",
    title: "HOME",
  },
  {
    number: "01",
    title: "DESTINATION",
  },
  {
    number: "02",
    title: "CREW",
  },
  {
    number: "03",
    title: "TECHNOLOGY",
  },
];

const Modal = () => {
  const setIsModalOpen = useSetRecoilState(ModalOpened);
  const ref = useRef();
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useClickOutside(ref, closeModal);
  return (
    <ModalBox ref={ref}>
      <BtnBox>
        <img
          src={Xbtn}
          alt="close"
          onClick={() => {
            console.log("clicked");
            setIsModalOpen(false);
          }}
        />
      </BtnBox>
      <NavBox>
        {navData.map((data) => (
          <NavMobile key={data.number} {...data} />
        ))}
      </NavBox>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: 70%;
  z-index: 2;
  backdrop-filter: blur(50px);
`;

const BtnBox = styled.div`
  height: 80px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  z-index: 2;
  img {
    /* position: fixed; */
    width: 24px;
    height: 24px;
  }
`;

const NavBox = styled.div`
  /* width: 100%; */
  margin-top: 120px;
`;
