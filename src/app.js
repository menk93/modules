import express from "express";
import userRoutes from './modules/user.routes.js'

const app = express()

app.get('/', (req, res) => {
    return res.send('App online')
})

app.use(userRoutes)

export default app