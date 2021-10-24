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
    @media(max-width:425px){
        height:85vh;
        width:100%;
        align-items:center;
        justify-content:space-evenly;
        flex-direction:column-reverse;
        div:nth-child(2){
            flex-direction:column;
        }
        div:nth-child(1){
            width:80%;
        }
        button{
            font-size:5vw;
        }
        img{
            width:15vw;
            margin-right:5vw;
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
    @media(max-width:425px){
        height:10vh;
        padding:0.5vw 1vh;
        p{
            width:95%;
            font-size:2.2vw;
            word-break:break-all;
        }
    }
`