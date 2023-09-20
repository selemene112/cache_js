const User = require('../models/users');
const createNewUser = async (req, res) => {
  const { id_user, username, password } = req.body;

  try {
    const newUser = await User.create({
      id_user,
      username,
      password,
    });

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
