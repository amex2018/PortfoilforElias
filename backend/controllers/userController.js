const User = require('../model/user');
const bcrypt = require('bcryptjs');


exports.RegisterUser =  async (req, res, next) =>{
    try {
    const {name, email, password} = req.body;
     
    const encryptPassword = await bcrypt.hash(password, 12);

      const user = await User.create({
          name,
          email,
          password: encryptPassword
      });


    } catch (err) {
        console.log(err.message)
    }
    

}


exports.LoginUser = async (req, res, next) =>{
    const {email, password} = req.body

     if(!(email && password)){
         res.status(404).json({
             success: false,
             message: "Your email and password is empty"
         })
     }

     const user = await User.findOne({email})

     if(!user && (await bcrypt.compare(password, user.password))){
        res.status(404).json({
            success: false,
            message: "Invalid Password and Email"
        })
     }   


}

exports.Logout = async (req, res, next) =>{

}