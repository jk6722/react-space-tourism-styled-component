import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedRouter } from "../../recoil/SelectedRoute";

const Nav = ({ number, title }) => {
  const [selected, setSelected] = useRecoilState(SelectedRouter);
  const isSelected = title === selected;

  const handleClick = () => {
    setSelected(title);
  };

  return (
    <>
      {isSelected ? (
        <NavBox__active onClick={handleClick}>
          <NavSpanNum>{number}</NavSpanNum>
          <NavSpanTitle>{title}</NavSpanTitle>
        </NavBox__active>
      ) : (
        <NavBox onClick={handleClick}>
          <NavSpanNum>{number}</NavSpanNum>
          <NavSpanTitle>{title}</NavSpanTitle>
        </NavBox>
      )}
    </>
  );
};

export default Nav;

const NavBox = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: var(--white);
  &:hover {
    border-bottom: 5px solid var(--gray);
  }
`;

const NavBox__active = styled.nav`
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: var(--white);
  border-bottom: 5px solid var(--white);
`;

const NavSpanNum = styled.span`
  font-family: "Bellefair", sans-serif;
  font-size: 16px;
  font-weight: Bold;
  margin-right: 11px;
`;

const NavSpanTitle = styled.span`
  font-family: "Bellefair", sans-serif;
  font-size: 16px;
`;
