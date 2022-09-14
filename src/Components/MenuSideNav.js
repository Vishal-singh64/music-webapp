import React from 'react'
import './AppBody.css'

export default function MenuNav(props) {
    
  return (
        <div className='row'>   
            <ul className=' col SidemenuData  '>
            <li className=' dataN' >
                <div className='row-lg ' id='icon'><i className={props.icon}></i></div>
                <div className='row-lg ' id='menuName'>{props.Name}</div>
            </li>
            </ul>
</div>


    
  )
}
