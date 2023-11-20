
import {styled} from "styled-components";

export const OutsideContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

        button {
            width: 90%;
            background-color: white;
            color: black;
            border-radius : 0;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border: 1px solid lightblue;
            border-top: none;
            
            &:hover{
                background-color: white;
            }
        }

`

export const Container = styled.div`
    height: 100%;
    width: 90%;
    border: 1px solid lightblue;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        zoom: 150%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

    .bottom-wrapper {
        margin: 20px;
    
        h3 {
            font-weight: bold;
        }

        .description {
            font-size: 18px;   
            font-weight: 500;
        }

        .price {
            font-size: 20px;
            font-weight: bolder;
        }

    }

`
