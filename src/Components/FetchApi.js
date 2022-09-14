import React, { useEffect } from 'react'
import axios from 'axios'

export default function FetchApi() {
    const resData = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': 'd40dfd4148msh24b5fbdee516450p147aefjsn34e1a8cfa4c2',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

    useEffect(() => {
        axios.request(resData).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    },)
    


  return (
    <div>FetchApi</div>
  )
}
