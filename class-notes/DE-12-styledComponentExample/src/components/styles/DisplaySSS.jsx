import styled from 'styled-components';

const DisplaySSS = styled.div`
  background-color: ${({theme})=>theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;

@media (max-width: 724px){
    flex-direction:column;
}




`;

export default DisplaySSS;
