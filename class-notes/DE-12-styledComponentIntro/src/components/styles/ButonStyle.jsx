import styled from 'styled-components';

const ButonStyle = styled.button`
  background-color: ${({dogukan})=>dogukan ? "blue" : "orange"};
  color: pink;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid green;
  border-radius: 5px;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.95);
  }
`;

export const DomatesButon=styled(ButonStyle)`

color:${({sinan})=>(sinan? "yellow":"green")};

background-color:aquamarine;

border:3px solid red;

`



export default ButonStyle;
