import dotenv from 'dotenv';

import { SESClient } from "@aws-sdk/client-ses";
import { SNSClient } from "@aws-sdk/client-sns";

dotenv.config();

export const sesClient = new SESClient({
    region : process.env.REGION,
    credentials : {
        accessKeyId : process.env.AWS_ACCESS_KEY,
        secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
    }
});

export const snsClient = new SNSClient({
    region : process.env.REGION,
    credentials : {
        accessKeyId : process.env.AWS_ACCESS_KEY,
        secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
    }
});


