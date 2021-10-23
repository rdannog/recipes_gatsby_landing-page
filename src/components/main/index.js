import React from "react"
import * as S from "./style.js"
import { graphql, useStaticQuery} from "gatsby"

export function Main(){

    const data = useStaticQuery(graphql`
        query{
            completedata{
                mains {
                    aboutText
                    aboutTitle
                    mainTitle
                    subscribeButton
                    subscribeText
                    subscribeTitle
                    text1
                    text2
                    text3
                    image1 {
                      url
                    }
                    image2 {
                      url
                    }
                    image3 {
                      url
                    }
                    aboutImage{
                      url
                    }
                  }
            }
        }
    `)

    const {aboutImage, aboutText, aboutTitle,mainTitle,subscribeButton,subscribeText,subscribeTitle,text1,text2,text3,image1, image2, image3 } = data.completedata.mains[0]

    return(
        <S.Container>
          <S.LatestContainer>
            <h2>{mainTitle}</h2>
          </S.LatestContainer>
          <S.RecipeBox>
              <S.Recipes>
                <div>
                  <img src={image1.url} alt=""/>
                </div>
                <S.TextBox>
                  <p>{text1}</p>
                </S.TextBox>
              </S.Recipes>
              <S.Recipes>
              <div>
                  <img src={image2.url} alt=""/>
                </div>
                <S.TextBox>
                  <p>{text2}</p>
                </S.TextBox>
              </S.Recipes>
              <S.Recipes>
              <div>
                  <img src={image3.url} alt=""/>
                </div>
                <S.TextBox>
                  <p>{text3}</p>
                </S.TextBox>
              </S.Recipes>
            </S.RecipeBox>
            <S.BlankSpace/>
            <S.AboutContainer>
             <div style={{alignItems:"flex-start"}}>
             <img src={aboutImage.url} alt=""/>
             </div>
             <div>
               <h2>{aboutTitle}</h2>
               <p>{aboutText}</p>
             </div>
            </S.AboutContainer>
            <S.SubscribeContainer>
              <h2>{subscribeTitle}</h2>
              <p>{subscribeText}</p>
              <input type="email" name="email" placeholder="Your Email" required/>
              <button>{subscribeButton}</button>
            </S.SubscribeContainer>
        </S.Container>
    )
}