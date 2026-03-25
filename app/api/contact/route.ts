import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Configure the mail transporter using environment variables.
    // Ensure EMAIL_USER and EMAIL_APP_PASSWORD are set in your .env.local
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // The authenticated Gmail account
      to: "9696roshankumar@gmail.com", // Receiver
      replyTo: email,
      subject: `New Enquiry from ${name} (${company || "Individual"})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #1A3460; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Gridlines Enquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Organisation:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || "N/A"}</td>
            </tr>
          </table>
          
          <h4 style="margin-top: 30px; margin-bottom: 10px; color: #333;">Message:</h4>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #4b5563; line-height: 1.6;">
            ${message}
          </div>
          
          <p style="margin-top: 40px; font-size: 12px; color: #9ca3af; text-align: center;">
            This email was sent securely from the Gridlines Consultancy website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send the email. Please try again later." },
      { status: 500 }
    );
  }
}
