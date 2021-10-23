import styled from "styled-components";

export const Container = styled.main`
    background-color: #F2F4F1;
`
export const LatestContainer = styled.section`
    height:50vh;
    padding-bottom:1.3em;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    h2{
        font-size:3em;
        text-transform:uppercase;
        &:after{
            content:"";
            width:104px;
            height:6px;
            background-color:#373737;
            position:relative;
            display:block;
            left:110px;
            top:20px;
        }
    }
`
export const RecipeBox = styled.div`
    display:flex;
    justify-content:space-around;
    
`
export const Recipes = styled.div`
    margin-top:15vh;
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
        font-size:2em;
        text-transform:uppercase;
        padding-top:5vh;
        &:before{
            content:"";
            width:104px;
            height:6px;
            background-color:#373737;
            position:relative;
            display:block;
            left:100px;
            bottom:30px;
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
        font-size:2.5em;
        &:after{
            content:"";
            width:60px;
            height:6px;
            background-color:#373737;
            position:relative;
            display:block;
            left:40px;
            top:30px;
        }
    }
    p{
        font-size:1.5em;
        width:35vw;
        text-align:justify;
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
        font-size:2.5em;
        letter-spacing: 4.2px;
        margin-bottom:0.2em;
    }
    p{
        font-size:2.2em;
        margin-bottom:1.5em;
    }
    input{
        background-color:#EFF1EE;
        border:none;
        width:35vw;
        height:10vh;
        font-size:1.3em;
        padding-left:1em;
        margin-bottom:2em;
    }
    button{
        font-size:1.5em;
        background-color:transparent;
        padding:0.8em 1.7em;
        margin-left:1em;
        cursor:pointer;
        border:3px solid #373737;
        &:hover{
            background-color:#373737;
            color:white;
        }
    }
`