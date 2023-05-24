import bcrypt from "bcrypt";
import nc from "next-connect";

import db from "@/utils/db";
import User from "@/models/user";

const handler = nc();

handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { id, password } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: "این حساب کاربری موجود نمی باشد." });
    }
    const encryptedPassword = await bcrypt.hash(password, 18);
    await user.updateOne({
      password: encryptedPassword,
    });
    res.json({ email: user.email });
    db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
