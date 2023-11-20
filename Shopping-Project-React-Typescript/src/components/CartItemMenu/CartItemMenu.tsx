
import { ShoppingCart } from "../cart/Cart";
import { Container , OutsideContainer} from "./CartItemMenu.style";
import Button from '@mui/joy/Button';

interface CartItemMenuProps extends ShoppingCart {
    addToList : (data:ShoppingCart)=>void
}

export const CartItemMenu = (data : CartItemMenuProps)=>{
    return (
        <OutsideContainer>
            <Container>
                <img src={data.image} alt="" />
                <div className="bottom-wrapper">
                    <h3>{data.title}</h3>
                    <p className="description">{data.description}</p>
                    <p className="price">${data.price}</p>
                </div>
            </Container>
            <Button onClick={()=>data.addToList(data)} >ADD TO CART</Button>
        </OutsideContainer>
    )
}

