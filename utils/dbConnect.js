const mongoose = require('mongoose');
const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect("mongodb://admin:Skcindia%402023@191.101.229.91:27017/?authMechanism=DEFAULT", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
module.exports=dbConnect;
