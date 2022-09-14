import React from 'react'
import './AppBody'
import logo from '../Elements/images.png'


export default function MusicDisplay(props) {
 

  return (
    <div className='container mt-3 p-2'>
      <div className='d-flex mt-4 DividerHeading'>{props.AreaHeading}
          <div className='divider'></div>
              <button type='button' className='btn'><i className='bi bi-chevron-left'></i></button>
              <button type='button' className='btn'><i className='bi bi-chevron-right'></i></button>
    </div>

      <div className='col scrollmenu'>
      <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>          
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 
          <div className=' row hor-scroll ' style={{height:"21vh",width:"10vw"}}>
                <img src={logo} className='img-fluid' style={{height:"14vh",width:"16vw"}} alt='logo' />
             <p>name</p>
                
          </div> 


       
        

    
          </div>

         



      </div>
    
    
  )
}
