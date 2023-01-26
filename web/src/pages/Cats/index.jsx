import React, {useEffect, useState} from "react"
import './style.scss'

import { useParams } from 'react-router-dom'

import api from '../../services/api'

export default function Cats(){
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        LoadCat()
    }, [])

    async function LoadCat(){
        await api.get(`/cat/${id}`)
        .then(response => {
            setData(response.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="Cats">
            <div className="containerInfo">
                <img src={data.img}/>
                <p>Nome: {data.name}</p>
                <div className="borda"/>
                <p>Raça: {data.racas}</p>
            </div>
        </div>
    )
}