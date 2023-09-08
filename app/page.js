import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  
  let name = 'park';
  
  return (
    <div>
      <h4 className='title'>애플후레쉬</h4>
      <p className=' title-sub'>
        by dev { name }        
      </p>
    </div>
  )
}

// url로 나누는것을 routing 이라 한다.
/* 
page.js 보여줄 때:
1. 옆에 layout.js 가 있으면 그걸로 page.js 감싼다.
2. 상위폴더에 layout.js 가 있다면 그걸로 1번더 감싼다.
 */