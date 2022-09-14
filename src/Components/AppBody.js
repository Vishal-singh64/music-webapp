import React from 'react';
import './AppBody.css'
import MenuNav from './MenuSideNav';
import MusicDisplay from './MusicDisplay';


export default function AppBody() {


  return (
    
    <div className='container mt-2'>
    

    <div className='row'>
        <div className='Sidemenu rounded-top-left'>
        <div style={{marginTop:"16vh"}}>
        
        <MenuNav icon="bi bi-list" Name="Home" />
        <MenuNav icon="bi bi-search" Name=<input  class='form-control-plaintext searchmenu' type='text' placeholder="Search"/> />
        <MenuNav icon="bi bi-heart" Name="Favourait" />
        <MenuNav icon="bi bi-play-circle" Name="Playlist" />
        </div>
        </div>
            
    <div className='col-md-10'>
        <div className='row '>
            <div className='col-md-12 BodyHeader rounded-end'>
                <div className='mr-3 p-4 text-white '>
                    <h2 className='d-flex justify-content-end'>Your favourite tunes</h2>
                    <h4 className='d-flex justify-content-end '>All ☀️ and all 🌔</h4>  
                </div>
            </div>
        </div>

        <div className='row'>

        
                 <div className='col-md-12 DisplayBody'>
            
            <MusicDisplay AreaHeading='RELEASED THIS WEEK'/>
            <MusicDisplay AreaHeading='FEATURED PLAYLISTS'/>
            </div>
        </div>
    </div>
    </div>
  
        
    </div>
  )
}
