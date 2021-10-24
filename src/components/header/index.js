import React from "react"
import * as S from "./style.js"
import { graphql, useStaticQuery} from "gatsby"

export function Header(){

    const data = useStaticQuery(graphql`
        query{
            completedata{
                headers {
                    btnAbout
                    btnRecipes
                    btnSubscribe
                    headerTitle
                    logoImg {
                    url
                    }
                    backgroundHeader {
                    url
                    }
                }
            }
        }
    `)

    const {btnAbout,btnRecipes, btnSubscribe, headerTitle, logoImg, backgroundHeader} = data.completedata.headers[0]

    return(
        <S.Container style={{backgroundImage:`url(${backgroundHeader.url})`}}>
            <S.Menu>
                <input type="checkbox" id="checkbox-menu"/>
                <label for="checkbox-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
    
            </S.Menu>
            <S.Content>
                <S.LogoContainer>
                    <img src={logoImg.url} alt=""/>
                </S.LogoContainer>
                <S.MenuContainer>
                    <div>
                        <button>{btnAbout}</button>
                    </div>
                    <div>
                        <button>{btnRecipes}</button>
                    </div>
                    <div>
                        <button>{btnSubscribe}</button>
                    </div>
                </S.MenuContainer>
            </S.Content>
            <S.IntroSection>
                <h1>{headerTitle}</h1>
            </S.IntroSection>
        </S.Container>
    )
}