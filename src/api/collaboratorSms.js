import axios from "axios";

// ✅ API Credentials
const api_key = "49478e6e5cac680b";
const secret_key = "Y2I3ODliZmMwMTU4MWExNTNkNDVmMzNmZDExZTYyZmRhMjc0MjI4ZmFmNDgyNjY1ZjNiZDZmZjZiMTlkMDRhZg==";
const source_addr = "RAVIAPP";
const content_type = "application/json";

// ✅ Cross-environment Base64 encoding
function getAuthToken() {
  if (typeof window === "undefined") {
    // Node.js (Next.js SSR, Vite SSR)
    return Buffer.from(`${api_key}:${secret_key}`).toString("base64");
  } else {
    // Browser (CRA, plain React)
    return btoa(`${api_key}:${secret_key}`);
  }
}

async function send_sms({ collaborator_code, location, collaborator_phone, message, status }) {
  const sms_message = 
    `Collaborator Details\nCode: ${collaborator_code}\nTax Region: ${location}\nPhone: +255${collaborator_phone}\n\nMessage: ${message}\nStatus: ${status}`;

  const credentials = getAuthToken();

  try {
    const response = await axios.post(
      "https://apisms.beem.africa/v1/send",
      {
        source_addr,
        schedule_time: "",
        encoding: 0,
        message: sms_message,
        recipients: [
          { recipient_id: 1, dest_addr: "255782671763" },
          { recipient_id: 2, dest_addr: "255781969373" },
          { recipient_id: 3, dest_addr: "255658199566" },
          { recipient_id: 5, dest_addr: "255655456230" },
        ],
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    console.log("✅ Message sent to recipients:", response.data);
    return { success: true, message: "Your message has been sent successfully. We will get back to you shortly." };

  } catch (error) {
    console.error("❌ Error in SMS sending:", {
      error: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    return {
      success: false,
      message: error.response?.data?.message || error.message || "Failed to send SMS.",
    };
  }
}

export default send_sms;
