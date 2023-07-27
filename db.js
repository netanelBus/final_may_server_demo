require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./Product.js') // product ייבוא הסכמה של 


const mongoUser = process.env.MONGO_ATLAS_USER;
const mongoPass = process.env.MONGO_ATLAS_PASS;
const mongoHost = process.env.MONGO_ATLAS_HOST;
const mongoDB = 'classDemo';

const mongoUrl = ['mongodb+srv://',
    `${mongoUser}:${mongoPass}@${mongoHost}/${mongoDB}`,
    '?retryWrites=true&w=majority',
].join('');

// const mongoUrl = ['mongodb+srv://talkrugman:<Arbell2017>@cluster0.4nm0jgs.mongodb.net/?retryWrites=true&w=majority'].join('');

function connectToMyMongoDB() {
    mongoose.connect(mongoUrl);
}

// פונקציה שנותנת את כל הפרודוקס של המסד
async function getAllProducts() {
    return await Product.find({});
};

async function disconnect() { //index.js זה נדרש לקוד שב 
    await mongoose.disconnect();
}
//כדי לייבא את הפקודה הזו index.js עכשיו עוברים לקובץ

async function getProductById(productId) {
    return await Product.find({ id: productId })
}
// async function getProductsMaxId() { // למציאת הת.ז. הגדולה ביותר - לא בדיוק הבנתי למה צריך את זה 
//     const { id: productId } = await Product.findOne().sort({ id: -1 });
//     return productId;
// }

async function insertNewProduct(name, price, categoryId, description) {//products.js השורה שצריך להוסיף כדי להוסיף רשומה חדשה בקובץ
    return await Product.create({ name, price, categoryId, description, stock: 0 })
}

module.exports = {
    connectToMyMongoDB,
    getAllProducts,
    disconnect,
    getProductById, 
    insertNewProduct,
    // getProductsMaxId // רק לצורך בדיקת הת.ז.ז הכי גדול
};

