import React from 'react';
import { age } from './data';


export default function Cart() {
  let 장바구니 = ['Tomatoes', 'pasta']
   return (
     <div>
       <h4 className="title">Cart</h4>
       {
        장바구니.map((item, i)=>{
          return(
              <CartItem 장바구니={장바구니} item={item}/>
            )
        })
       }
       <ButtonCom color='blue'/>
       <ButtonCom color='red'/>
     </div>
   )
 } 


function ButtonCom(props){

  return (
    <button style={{backgroundColor:`${props.color}`}}>버튼</button>
  ) 
}
// 코드의 축약
// 같은 코드의 재사용
// page.js 만들떄 (별로 중요 x)
 function CartItem({item}){
   return (
      <div className="cart-item">
         <p>{item}</p>
         <p>$40</p>
         <p>1개</p>
      </div>
   )
 }