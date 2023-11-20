
//Modules
import {
  useQuery,
} from '@tanstack/react-query'

//Components
import { useState , useEffect, SetStateAction } from 'react';
import { ShoppingCart } from './components/cart/Cart';
import Drawer from '@mui/joy/Drawer'
import Grid from '@mui/joy/Grid';
import { CartItemMenu } from './components/CartItemMenu/CartItemMenu';
import { CartItemWrapper } from './components/CartItemWrapper/CartItemWrapper';
import { ListValueItem } from './components/cart/Cart';
import { AiOutlineShoppingCart } from "react-icons/ai";

// Styling
import { Container } from "./app.style";
import { WrapperContainer } from './components/CartItemWrapper/CartItemWrapper.style';


const TOTAL_AMOUNT = 20 //TO DESCRIBE HOW MANY ITEMS WE WANT TO GET FROM API
const getShoppingData = async() : Promise<ShoppingCart[]> => await(await fetch(`https://fakestoreapi.com/products?limit=/${TOTAL_AMOUNT}`)).json() // FUNCTION THAT RETURNS DATA FROM API

const App = () => {

  const query = useQuery({queryKey : ["ShoppingDatas"],queryFn : getShoppingData})  // WE GET THE API DATAS VIA REACT QUERY CLIENT , RETURNS THE DATA TO THE QUERY
  const shoppingData : ShoppingCart[] | undefined = query.data  // WE EXTRACT THE DATA FROM QUERY TO SHOPPINGDATA VALUE

  const [totalAmount,setTotalAmount] = useState<Number>(0)
  const [listItems,setListItems] = useState<CartItemWrapper[]>([])  // THIS IS FOR LISTING THE ITEMS INSIDE THE DRAWER LATER
  const [listValues,setListValues] = useState<ListValueItem[]>([])  // THIS IS FOR MANAGING THE AMOUNTS INSIDE THE DRAWER LIST 
  const [open,setOpen] = useState<boolean>(false)  // FOR WRAPPER TO OPEN OR NOT 

  const addToList = (data : ShoppingCart) =>{     // WORKS WHEN THE USER CLICKS ON "ADD TO CART"
    setListItems(oldValues => {
      let control = false
      oldValues.forEach((value)=>{
        if (Number(value.id) === Number(data.id))     // FOR CHECKING IF THE USER ALREADY PICKED THIS ITEM
          control = true
      })
      if (!control){
        setListValues(oldList=>[...oldList,{amount : 1 , title : data.title , price : data.price}])   // IF USER DIDNT PICK THE ITEM , THE ITEM WILL BE APPEND TO LISTVALUES ARRAY
        return [...oldValues,{...data , amount : 1}]
      }
      else
        return [...oldValues] // NOTHING WILL HAPPEN IF THE USER ALREADY PICKED THE ITEM
    })
  }

  useEffect(()=>{
    let total = 0 
    listValues.forEach((item)=>{
      total += (item.price * item.amount)       // TOTAL AMOUNT GET'S UPTATED EVERYTIME LISTVALUES ARRAY CHANGES
    })
    setTotalAmount(total)
  },[listValues])

  const handleAmount = (data:ListValueItem)=>{
    let tempArray : ListValueItem[] = []
    listValues.forEach(value=>{             //WORKS EVERYTIME IF THE THE USER CHANGES THE AMOUNT OF ANY ITEM
      if(value.title === data.title)
        value.amount = data.amount    // FINDING THE ITEM BY IT'S TITLE
      tempArray.push(value)
    })
    setListValues([...tempArray])
  }

  const handleRemove = (data:ListValueItem)=>{
    let tempArray : CartItemWrapper[] = []
    listItems.forEach(item=>{
      if(item.title !== data.title)     // REMOVES THE ITEM FROM THE LISTITEM ARRAY
        tempArray.push(item) 
    })
    setListItems([...tempArray])

    let tempArray2 : ListValueItem[] = []
    listValues.forEach(item=>{
      if(item.title !== data.title)     // REMOVES THE ITEM FROM THE LISTVALUES
        tempArray2.push(item)
    })
    setListValues([...tempArray2])
  }

  return (
    <Container>
      <button className='drawer-button' onClick={()=>setOpen(true)} >
        <AiOutlineShoppingCart />                          {/* SHOPIING CART ICON */}
      </button>
      <Grid container spacing={2} >
        {shoppingData && shoppingData.map((data)=>
          <Grid margin="20px 0" key={data.id} sm={12} md={4} >  {/* RETURNS THE VALUES WE TOOK FROM FAKESTORE API THAT WE INSERTED INSIDE THE SHOPPINGDATA */}
            <CartItemMenu {...data} addToList={addToList}  />
          </Grid>
        )}
      </Grid>
      <Drawer 
        open={open}                       /* DRAWER */
        onClose={()=>setOpen(false)}  
        anchor="right"
        size="md"
      >
        <WrapperContainer>
          <h2>Your Shopping Cart</h2>
          {shoppingData && listItems && listItems.map((item)=>{
            return (
              <CartItemWrapper key={item.id} {...item} handleAmount={handleAmount} handleRemove={handleRemove} ></CartItemWrapper>  /* EACH ITEM IN DRAWER */
            )
          })}
          <h2>Total:${totalAmount.toFixed(2)}</h2>
        </WrapperContainer>
      </Drawer>
    </Container>
  );
}

export default App;
