import React from "react"
import * as S from "./style.js"
import { graphql, useStaticQuery } from "gatsby"

export function Footer() {

  const data = useStaticQuery(graphql`
        query{
            completedata{
              headers {
                btnAbout
                btnRecipes
                btnSubscribe
              }
              footers {
                copyright
                facebook {
                url
                }
                instagram {
                  url
                }
                pinterest {
                 url
                }
                twitter {
                  url
                }
              }
            }
        }
    `)

  const { copyright,facebook,instagram,pinterest,twitter} = data.completedata.footers[0]
  const { btnAbout,btnRecipes,btnSubscribe } = data.completedata.headers[0]

  return (
    <S.Container>
      <S.LinksContainer>
        <div style={{justifyContent:"flex-start"}}>
          <img src={instagram.url} alt=""/>
          <img src={twitter.url} alt=""/>
          <img src={facebook.url} alt=""/>
          <img src={pinterest.url} alt=""/>
        </div>
        <div>
          <button>{btnAbout}</button>
          <button>{btnRecipes}</button>
          <button>{btnSubscribe}</button>
        </div>
      </S.LinksContainer>
      <S.Copyright>
        <p>{copyright}</p>
      </S.Copyright>
    </S.Container>
  )
}