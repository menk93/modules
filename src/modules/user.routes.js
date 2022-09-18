import { Router } from "express";

const routes = Router()

routes.get('/users', (req, res) => {
    return res.send('users')
})

export default routes