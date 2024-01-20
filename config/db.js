const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async()=>
{
  try
  {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`connect to mongodb database ${mongoose.connection.host}`.blue);

  }catch(error)
  {
       console.log(`mongoose database error ${error}.bgred.white`)
  }
}
module.exports = connectDb