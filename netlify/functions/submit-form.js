// functions/submit-form.js
exports.handler = async (event, context) => {
  require('dotenv').config();

  console.log('aaaaaaaaa', event);
  // 确保使用POST请求
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);;

    const mailgun = require("mailgun-js");
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const mg = mailgun({ apiKey: apiKey, domain: domain });

    const data = {
      from: `${name} <mailgun@${domain}>`,
      to: 'tonys61311@gmail.com',
      subject: `New message from ${name} <${email}>`,
      text: message
    };

    const body = await new Promise((resolve, reject) => {
      mg.messages().send(data, (error, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });

    // 邮件发送成功
    return {
      statusCode: 200,
      body: JSON.stringify({ message: '表单提交成功!', body: body })
    };
  } catch (error) {
    console.error('发送邮件出错：', error);
    // 根据错误类型返回不同的状态码
    const statusCode = error.statusCode ? error.statusCode : 500; // 使用Mailgun错误的状态码或通用500
    return {
      statusCode: statusCode,
      body: JSON.stringify({ message: '邮件发送失败', error: error.message })
    };
  }
};

