import { SendEmailCommand  } from "@aws-sdk/client-ses";
import { sesClient } from "./aws.js";
import fs from 'fs';

export const sendTicketEmail = async (email, pdfBuffer,url) => {
    const html = `
    <h2>Booking Confirmed 🎉</h2>
            <p>Click below to download your ticket:</p>
            <a href="${url}" target="_blank">Download Ticket</a>
  `;

  const command = new SendEmailCommand({
    Source:process.env.SENDER_EMAIL,
    Destination : {
        ToAddresses :[email],
    },
    Message :{
        Subject : { Data : "Event Ticket Confirmation"},
        Body : {
            Html : {Data : html},
        },
    },
  });

  await sesClient.send(command);;
};