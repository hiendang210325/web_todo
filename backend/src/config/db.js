import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Liên kết CSDL thành công");
  } catch (error) {
    console.error("Lỗi khi kết nối cơ sở dữ liệu", error);
    process.exit(1); // exit with error
  }
};
