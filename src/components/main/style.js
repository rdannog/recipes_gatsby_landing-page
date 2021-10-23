import styled from "styled-components";

export const Container = styled.main`
    background-color: #F2F4F1;
`
export const LatestContainer = styled.section`
    height:50vh;
    padding-bottom:1.5vh;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    h2{
        font-size:2.3vw;
        text-transform:uppercase;
        &:after{
            content:"";
            width:7vw;
            height:1vh;
            background-color:#373737;
            position:relative;
            display:block;
            left:5vw;
            top:4vh;
        }
    }
`
export const RecipeBox = styled.div`
    display:flex;
    justify-content:space-around;
    
`
export const Recipes = styled.div`
    margin-top:15vh;
    img{
        width:27vw;
    }
    &:hover{
     transform:scale(1.01)
    }
`
export const TextBox = styled.div`
    height:45vh;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 7px 6px #00000029;
    background-color:white;
    p{
        font-size:1.5vw;
        text-transform:uppercase;
        padding-top:5vh;
        &:before{
            content:"";
            width:5vw;
            height:1vh;
            background-color:#373737;
            position:relative;
            display:block;
            left:9vh;
            bottom:1.5vw;
        }
    }

`
export const BlankSpace = styled.div`
    height:30vh;
`
export const AboutContainer = styled.section`
    background-color:white;
    display:flex;
    div{
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
    }
    h2{
        font-size:2.3vw;
        &:after{
            content:"";
            width:3.5vw;
            height:1vh;
            background-color:#373737;
            position:relative;
            display:block;
            left:2.5vw;
            top:5vh;
        }
    }
    p{
        font-size:1.19vw;
        width:35vw;
        text-align:justify;
    }
    img{
        width:45vw;
    }
`
export const SubscribeContainer = styled.section`
    height:90vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#DFE4DE;
    h2{
        font-size:2vw;
        letter-spacing: 4.2px;
        margin-bottom:0.2vh;
    }
    p{
        font-size:1.9vw;
        margin-bottom:5vh;
    }
    input{
        background-color:#EFF1EE;
        border:none;
        width:35vw;
        height:10vh;
        font-size:1.3vw;
        padding-left:1vw;
        margin-bottom:5vh;
    }
    button{
        font-size:1.2vw;
        background-color:transparent;
        padding:2vh 2.5vw;
        margin-left:1em;
        cursor:pointer;
        border:3px solid #373737;
        &:hover{
            background-color:#373737;
            color:white;
        }
    }
`