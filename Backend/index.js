let express = require('express');
let mongoose = require('mongoose');
const multer=require('multer');
const cors=require('cors')

let getFields=multer();

let app = express();
app.use(cors());
app.use(express.json());

let db = async() => {
    try{ 
    await mongoose.connect('mongodb+srv://lalith:lalith@cluster0.tscibtc.mongodb.net/');
    console.log('mongo db connected!');
    }
    catch(error) {
        console.log(error);
    }
}
db();

app.get('/',(req,res) => { 
    console.log(" A new request has been raised on  " + new Date(Date.now())); 
    res.writeHead(200,{ 'Content-Type':"text/plain"})  
    res.write(' hey');
    res.end();
});



const flipflop=new mongoose.Schema({
    rosponce:[
        {
            question:String,
            option:String
        }
    ],
    score:Number
})
const flipflop1=new mongoose.Schema({
    rosponce:[
        {
            question:String,
            option:String
        }
    ],
})
const jikjak= new mongoose.Schema({
    rosponce:[
        {
            question:String,
            option:String,
            correctoption:String
        }
    ],
    score:Number
})

const userSchema = new mongoose.Schema({
    nickname: String,
    createdat:{type:Date,immutable:true,default:()=>Date.now()},
    flipcard:[flipflop],      memory:[flipflop], story:[flipflop1],word:[jikjak],FAQ:[String],phoneNumber:[String]
});

const Users = new mongoose.model("User", userSchema)

app.get('/users',async (request,response) => { 
    const allUsers = await Users.find();
    try {
        response.send(allUsers);
    } catch (error) {
        response.status(500).send(error);
    }
});

//To check the user
app.post('/register',async(req,res)=>{
    const{nickname}=req.body;
    if(!nickname ){
        return res.status(422).json({error:"plz fill"})
    }
    try{
        const userExists = await Users.findOne({ nickname });
        if (userExists) {
           
            return res.status(422).json({ error: "User already exists" });

        }
        const users =new Users({nickname});
        await users.save();
        res.send(users);
        res.status(201).json({message:"all din"})
    }catch(err){
        console.log(err);
    }
});

app.post('/parent',async(req,res)=>{
    const{nickname}=req.body;
    if(!nickname){
        return res.status(422).json({error:"piz fill"})
    }
    try{
        const users =new Users.find('sudyum14');
        res.send(users);
        res.status(201).json({message:"all din"})
    }catch(err){
        console.log(err);
    }
});


app.put("/responceflipcard",async(req,res)=>{
    let{rosponce,score,user01}=req.body;
    if(!rosponce && !score){
        return res.status(422).json({error:"piz fill"})
    }
    try{
        const data=Users.findOneAndUpdate({nickname:user01},{$set:{flipcard:[{rosponce,score}]}},{new:true}).exec();
        if (data == null) {
            res.send("Data not found");
            } else {
            res.send(data);
            }

    }catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Internal Server Error');
    }
})


app.put("/responceveadioplayer",async(req,res)=>{
    let{rosponce,score,user01}=req.body;
    if(!rosponce && !user01){
        return res.status(422).json({error:"piz fill"})
    }
    try{
        const data=Users.findOneAndUpdate({nickname:user01},{$set:{story:[{rosponce,score}]}},{new:true}).exec();
        if (data == null) {
            res.send("Data not found");
            } else {
            res.send(data);
            }

    }catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.put("/responceword",async(req,res)=>{
    let{rosponce,score,user01}=req.body;
    if(!rosponce && !user01 && !score){
        return res.status(422).json({error:"piz fill"})
    }
    try{
        const data=Users.findOneAndUpdate({nickname:user01},{$set:{word:[{rosponce,score}]}},{new:true}).exec();
        if (data == null) {
            res.send("Data not found");
            } else {
            res.send(data);
            }

    }catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Internal Server Error');
    }
})


app.put("/responcememory", async (req, res) => {
    let { rosponce, score,user01 } = req.body;
    if (!rosponce && !score) {
        return res.status(422).json({ error: "Please fill in the required fields" });
    }

    try {
        const data = await Users.findOneAndUpdate(
            { nickname: user01 },
            { $set: { memory: [{ rosponce, score }] } },
            { new: true }
        ).exec();

        if (data === null) {
            res.send({ data: "Data not found" });
        } else {
            // console.log(rosponce);
            res.send(data);
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.put("/FAQ", async (req, res) => {
    let { userQuestion ,phoneNumber,user01} = req.body;
    if (!userQuestion && !user01) {
        return res.status(422).json({ error: "Please fill out the question" });
    }
    try {
        const data = await Users.findOneAndUpdate(
            { nickname: user01 },
            { $push: { FAQ: [userQuestion] ,phoneNumber:[phoneNumber]} },
            { new: true }
        ).exec();
        if (data == null) {
            res.send("Data not found");
        } else {
            res.send(data);
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send('Internal Server Error');
    }
});






//post
// app.post('/register',async(req,res)=>{
//     const{name,age1}=req.body;
//     if(!name || !age1){
//         return res.status(422).json({error:"piz fill"})
//     }
//     try{
//         const users =new Users({name,age:age1,hobbies:["dancing","riding"],address:{street:"sdsdc",city:"dfvdv"}});
//         await users.save();
//         res.send(users);
//         res.status(201).json({message:"all din"})
//     }catch(err){
//         console.log(err);
//     }
// });

const fead=new mongoose.Schema({feedback:String,createdat:{type:Date,immutable:true,default:()=>Date.now()}})
const feadback=new mongoose.model("feadback",fead)


app.post('/feadback',async(req,res)=>{
    const fead001=req.body;
    if(!fead001){
        return res.status(422).json({error:"piz fill"})
    }
    try{
        const Feadback=new feadback(fead001);
        await Feadback.save();
        res.send(Feadback);
        res.status(201).json({message:"report saved"})
    }catch(err){
        console.log(err);
    }
})



//put





app.listen(5000, () => console.log("listening at port 5000"));