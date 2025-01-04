import bcrypt from "bcrypt";
import { config } from "../config.mjs";

export async function encrypt(data) {

  try {
   
    const saltRounds = await bcrypt.genSalt(config.rounds);
    const hash_data = bcrypt.hashSync(data, saltRounds);
    
    return hash_data;
  
  } catch (err) {
    return err;
  }

}
