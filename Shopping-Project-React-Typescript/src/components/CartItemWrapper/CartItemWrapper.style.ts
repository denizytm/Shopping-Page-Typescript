import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    width: 100;
    padding: 0 5px;   
    padding-bottom: 10px;
    border-bottom: 2px solid lightblue;

    h2 {
        font-size: 23px;
        margin: 0;
    }

    .details-container {
        width: 450px;

        .prices-container {
           display: flex;
           justify-content: space-between;
           font-size: 18px;
        }

        .buttons-container {
            display: flex;
            height: 50px;
            line-height:50px;
            justify-content: space-between;
            font-size: 16px;

            button {
                width: 70px;
                border: none;
                border-radius: 3px;
                background-color: rgb(183, 183, 183);
                font-size: 28px;
                cursor: pointer;
            }

        }

    }

    .image {
        height: 250px;
        display: flex;
        align-items: center;
        img {
           height: 200px;
            
        }
    }

`
export const WrapperContainer = styled.div`
    padding : 20px;
`


