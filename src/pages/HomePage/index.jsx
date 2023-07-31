import styled from "styled-components";
import H5 from "../../blocks/elements/Heading/H5";
import H1 from "../../blocks/elements/Heading/H1";
import BodyParagraph from "../../blocks/elements/BodyParagraph/BodyParagraph";
import data from "../../../data.json";
import { useSetRecoilState } from "recoil";
import { SelectedRouter } from "../../recoil/SelectedRoute";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../blocks/PageContainer/PageContainer";

const HomePage = () => {
  const { subtitle, title, description } = data["home"];
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
  background-image: url("/assets/home/background-home-desktop.jpg");
`;

const HomeText = styled.div`
  margin-top: 20%;
  padding: 40px;
`;

const BodyParagraphBox = styled.div`
  width: 60%;
`;

const BtnBox = styled.div`
  padding: 30px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column-reverse;
  align-items: baseline;
  /* margin-right: 50px; */
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
  &:hover {
    outline: 30px solid var(--gray);
    transition: 0.5s linear;
  }
`;
