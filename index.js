const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



//middleware

app.use(cors());
app.use(express.json());

//connection with database




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zpoxngp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, 
});


async function run(){

  try{
    const productCollection = client.db('ema-john').collection('products')

    app.get('/products',async(req,res)=>{
      const query = {}
      const cursor = productCollection.find(query)
      const products = await cursor.toArray()
      res.send(products)
    })
  }
  finally{

  }

}

run().catch(err => console.error(err));

app.get('/', (req,res)=>{
    res.send('ema-john server is running')
})

app.listen(port,()=>{
    console.log(`ema john running on: ${port}`)
})


//user : ema-john
//password : jqCs1R58g#//g85dpKc