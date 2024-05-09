import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(password.length < 6) return res.status(400).json({success:false, message: 'Password must be 6 characters or more'});
        const emailLowerCase = email.toLowerCase()
        const existedUser = await User.findOne({email: emailLowerCase})
        if(existedUser) return res.status(200).json({success:false, message:'That email is already registered with another account'})
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await User.create({
            name,
            email:emailLowerCase,
            password:hashedPassword
        })
        const {_id:id, photoUrl} = user
        const token = jwt.sign({id, name, photoUrl}, process.env.SECRET, {expiresIn:'1h'})
        res.status(201).json({success:true, result:{id, name, email:user.email, token}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:'Something went wrong! try again later!'})
    }
}


