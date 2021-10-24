import styled from "styled-components";

export const Container = styled.header`
    margin:4.2vh 1.5vw;
    background-size:cover;
    background-repeat:no-repeat;
    background-position: center;
    @media(max-width: 425px) {
        background-position: right 30%;
        background-size:220%;
    }
`
export const Menu = styled.div`
    display:none;
    @media (max-width:425px){
        display: flex;
        align-items: center;
        justify-content: end;
        padding:10px;
        #checkbox-menu{
            position: absolute;
            opacity: 0;
        }
        
        label{
            cursor: pointer;
            position: relative;
            display: block;
            height: 22px;
            width: 30px;
        }
        
        label span{
            position: absolute;
            display: block;
            height: 5px;
            width: 100%;
            border-radius: 30px;
            background: #373737;
            transition: 0.25s ease-in-out;
        }
        
        label span:nth-child(1){
            top: 0;
        }
        
        label span:nth-child(2){
            top: 8px;
        }
        
        label span:nth-child(3){
            top: 16px;
        }
        
        #checkbox-menu:checked + label span:nth-child(1){
            transform: rotate(-45deg);
            top: 8px;
        }
        
        #checkbox-menu:checked + label span:nth-child(2){
            opacity: 0;
        }
        
        #checkbox-menu:checked + label span:nth-child(3){
            transform: rotate(45deg);
            top:8px;
        }
    }
`
export const Content = styled.section`
    height:25vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 425px) {
        height:50vh;
    }
    @media(max-width: 375px) {
        height:25vh;
    }
`

export const LogoContainer = styled.div`
    padding-left:4.7vw;
    img{
        width:5vw;
        &:hover{
            cursor:pointer;
        }
    }
    @media(max-width: 425px) {
        display:none;
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
    @media(max-width: 425px) {
        display:none;
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
    @media(max-width: 425px) {
        align-items:start;
        h1{
            color:#373737;
            margin-bottom:0;
            letter-spacing: 5px;
        }
    }
    @media(max-width: 375px) {
        h1{
            margin-top:10vh;
        }
    }
    
`



