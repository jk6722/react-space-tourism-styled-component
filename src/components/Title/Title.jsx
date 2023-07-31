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
`;
const TitleBox__num = styled.div`
  color: var(--gray);
  margin-right: 10px;
`;
const TitleBox__title = styled.div`
  color: var(--white);
`;
