'use client'
import React, { useState } from 'react';


const List = () => {
   let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

   let a = [20, 30, 40] //array 자료형
   a[0] = 100 //등호 문법 = 는 같다 x 대입o
   console.log(a[1])
   let [count, setCount] = useState(1);

   return (
      <div>
         <h4 className='title' style={{color:'blue', fontSize:30}}>상품목록</h4>
         {
            상품.map((item, i)=>{
               return (
                  <div className='food' key={i}>
                     <img src={`/img/food${i}.png`} alt="" />
                     <h4>{item} $40</h4>
                     <span> {count} </span>
                     <button onClick={()=>{ setCount(count+1)} }>+</button>
                  </div>
               )
            })
         }
      </div>
   );
};

export default List;