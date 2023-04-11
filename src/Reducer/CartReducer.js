import {data} from '../data/data'

const CartReducer = (state,action) => {
  if(action.type === 'ADD_TO_CART'){
    let {id,price,image,pname,noItem}=action.payload;

   let alreadyPresent=state.cart.find((item)=> item.id == id)

  let SinglePrice=data[id].price;
   if(alreadyPresent){
      let updatedCart=state.cart.map((item)=>{
        if(item.id == id){
          let incre=item.noItem+1;
          let TotalAmount=SinglePrice*incre;
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
  let SinglePrice=data[action.payload].price;

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
  let SinglePrice=data[action.payload].price;
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