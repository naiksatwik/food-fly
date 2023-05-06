import { useProductContext } from '../context/ProductContext';


const CartReducer = (state,action) => {
  const {food}= useProductContext();

  console.log("food",food)
  if(action.type === 'ADD_TO_CART'){
    let {id,price,image,pname,noItem}=action.payload;

   let alreadyPresent=state.cart.find((item)=> item.id == id)
   console.log("foodRed",food);
  let SinglePrice=food[id-1].price;
   console.log("Single price",SinglePrice)
   if(alreadyPresent){
      let updatedCart=state.cart.map((item)=>{
        if(item.id == id){
          let incre=item.noItem+1;
          let TotalAmount=item.price+SinglePrice;
          return{
            ...item,
            price:TotalAmount,
            noItem:incre,
          }
        }else{
          return item
        }
      })
      return{
        ...state,
        cart:updatedCart,
      }
   }else{
    let cartProduct;
    cartProduct={
      id:id,
      pname:pname,
      image:image,
      price:price,
      noItem:noItem+1
    }
    return{
      ...state,
      cart:[...state.cart,cartProduct]
    }
  }
}


  if(action.type === "REMOVE_ITEM"){
    let updatedCart=state.cart.filter((item)=>{
         if(item.id != action.payload){
          return item;
         }
    });

    return{
      ...state,
      cart:updatedCart
      
    }
  }
  

  if(action.type === "INCREMENT_CART"){
  let SinglePrice=food[action.payload-1].price;

    let IncrCart=state.cart.map((item)=>{
      if(item.id === action.payload){
        let inItem=item.noItem + 1;
        let TotalAmount=item.price+SinglePrice;
        return{
          ...item,
          price:TotalAmount,
           noItem:inItem,
        }
      }else{
        return  item
      }
    });
      return{
        ...state,
        cart:IncrCart
      }
  }


  if(action.type === "DECREMENT_CART"){
  let SinglePrice=food[action.payload-1].price;
    let IncrCart=state.cart.map((item)=>{
      if(item.id === action.payload){
        let inItem=item.noItem - 1;
        let TotalAmount=item.price-SinglePrice;
       inItem= (inItem > 0) ? inItem:0;
        return{
          ...item,
          price:TotalAmount,
           noItem:inItem,
        }
      }else{
        return  item
      }
    });
      return{
        ...state,
        cart:IncrCart
      }
  }
  return state; 
}

export default CartReducer