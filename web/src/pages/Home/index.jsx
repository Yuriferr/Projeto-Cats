import React, { useState, useEffect} from "react";
import './style.scss'

import api from '../../services/api'

import { Link } from 'react-router-dom'

export default function Home() {

  const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function loadGatos(){
    await api.get("/cats")
    .then(response => {
      setData(response.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
   }
    

  useEffect(() => {
    loadGatos();
  }, [])

  if(loading){
    return(
      <div className='loading'>
        <h2>Carregando Gatos...</h2>
      </div>
    )
  }

  return (
    <div className="Home">
      <div className="containerGatos">
        {data.map((item, index) => {
          return (
            <div className="cards" key={index}>
              <img src={item.img} />
              <p>{item.name}</p>
              <div className="borda" />
              <p>{item.racas}</p>
              <div className="borda" />
              <Link to={`/cat/${index}`}>Visualizar</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
