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
    padding-left:4.7vw;
    img{
        width:5vw;
        &:hover{
            cursor:pointer;
        }
    }
`

export const MenuContainer = styled.div`
    padding-right:3vw;
    display:flex;
    justify-content:flex-end;
    button{
        font-size:1.2vw;
        background-color:transparent;
        padding:0.8vw 3vh;
        margin-left:1vw;
        border:3px solid transparent;
        &:hover{
            cursor:pointer;
            border:3px solid #373737;
        }
    }
`

export const IntroSection = styled.section`
    height:100vh;
    font-size:7vw;
    letter-spacing: 15.75px;
    display:flex;
    justify-content:center;
    align-items:center;
    h1{
        margin-bottom:23vh;
    }
`


/*export const Container = styled.header``*/