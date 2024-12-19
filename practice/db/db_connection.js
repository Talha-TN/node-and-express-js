import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nawazt964:yDrkUaTtFMJ64euq@cluster0.7lsnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongoDb connected Succesfully");
  } catch (err) {
    console.log("mongoDb connection failed! >>> ", err);
  }
};
export default connectDb;