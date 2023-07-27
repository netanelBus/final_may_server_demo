
const { default: mongoose } = require('mongoose');
const Product = require('./Product.js') // product ייבוא הסכמה של 
const { connectToMyMongoDB } = require('./db.js');
const fs = require('fs/promises');
const path = require('path');

const productsFilePath = path.join(__dirname, 'data_sample', 'product.json');// כדי להתאים לכל מערכות ההפעלה

main();

async function main() {
    try {
        connectToMyMongoDB();
        await deleltAllProduct(); // למחיקת ה"פיגום" אחרי ההזנה
        await Product.insertMany(await getProductSample()); // להזנה של הרשומה לאטלס
        console.log('insert sample product done'); // רק כדי לקבל אינדקציה לגבי התהליך
        
        await mongoose.disconnect();
    }
    catch (err) {
        console.error(err);
    }
}

async function deleltAllProduct() {
    await Product.deleteMany({});
    console.log('deletion completed');
}

async function getProductSample() {
    const textContent = await fs.readFile(productsFilePath, 'utf8');
    return JSON.parse(textContent); //  JavaScript יחזיר את התוכן של הקובץ באובייקט 
}

// crud אח"כ יוצרים שרת אקספרס לצורך 
// index.js נמצא בקובץ





