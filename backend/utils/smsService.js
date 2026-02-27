import { sesClient, snsClient } from "./aws.js";
import { PublishCommand } from "@aws-sdk/client-sns";

export const sendSMS = async (phone) => {
    const command = new PublishCommand({
        Message : "Your Booking is CONFIRMED & has been sent to your Email",
        PhoneNumber:phone,
    });
    await snsClient.send(command);
};
