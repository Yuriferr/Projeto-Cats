import express  from "express";
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

const port = process.env.PORT || 8000;

const gatos = [
    {
        name: 'Merlin',
        racas: 'Persa',
        img: 'https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2020/09/gato-persa-historia-caracteristicas-e-principais-cuidados-com-a-raca.jpg'
    },
    {
        name: 'Frajola',
        racas: 'Siamês',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Тайская_кошка_Синка_Тайна_Таун%2C_WCF%2C_окрас_сил_поинт.jpg/800px-Тайская_кошка_Синка_Тайна_Таун%2C_WCF%2C_окрас_сил_поинт.jpg'
    },
    {
        name: 'Dexter',
        racas: 'Angorá',
        img: 'https://www.petlove.com.br/images/breeds/193065/profile/original/angora-p.jpg?1532625875'
    },
    {
        name: 'Cinderela',
        racas: 'Sphynx',
        img: 'https://www.azpetshop.com.br/blog/wp-content/uploads/2021/05/pexels-photo-991831-500x452.jpeg'
    },
    {
        name: 'Galileu',
        racas: 'Ashera',
        img: 'https://guiaanimal.net/uploads/article/image/1017/79658e19bec4c1df1e2298944dad1b60.jpg'
    },
    {
        name: 'Mika',
        racas: 'Ragdoll',
        img: 'https://www.petlove.com.br/images/breeds/192475/profile/original/ragdoll-p.jpg?1532626868'
    },
]

app.get('/cat/:index', (req, res) => {
    const { index } = req.params

    return res.json(gatos[index]);
})

app.get('/cats' , (req, res) => {
    return res.json(gatos)
})


app.listen(port, () => {
    console.log('servidor ligado')
})