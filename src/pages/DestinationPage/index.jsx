import styled from "styled-components";
import PageContainer from "../../blocks/PageContainer/PageContainer";
import Title from "../../components/Title/Title";
import data from "../../../data.json";
import Filter from "../../components/Filter/Filter";
import { useRecoilValue } from "recoil";
import { SelectedDestination } from "../../recoil/SelectedRoute";
import H2 from "../../blocks/elements/Heading/H2";
import BodyParagraph from "../../blocks/elements/BodyParagraph/BodyParagraph";
import Sub1 from "../../blocks/elements/Subheading/Sub1";
import Sub2 from "../../blocks/elements/Subheading/Sub2";

const DestinationPage = () => {
  const destData = data["destinations"];
  const selectedDestination = useRecoilValue(SelectedDestination);

  const selectedDestinationData = {
    ...destData?.filter(
      (data) => data.name.toUpperCase() === selectedDestination
    )[0],
  };

  // console.log(destData);
  // console.log(selectedDestinationData);

  return (
    <Container>
      <Title number={"01"} title={"PICK YOUR DESTINATION"} />
      <BodyContainer>
        {selectedDestination && (
          <>
            <ImageBox
              src={selectedDestinationData.images.webp.slice(1)}
              alt="destination"
            />
            <TextBox>
              <FilterBar>
                {destData.map((dest) => (
                  <Filter key={dest.name} name={dest.name.toUpperCase()} />
                ))}
              </FilterBar>
              <H2>{selectedDestinationData.name.toUpperCase()}</H2>
              <BodyParagraph__modified>
                {selectedDestinationData.description}
              </BodyParagraph__modified>
              <InfoContainer>
                <InfoBox>
                  <InfoTitle>AVG. DISTANCE</InfoTitle>
                  <InfoContent>
                    {selectedDestinationData.distance.toUpperCase()}
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>EST. TRAVEL TIME</InfoTitle>
                  <InfoContent>
                    {selectedDestinationData.travel.toUpperCase()}
                  </InfoContent>
                </InfoBox>
              </InfoContainer>
            </TextBox>
          </>
        )}
      </BodyContainer>
    </Container>
  );
};

export default DestinationPage;

const Container = styled(PageContainer)`
  @media (900px <= width) {
    background-image: url("/assets/destination/background-destination-desktop.jpg");
    display: flex;
    flex-direction: column;
  }
  @media (600px <= width <= 900px) {
    background-image: url("/assets/destination/background-destination-tablet.jpg");
  }
  @media (width <= 600px) {
    background-image: url("/assets/destination/background-destination-mobile.jpg");
    display: flex;
    flex-direction: column;
    height: 140%;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  padding: 60px;
  @media (width <= 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

const BodyParagraph__modified = styled(BodyParagraph)`
  width: 80%;
  color: var(--primary);
  padding-bottom: 40px;
  border-bottom: 0.5px solid var(--gray);
  @media (width <= 600px) {
    padding-bottom: 20px;
    margin: auto;
  }
`;

const TextBox = styled.div`
  margin-left: 60px;
  @media (width <= 600px) {
    margin: 0;
    text-align: center;
  }
`;

const ImageBox = styled.img`
  padding: 50px;
  width: 300px;
  height: 300px;
  margin: auto;
`;

const FilterBar = styled.div`
  display: flex;
  height: 20px;
  @media (width <= 600px) {
    align-items: center;
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 20px 0;
  @media (width <= 600px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  margin-right: 20px;
  width: 100%;
`;
const InfoTitle = styled(Sub2)`
  padding: 10px 0;
`;

const InfoContent = styled(Sub1)`
  padding: 10px 0;
`;
