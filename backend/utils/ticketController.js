import { sendTicketEmail } from "./emailService.js";
import { sendSMS } from "./smsService.js";
import {generatePDF} from "./pdf.js";
import {uploadPDF , getURL} from './s3-service.js';

export const bookticket =  async (req,res) => {
    const {ename,price,event,location,email,phone} = req.body;
    const now = new Date();

const date =
  now.getFullYear() + "-" +
  (now.getMonth()+1) + "-" +
  now.getDate();

const time =
  now.getHours() + "-" +
  now.getMinutes() + "-" +
  now.getSeconds();
    try {
        const pdfBuffer = await generatePDF(ename,price,event,location);
        const key = `tickets_${date}_${time}-${ename}`;
        
        uploadPDF(pdfBuffer,key);
        const url = await getURL(key);
        //console.log("Generated url : ", url);

        await sendTicketEmail(email,pdfBuffer,url);

        await sendSMS(phone);

        res.status(200).json({
            success : true,
            message : "Ticket Booked Successfully."
        });

    } catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message : "Booking failed."
        });

    }
};
