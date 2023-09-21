const User = require('../models/users');
const createNewUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(username, password);
    const newUser = await User.create({
      username,
      password,
    });
    console.log(newUser);

    return res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createNewUser,
};
