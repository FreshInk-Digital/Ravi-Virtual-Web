import axios from 'axios';

const api_key = "49478e6e5cac680b";
const secret_key = "Y2I3ODliZmMwMTU4MWExNTNkNDVmMzNmZDExZTYyZmRhMjc0MjI4ZmFmNDgyNjY1ZjNiZDZmZjZiMTlkMDRhZg==";
const content_type = "application/json";
const source_addr = "RAVIAPP";

async function send_sms({ user_name, email, phone, message, status }) {
  const sms_message = `Name: ${user_name}\nEmail: "${email}"\nPhone: 0${phone}\nMessage: ${message}\nStatus: ${status}\n`;

  try {
    // Send primary message to recipients
    const response = await axios.post(
      "https://apisms.beem.africa/v1/send",
      {
        source_addr: source_addr,
        schedule_time: "",
        encoding: 0,
        message: sms_message,
        recipients: [
          { recipient_id: 1, dest_addr: "255782671763" },
          // { recipient_id: 2, dest_addr: "255781969373" },
          // { recipient_id: 3, dest_addr: "255658199566" },
          // { recipient_id: 4, dest_addr: "255773711027" },
          { recipient_id: 5, dest_addr: "255655456230" },
        ],
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: "Basic " + btoa(api_key + ":" + secret_key),
        },
      }
    );

    // Primary message sent successfully
    console.log("Message sent to recipients:", response.data);

    // Prepare and send confirmation message to the sender
    const confirmation_message = `Dear ${user_name}, \n Thank you for contacting RAVI ARIV .Your request has been recieved. We will contact you soon.`;
    const confirmationResponse = await axios.post(
      "https://apisms.beem.africa/v1/send",
      {
        source_addr: source_addr,
        schedule_time: "",
        encoding: 0,
        message: confirmation_message,
        recipients: [{ recipient_id: 6, dest_addr: phone }],
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: "Basic " + btoa(api_key + ":" + secret_key),
        },
      }
    );

    // Log success of confirmation
    console.log("Confirmation sent to sender:", confirmationResponse.data);

    return { success: true, message: "SMS and confirmation sent successfully." };
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Error sending SMS.";
    console.error("Error in SMS process:", errorMessage);

    // Return failure with error message
    return { success: false, message: errorMessage };
  }
}

export default send_sms;