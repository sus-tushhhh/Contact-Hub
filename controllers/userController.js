const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/** @type {import('mongoose').Model<any>} */
const User = require("../models/userModel");

//@desc Register user
//@route POST /api/contacts
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    if (await User.findOne({ email })) {
        res.status(400);
        throw new Error("Already Registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(user);
    res.status(201).json({ id: user.id, email: user.email });
});

//@desc Login user
//@route POST /api/contacts
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required.");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.TOKEN_SECRET,
        );
        res.status(200).json({ token });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid.");
    }
});

//@desc Current user
//@route GET /api/contacts
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ msg: "Current user info" });
});

module.exports = {
    registerUser,
    loginUser,
    currentUser,
};
