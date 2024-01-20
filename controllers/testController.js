 const testController = (req,res)=>
{
    res.status(200).send({
        message:"test route",
        sucess:"true",
    });
}
module.exports = {testController};