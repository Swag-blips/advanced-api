import mongoose from "mongoose";

import config from "config";
const dbUri = config.get<string>("dbUri");

const connect = async () => {
  try {
    const connection = await mongoose.connect(dbUri);
    console.log(`database connected ${connection.connection}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connect;
