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
    @media (max-width:425px){
        align-items:center;
        padding:0;
        h2{
            font-size:10vw;
            &:after{
                width:25vw;
                left:25vw;
            }
        }
    }
`
export const RecipeBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    @media (max-width:425px){
        flex-direction:column;
    }
`
export const Recipes = styled.div`
    margin-top:15vh;
    img{
        width:27vw;
    }
    &:hover{
     transform:scale(1.01)
    }
    @media (max-width:425px){
       padding:3%;
       margin-top:0;
        img{
            width:100%;
        }
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
    @media (max-width:425px){
        p{
            font-size:7vw;
            &:before{
                width:10vw;
                bottom:4vh;
                left:20vw;
            }
        }
    }
`
export const BlankSpace = styled.div`
    height:30vh;
    @media (max-width:425px){
        height:5vh;
    }
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
    @media (max-width:425px){
        flex-direction:column;
        div{
            width:100%;
        }
        img{
            width:100%;
        }
        h2{
            font-size:10vw;
            margin-top:12vh;
            &:after{
                width:15vw;
                left:10vw;
            }
        }
        p{
            font-size:3.9vw;
            width:90%;
            margin-top:13vh;
            margin-bottom:15vh;
        }
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
    @media(max-width:425px){
        h2{
            font-size:10vw;
            letter-spacing: 2px;
        }
        p{
            font-size:8vw;
        }
        input{
            width:90%;
            height:13vh;
            font-size:4vw;
            padding-left:5vw;
        }
        button{
            font-size:5vw;
            font-weight: bolder;
            width: 90%;
            margin:0;
        }
    }
`