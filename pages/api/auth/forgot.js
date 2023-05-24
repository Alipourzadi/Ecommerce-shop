import { resetPasswordTemplate } from "@/emails/resetPasswordTemplate";
import User from "@/models/user";
import { createResetToken } from "@/utils/createActivationToken";
import db from "@/utils/db";
import { sendEmail } from "@/utils/sendEmail";
import { emailValidation } from "@/utils/validation";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    if (!emailValidation(email)) {
      res.status(400).json({ message: "ایمیل وارد شده درست نیست!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "ایمیل وارد شده معتبر نیست!" });
    }

    const userId = createResetToken({
      id: user._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${userId}`;
    sendEmail(email, url, "فراموشی رمز عبور", resetPasswordTemplate);
    res.json({
      message: "ایمیل برای شما ارسال شد",
    });
    await db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
