import axios from 'axios';

const api_key = "49478e6e5cac680b";
const secret_key = "Y2I3ODliZmMwMTU4MWExNTNkNDVmMzNmZDExZTYyZmRhMjc0MjI4ZmFmNDgyNjY1ZjNiZDZmZjZiMTlkMDRhZg==";
const content_type = "application/json";
const source_addr = "RAVIAPP";

async function send_sms({ user_name, email, phone, message, status }) {
  const sms_message = `Name: ${user_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nStatus: ${status}\n`;

  try {
    // eslint-disable-next-line
    const response = await axios.post(
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
          {
            recipient_id: 2,
            dest_addr: "255782671763",
          }
        ],
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: "Basic " + btoa(api_key + ":" + secret_key),
        },
      }
    );

    // Return success if SMS sent successfully
    return { success: true, message: 'SMS sent successfully.' };

  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Error sending SMS.';
    console.error('Error sending SMS:', errorMessage);

    // Return failure with error message
    return { success: false, message: errorMessage };
  }
}

export default send_sms;
