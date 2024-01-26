const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
    authMethod: "login", 
  });

  try {
    await contactEmail.verify();
    console.log("Server is ready to send emails!");
  } catch (error) {
    console.error("Error with email verification:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error with email verification" }),
    };
  }

  const mail = {
    from: `${firstName} ${lastName}`,
    to: process.env.EMAIL_ADDRESS,
    subject: "Interview",
    html: `<p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending email" }),
    };
  }
};

