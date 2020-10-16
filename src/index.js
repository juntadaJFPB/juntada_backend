import cors from 'cors'
import express from 'express'
import { router } from './routes'
import fileUpload from 'express-fileupload'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({ createParentPath: true }))
app.use(bodyParser.json())

app.use('/api', router)
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('O servidor está escutando na porta ' + app.get('port') + '.')
   
})

app.use((req, res, next) => {
    return res.status(404).send({
        success: false,
        message: 'Não foi possível encontrar a rota solicitada.'
    })
})

app.use((error, req, res, next) => {
    console.log(error)
    return res.status(500).send({
        
        error: error,
        success: false,
        message: 'Ocorreu um erro desconhecido com o sistema.'
    })
})




const spawn = require('child_process').spawn;

const processo = spawn('python',['./hello.py']);

processo.stdout.on('data', function(data){
    res.send(data.toString())
})