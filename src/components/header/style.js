import styled from "styled-components";

export const Container = styled.header`
    margin:4.2vh 1.5vw;
    background-size:cover;
    background-repeat:no-repeat;
    background-position: center;
`

export const Content = styled.section`
    height:25vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const LogoContainer = styled.div`
    padding-left:4em;
    img{
        width:5vw;
        &:hover{
            cursor:pointer;
        }
    }
`

export const MenuContainer = styled.div`
    padding-right:3.4em;
    display:flex;
    justify-content:flex-end;
    button{
        font-size:1.5em;
        background-color:transparent;
        padding:0.8em 1.7em;
        margin-left:1em;
        border:3px solid transparent;
        &:hover{
            cursor:pointer;
            border:3px solid #373737;
        }
    }
`

export const IntroSection = styled.section`
    height:100vh;
    font-size:8em;
    letter-spacing: 15.75px;
    display:flex;
    justify-content:center;
    align-items:center;
    h1{
        margin-bottom:1em;
    }
`


/*export const Container = styled.header``*/