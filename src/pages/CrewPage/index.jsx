import PageContainer from "../../blocks/PageContainer/PageContainer";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import { useState } from "react";
import data from "../../../data.json";
import BodyParagraph from "../../blocks/elements/BodyParagraph/BodyParagraph";
import H4 from "../../blocks/elements/Heading/H4";
import H3 from "../../blocks/elements/Heading/H3";

const CrewPage = () => {
  const [index, setIndex] = useState(0);
  const crewData = data["crew"];
  const selectedCrewData = crewData[index];

  // console.log(selectedCrewData);

  const handleClick = (idx) => {
    setIndex(idx);
  };

  return (
    <Container>
      <Title number={"02"} title={"MEET YOUR CREW"} />
      <BodyContainer>
        {selectedCrewData && (
          <>
            <TextContainer>
              <H4__modified>{selectedCrewData.role.toUpperCase()}</H4__modified>
              <H3__modified>{selectedCrewData.name.toUpperCase()}</H3__modified>
              <BodyParagraph__modified>
                {selectedCrewData.bio}
              </BodyParagraph__modified>
              <BtnContainer>
                {crewData.map((_, idx) => {
                  return index === idx ? (
                    <Btn__active />
                  ) : (
                    <Btn onClick={() => handleClick(idx)} />
                  );
                })}
              </BtnContainer>
            </TextContainer>
            <ImageContainer>
              <img src={selectedCrewData.images.webp.slice(1)} alt="" />
            </ImageContainer>
          </>
        )}
      </BodyContainer>
    </Container>
  );
};

export default CrewPage;

const Container = styled(PageContainer)`
  @media (900px <= width) {
    background-image: url("/assets/crew/background-crew-desktop.jpg");
    display: flex;
    flex-direction: column;
  }
  @media (600px <= width <= 900px) {
    background-image: url("/assets/crew/background-crew-tablet.jpg");
  }
  @media (width <= 600px) {
    background-image: url("/assets/crew/background-crew-mobile.jpg");
    display: flex;
    flex-direction: column;
    height: 140%;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  padding: 30px 0;
  @media (width <= 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  @media (width <= 600px) {
    order: 1;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--gray);
    margin: 10px 30px 30px;
    img {
      width: 177px;
      height: 222px;
    }
  }
`;

const TextContainer = styled.div`
  margin-top: 30px;
  @media (width <= 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    text-align: center;
    order: 2;
  }
`;

const H3__modified = styled(H3)`
  margin: 40px 0;
  @media (width <= 600px) {
    order: 3;
    margin: 20px 0 30px;
  }
`;

const H4__modified = styled(H4)`
  color: var(--gray);
  @media (width <= 600px) {
    order: 2;
  }
`;

const BodyParagraph__modified = styled(BodyParagraph)`
  width: 70%;
  height: 150px;
  display: block;
  padding-bottom: 80px;
  @media (width <= 600px) {
    margin: auto;
    padding-bottom: 50px;
    height: 200px;
    width: 80%;
    order: 4;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  @media (width <= 600px) {
    justify-content: center;
    order: 1;
    margin-bottom: 40px;
  }
`;

const Btn = styled.div`
  width: 15px;
  height: 15px;
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
  @media (width <= 600px) {
    margin: 5px 5px;
  }
`;
const Btn__active = styled.div`
  width: 15px;
  height: 15px;
  background-color: var(--white);
  border-radius: 50%;
  margin-right: 10px;
  @media (width <= 600px) {
    margin: 5px 5px;
  }
`;
