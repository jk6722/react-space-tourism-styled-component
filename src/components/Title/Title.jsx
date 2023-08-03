import styled from "styled-components";

const Title = ({ number, title }) => {
  return (
    <TitleBox>
      <TitleBox__num>{number}</TitleBox__num>
      <TitleBox__title>{title}</TitleBox__title>
    </TitleBox>
  );
};

export default Title;

const TitleBox = styled.div`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  display: flex;
  @media (width <= 600px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    margin: 100px auto 0;
  }
`;
const TitleBox__num = styled.div`
  color: var(--gray);
  font-weight: bold;
  margin-right: 10px;
`;
const TitleBox__title = styled.div`
  color: var(--white);
`;
