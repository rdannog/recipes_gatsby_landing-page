import React from "react"
import { createGlobalStyle } from "styled-components";
import {Helmet} from 'react-helmet'
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
import Hurme from "../fonts/Hurme/HurmeGeometricSans1.otf"
export const GlobalStyle = createGlobalStyle`
@font-face{
  font-family:"Hurme";
  src:url(${Hurme})
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:"Hurme";
  cursor:default;
  color:#373737;
}
`

export default function Index () {
  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

