const mongoose = require("../models/order");

const getAllOrders = async () => {
  try {
    const Orders = await mongoose.order.findMany();
    return orders;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const getOrderById = async (id) => {
  try {
    const order = await mongoose.order.findUnique({
      where: {
        id,
      },
    });
    if (!order) {
      return { success: false, message: "ID not found" };
    } else {
      return order;
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const createOrder = async (data) => {
  try {
    const order = await mongoose.order.create({
      data,
    });
    return order;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const updateOrder = async (id, data) => {
  try {
    const order = await mongoose.order.update({
      where: {
        id,
      },
      data,
    });
    return order;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const deleteOrder = async (id) => {
  try {
    const order = await mongoose.order.delete({
      where: {
        id,
      },
    });
    return order;
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};