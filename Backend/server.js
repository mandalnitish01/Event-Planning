import app from './app.js'

app.listen(process.env.PORT,()=>{
    console.log(`server is listen on port ${process.env.PORT}`)
})