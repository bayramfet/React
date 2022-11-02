import React from 'react'
import ButonStyle, { DomatesButon } from './styles/ButonStyle'
import ContainerStyle from './styles/ContainerStyle'
import HeaderStyle from './styles/HeaderStyle'

const Home = () => {
  return (
    <ContainerStyle>
    <HeaderStyle>STYLED COMPONENT</HeaderStyle>
    
    <ButonStyle dogukan>TIKLA</ButonStyle>
    <ButonStyle>TIKLA2</ButonStyle>


    <DomatesButon sinan>TIKLA DOMATES</DomatesButon>
    <DomatesButon >TIKLA DOMATES2</DomatesButon>
    
    </ContainerStyle>
  )
}

export default Home