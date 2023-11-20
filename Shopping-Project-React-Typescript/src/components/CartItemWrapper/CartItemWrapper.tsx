
import { useState } from "react";
import { ShoppingCart } from "../cart/Cart";
import { Container } from "./CartItemWrapper.style";
import { ListValueItem } from "../cart/Cart";

export interface CartItemWrapper extends ShoppingCart {
    amount : number         // WE'LL NEED THE AMOUNT FOR EACH ITEM
}

export interface CartItemWrapperProp extends ShoppingCart {
    amount : number
    handleAmount : (data:ListValueItem) => void
    handleRemove : (data:ListValueItem) => void
}

export const CartItemWrapper = (data:CartItemWrapperProp)=>{

    const [amount,setAmount] = useState(data.amount)       // WE'LL CHECK THE AMOUNT USING USESTATE

    const handleIncrease = ()=> {
        setAmount(e=>{
            data.handleAmount({amount : e+1 ,title : data.title , price : data.price})      //WILL INCREASE THE AMOUNT FOR THIS ITEM
            return e+1
        })
    }

    const handleDecrease = ()=>{
        setAmount(e=>{
            if(e !== 1 ){
                data.handleAmount({amount : e-1,title : data.title , price : data.price})       //WILL INCREASE THE AMOUNT FOR THIS ITEM
                return e-1
            }
            data.handleRemove(data)                 // IF THE AMOUNT IS EQUAL TO 1 , THE ITEM WILL BE REMOVED FROM DRAWER AND THE ARRAYS
            return 0
        })
    }

    return (
        <Container>
            <div className="details-container">
                <h2>{data.title}</h2>
                <div className="prices-container">
                    <p>Price: ${data.price.toFixed(2)}</p>
                    <p>Total: ${amount && (amount * data.price).toFixed(2)}</p>
                </div>
                <div className="buttons-container">
                    <button onClick={handleIncrease} >+</button>
                    {amount}
                    <button onClick={handleDecrease} >-</button>
                </div>
            </div>
            <div className="image" >
                <img src={data.image} alt="" />
            </div>
        </Container>
    )
}

