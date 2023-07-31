import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { SelectedDestination } from "../../recoil/SelectedRoute";

const Filter = ({ name }) => {
  const [selectedDestination, setSelectedDestination] =
    useRecoilState(SelectedDestination);

  const isSelected = selectedDestination === name;

  const handleClick = () => {
    setSelectedDestination(name);
  };

  return (
    <>
      {isSelected ? (
        <FilterItem__active>{name}</FilterItem__active>
      ) : (
        <FilterItem onClick={handleClick}>{name}</FilterItem>
      )}
    </>
  );
};

export default Filter;

const FilterItem = styled.span`
  font-family: "Barlow Condensed";
  font-size: 16px;
  letter-spacing: 2.7px;
  color: var(--primary);
  margin-right: 15px;
  cursor: pointer;
`;

const FilterItem__active = styled.span`
  font-family: "Barlow Condensed";
  font-size: 16px;
  letter-spacing: 2.7px;
  border-bottom: 3px solid var(--white);
  box-sizing: border-box;
  color: var(--white);
  margin-right: 15px;
  cursor: pointer;
`;
