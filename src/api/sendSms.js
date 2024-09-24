import axios from 'axios';

const api_key = "49478e6e5cac680b";
const secret_key = "Y2I3ODliZmMwMTU4MWExNTNkNDVmMzNmZDExZTYyZmRhMjc0MjI4ZmFmNDgyNjY1ZjNiZDZmZjZiMTlkMDRhZg==";
const content_type = "application/json";
const source_addr = "INFO";

function send_sms({ user_name, email, phone, message, status }) {
  const sms_message = `Name: ${user_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nStatus: ${status}\n`;

  return axios.post(
    "https://apisms.beem.africa/v1/send",
    {
      source_addr: source_addr,
      schedule_time: "",
      encoding: 0,
      message: sms_message,
      recipients: [
        {
          recipient_id: 1,
          dest_addr: "255781969373",
        },
      ],
    },
    {
      headers: {
        "Content-Type": content_type,
        Authorization: "Basic " + btoa(api_key + ":" + secret_key),
      },
    }
  ).catch((error) => {
    console.error('Error sending SMS:', error.response ? error.response.data : error.message);
  });
}

export default send_sms;
