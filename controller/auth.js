const User = require("../models/Users");
const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const register = async (req, res) => {
  try {
    const { password } = req.body;
    const saltRounds = 10;
    const myPlaintextPassword = password;
    // storing password in hashed form
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(myPlaintextPassword, salt);
    const user = await User.create({ ...req.body, password: hash });
    const token = jwt.sign(
      { username: user.name, userId: user._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "1d" }
    );
    console.log(token);
    res.status(StatusCodes.CREATED).json({ token: token, user });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: error });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "You haven't provide email and password." });
  }
  const user = await User.findOne({email:email });
  const hashedPassword = user.password;
  const comparePassword = await bcrypt.compare(password,hashedPassword)
  if (!user|| !comparePassword) {
    return res.status(StatusCodes.UNAUTHORIZED).send({msg:getReasonPhrase(StatusCodes.UNAUTHORIZED)});
  }
  try {
    // firstly authenticating for email.  
    const token =  jwt.sign({ userId:user._id,name: user.name }, process.env.PRIVATE_KEY, {
      expiresIn: "1d",
    });
    return res.status(StatusCodes.OK).json({ token: token });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
  }
};
module.exports = { register, login };
