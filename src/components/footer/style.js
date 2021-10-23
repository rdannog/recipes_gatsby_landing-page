import styled from "styled-components";

export const Container = styled.footer`
    background-color: #F2F4F1;
    height:35vh;
`
export const LinksContainer = styled.section`
    background-color: #F2F4F1;
    height:80%;
    display:flex;
    justify-content:space-around;
    div{
        width:40%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        width:3vw;
        margin-right:1vw;
        &:hover{
            cursor:pointer;
            margin-bottom:1vh;
        }
    }
    button{
        font-size:1.3vw;
        background-color:transparent;
        padding:1.7vh 2vw;
        margin-left:1vw;
        border:3px solid transparent;
        &:hover{
            cursor:pointer;
            border:3px solid #373737;
        }
    }
    
`
export const Copyright = styled.section`
    height:20%;   
    background-color: #446061;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        color:white;
        font-size:1vw; 
    }
`