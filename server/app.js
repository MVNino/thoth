import express from 'express'

const app = express()

const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', () => console.log('Index of api.'))

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`))