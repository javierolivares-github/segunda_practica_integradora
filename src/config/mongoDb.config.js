
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:123456admin@e-commerce.dqrqnwy.mongodb.net/coder-bank");
    console.log("Mongo Conectado");
    
  } catch (error) {
    console.log("Error al conectar Mongo");
  }
}