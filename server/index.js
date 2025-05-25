import express from "express"
import cors from 'cors'

const app =express()
app.use(cor())
app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}')
})