import nc from "next-connect";
import bcrypt from "bcrypt";
import db from "@/utils/db";
import { emailValidation } from "@/utils/validation";
import { createActivationToken } from "@/utils/createActivationToken";
import User from "@/models/user";
import { sendEmail } from "@/utils/sendEmail";
import { activateEmailTemplate } from "@/emails/activateEmailTemplate";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "تمامی قسمت های فرم را پر کنید!" });
    }
    if (!emailValidation(email)) {
      res.status(400).json({ message: "ایمیل نامعتبر است!" });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "ایمیل قبلا وارد شده است!" });
    }
    if (password.length < 6) {
      res.status(400).json({ message: "پسورد امن نیست!" });
    }
    const encrtyptedPassword = await bcrypt.hash(password, 18);
    const newUser = new User({ name, email, password: encrtyptedPassword });
    const addUser = await newUser.save();
    const activationToken = createActivationToken({
      id: addUser._id.toString(),
    });

    const url = `${process.env.BASE_URL}/activate/${activationToken}`;
    sendEmail(email, url, "تایید ایمیل ثبت نام", activateEmailTemplate);
    await db.disconnectDb();
    res.json({
      message: "برای تکمیل ثبت نام ایمیل خود را تایید کنید!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
