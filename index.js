const express = require('express')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.routes.js')
const mongoose = require('mongoose')
const app = express()
//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//route
app.use('/api/products', productRoute)



app.get('/', (req, res) => {
    res.send("heloo")
})
// app.post('/api/product', async (req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// app.put('/api/product/:id',async(req,res)=>{
//     try {
// const {id}=req.params

//    const product=await Product.findByIdAndUpdate(id,req.body)

//    if(!product)
//    {
//     res.status(404).json({message:"Product not updated"})
//    }

//   const updatedProduct=await Product.findById(id)
// res.status(200).json(updatedProduct)


//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.delete('/api/product/:id',async(req,res)=>{
//     try {
//         const {id}=req.params
//        const product=await Product.findByIdAndDelete(id)
// if(!product)
// {
//     return res.status(404).json({message:"Product not found"})
// }

// res.status(200).json(product)


//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })



// app.get('/api/product',async(req,res)=>{
//     try {
//         const products=await Product.find({})
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })
// app.get('/api/product/:id',async(req,res)=>{
//     try {
//         const {id}=req.params
//       const product= await Product.findById(id)
//       res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })


mongoose.connect('mongodb+srv://admin:12345@cluster0.rmrgk.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((err) => {
        console.log("Not connected to MongoDB", err)
    })

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})

//const uri = "mongodb+srv://admin:<db_password>@cluster0.rmrgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";