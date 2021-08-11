const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.IsVerify = async (req, res, next) =>{

    const {token} = req.cookies;
    if(!token) {
        res.status(401).json({
            success: true,
            message: "Login first to access this resource.."
        })
    }

    const decoded  = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id)
    next()
}

exports.IsAuthorizeRole = (...roles) =>{
    return(req, res, next) =>{

        if(!roles.includes(req.user.role)){
            res.status(403).json({
              
                message: `Role ${req.user.role} is not allowed for this resource..`
            })
        }
        next()
    }
}