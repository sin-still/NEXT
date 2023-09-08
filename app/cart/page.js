import React from 'react';
import { age } from './data';

export default function Cart() {
   return (
     <div>
       <h4 className="title">Cart</h4>
       <CartItem />
       <CartItem />
     </div>
   )
 } 

// 코드의 축약
// 같은 코드의 재사용
// page.js 만들떄 (별로 중요 x)
 function CartItem(){
   return (
      <div className="cart-item">
         <p>상품명</p>
         <p>$40</p>
         <p>1개</p>
      </div>
   )
 }