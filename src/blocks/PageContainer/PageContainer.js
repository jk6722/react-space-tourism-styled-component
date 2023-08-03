import { styled } from "styled-components";

const PageContainer = styled.div`
  position: absolute;
  /* width: 100vw; */
  height: 100vh;
  background-size: cover;
  /* max-width: 1280px; */
  padding: 200px 100px 80px;
  @media (width <= 600px) {
    padding: 0;
  }
  display: flex;
`;

export default PageContainer;
