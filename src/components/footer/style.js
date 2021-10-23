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
        margin-right:1em;
        &:hover{
            cursor:pointer;
            margin-bottom:1em;
        }
    }
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
export const Copyright = styled.section`
height:20%;   
background-color: #446061;
display:flex;
justify-content:center;
align-items:center;
p{
    color:white;
    font-size:1.2em; 
}
`