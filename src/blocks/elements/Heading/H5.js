import styled from "styled-components";

const H5 = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  color: var(--primary);
  letter-spacing: 4.75px;
  @media (width <= 600px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

export default H5;
