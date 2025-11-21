import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // basic validation
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required!"})
        }

        // check existing user
        const existing = await User.findOne({ email: email.toLowerCase() });
        if(existing){
            return res.status(400).json({message: "User already registered!"});
        }

        // Create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        });

        res.status(201).json({
            message: "User register successfully!",
            user: {id: user._id, email: user.email}
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        });
    }
}

export {
    registerUser
}