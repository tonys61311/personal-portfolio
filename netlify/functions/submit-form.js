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

    // const data = {
    //   from: `${name} <mailgun@${domain}>`,
    //   to: 'tonys61311@gmail.com',
    //   subject: `New message from ${name} <${email}>`,
    //   text: message
    // };

    // mg.messages().send(data, function (error, body) {
    //   if (error) {
    //     console.log("发送邮件出错：", error);
    //   } else {
    //     console.log("邮件发送成功：", body);
    //   }
    // });


    return {
      statusCode: 200,
      body: JSON.stringify({ message: '表单提交成功!' }),
    };
  } catch (error) {
    console.error('发送邮件出错：', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '邮件发送失败', error: error.message }),
    };
  }
};

