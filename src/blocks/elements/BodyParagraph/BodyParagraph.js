import { styled } from "styled-components";

const BodyParagraph = styled.p`
  color: var(--primary);
  font-size: 18px;
  line-height: 32px;
  @media (width <= 600px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export default BodyParagraph;
