import styled from "styled-components";
import H5 from "../../blocks/elements/Heading/H5";
import H1 from "../../blocks/elements/Heading/H1";
import BodyParagraph from "../../blocks/elements/BodyParagraph/BodyParagraph";
import data from "../../../data.json";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalOpened, SelectedRouter } from "../../recoil/SelectedRoute";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../blocks/PageContainer/PageContainer";

const HomePage = () => {
  const { subtitle, title, description } = data["home"];
  const isModalOpen = useRecoilValue(ModalOpened);
  const setSelected = useSetRecoilState(SelectedRouter);

  const navigate = useNavigate();

  const handleClick = () => {
    setSelected("DESTINATION");
    navigate("DESTINATION");
  };

  return (
    <Container>
      <HomeText>
        <H5>{subtitle}</H5>
        <H1>{title}</H1>
        <BodyParagraphBox>
          <BodyParagraph>{description}</BodyParagraph>
        </BodyParagraphBox>
      </HomeText>
      <BtnBox>
        <Btn onClick={handleClick}>EXPLORE</Btn>
      </BtnBox>
    </Container>
  );
};

export default HomePage;

const Container = styled(PageContainer)`
  @media (900px <= width) {
    background-image: url("/assets/home/background-home-desktop.jpg");
  }
  @media (600px <= width <= 900px) {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }
  @media (width <= 600px) {
    background-image: url("/assets/home/background-home-mobile.jpg");
    display: flex;
    flex-direction: column;
  }
`;

const HomeText = styled.div`
  margin-top: 20%;
  padding: 40px;
  @media (width <= 600px) {
    text-align: center;
  }
`;

const BodyParagraphBox = styled.div`
  width: 60%;
  @media (width <= 600px) {
    width: 80%;
    margin: auto;
  }
`;

const BtnBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;
  align-items: baseline;
  @media (width <= 600px) {
    padding: 0;
    align-items: center;
  }
`;
const Btn = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: var(--white);
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-family: "Bellefair", sans-serif;
  letter-spacing: 2px;
  @media (width <= 600px) {
    position: absolute;
    width: 150px;
    height: 150px;
    font-size: 20px;
    margin-bottom: 0;
    bottom: 50px;
  }
  &:hover {
    outline: 30px solid var(--gray);
    transition: 0.5s linear;
  }
`;
