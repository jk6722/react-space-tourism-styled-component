import styled from "styled-components";
import PageContainer from "../../blocks/PageContainer/PageContainer";
import Title from "../../components/Title/Title";
import data from "../../../data.json";
import { useState, useEffect } from "react";
import H3 from "../../blocks/elements/Heading/H3";
import BodyParagraph from "../../blocks/elements/BodyParagraph/BodyParagraph";

const TechnologyPage = () => {
  const techData = data["technology"];
  const [selectedTechData, setSelectedTechData] = useState();
  // console.log(techData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setSelectedTechData(techData[index]);
  }, [index]);

  const handleClick = (idx) => {
    setIndex(idx);
  };

  return (
    <Container>
      <Title number={"03"} title={"SPACE LAUNCH 101"}></Title>
      {selectedTechData && (
        <BodyContainer>
          <BtnContainer>
            {techData.map((_, idx) => {
              return index === idx ? (
                <Btn__active key={idx}>{idx + 1}</Btn__active>
              ) : (
                <Btn key={idx} onClick={() => handleClick(idx)}>
                  {idx + 1}
                </Btn>
              );
            })}
          </BtnContainer>
          <TextContainer>
            <Subtitle>THE TERMINOLOGY</Subtitle>
            <H3__modified>{selectedTechData.name.toUpperCase()}</H3__modified>
            <BodyParagraph__modified>
              {selectedTechData.description}
            </BodyParagraph__modified>
          </TextContainer>
          <ImageContainer>
            <img src={selectedTechData.images.portrait} alt="technology" />
          </ImageContainer>
        </BodyContainer>
      )}
    </Container>
  );
};

export default TechnologyPage;

const Container = styled(PageContainer)`
  background-image: url("/assets/technology/background-technology-desktop.jpg");
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  margin: 80px 0;
`;

const BtnContainer = styled.div``;

const TextContainer = styled.div`
  padding: 0 40px;
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 200px;
`;

const Btn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 32px;
  color: var(--white);
  border: 0.5px solid var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Btn__active = styled.div`
  width: 80px;
  height: 80px;
  font-size: 32px;
  background-color: var(--white);
  border-radius: 50%;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const H3__modified = styled(H3)`
  margin: 20px 0;
`;
const Subtitle = styled.div`
  font-family: "Barlow Condensed";
  font-size: 16px;
  color: var(--primary);
  letter-spacing: 2.7px;
`;

const BodyParagraph__modified = styled(BodyParagraph)`
  width: 45%;
`;
