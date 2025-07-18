import axios from "axios";

const api_key = "49478e6e5cac680b";
const secret_key =
  "Y2I3ODliZmMwMTU4MWExNTNkNDVmMzNmZDExZTYyZmRhMjc0MjI4ZmFmNDgyNjY1ZjNiZDZmZjZiMTlkMDRhZg==";
const content_type = "application/json";
const source_addr = "RAVIAPP";

async function send_sms({ user_name, email, phone, message, status }) {
  // Normalize the email to ensure special characters like '@' are properly encoded
  const sanitizedEmail = email.normalize("NFKC");

  // Construct the SMS message with the sanitized email
  const sms_message = `CUSTOMER DETAILS\nName: ${user_name}\nEmail: ${sanitizedEmail}\nPhone: 0${phone}\nMessage: ${message}\nStatus: ${status}\n`;

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
          { recipient_id: 2, dest_addr: "255781969373" },
          { recipient_id: 3, dest_addr: "255658199566" },
          // { recipient_id: 4, dest_addr: "255773711027" },
          // { recipient_id: 5, dest_addr: "255655456230" },
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
    const confirmation_message = `Dear ${user_name},\nThank you for contacting RAVI. Your request has been received. We will contact you soon.`;
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

    return { success: true, message: "Your message has been sent successfully. We will get back to you shortly." };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Failed to send SMS.";
    console.error("Error in SMS process:", errorMessage);

    // Return failure with error message
    return { success: false, message: errorMessage };
  }
}

export default send_sms;
