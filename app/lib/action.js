"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  // secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_AUTH_USER,
    pass: process.env.NEXT_PUBLIC_AUTH_PASS,
  },
});

export const sendEmail = async (currentState, formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");

    if (!name || !email || !subject) {
      return { message: "모든 필드를 입력해주세요" };
    }

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_AUTH_USER, // 보내는 이메일
      to: process.env.NEXT_PUBLIC_AUTH_USER, // 받는 이메일
      subject: `문의하기: ${name} (${email})`,
      html: `<p>${subject}</p>`,
    });

    console.log("이메일 전송 성공");
    formData.delete("name");
    formData.delete("email");
    formData.delete("subject");
    return {
      message: "이메일 전송 성공",
    };
  } catch (error) {
    console.error(error);
    alert("메일 전송이 실패했습니다. 잠시 후 다시 시도해주세요!");
  }
};
