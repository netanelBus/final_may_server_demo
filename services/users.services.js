const mongoose = require("../models/User");

const getAllUsers = async () => {
  try {
    const users = await mongoose.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const getUserById = async (id) => {
  try {
    const user = await mongoose.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return { success: false, message: "ID not found" };
    } else {
      return user;
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const createUser = async (data) => {
  try {
    const user = await mongoose.user.create({
      data,
    });
    return user;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const updateUser = async (id, data) => {
  try {
    const user = await mongoose.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const deleteUser = async (id) => {
  try {
    const user = await mongoose.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

///addresses of the server
