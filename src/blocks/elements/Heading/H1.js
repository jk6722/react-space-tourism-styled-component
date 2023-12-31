import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Bellefair", sans-serif;
  font-size: 150px;
  color: var(--white);
  padding: 20px 0;
  @media (width <= 600px) {
    font-size: 80px;
  }
`;

export default H1;
