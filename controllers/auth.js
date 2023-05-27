const User = require('../models/users');
const {StatusCodes} = require('http-status-codes');
const BadRequestError = require('../errors/bad-request');
const UnauthenticatedError = require('../errors/unauthenticated')

const register = async (req, res) =>{
   const user = await User.create({...req.body});
   const token = user.createJWT();
   res.status(StatusCodes.CREATED).json({user: {name: user.name, email: user.email}, token})
}

const login = async (req, res) =>{
    const {email, password} = req.body;
    
    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    };

    const user = await User.findOne({email});
    if(!user){
        throw new UnauthenticatedError('Email id not found')
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Incorrect Password')
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user:{name: user.name, email: user.email}, token})
}

module.exports ={
    login, 
    register
}