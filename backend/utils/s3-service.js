import dotenv from 'dotenv';

import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
dotenv.config();
const s3 = new S3Client({
    region:process.env.REGION,
    credentials : {
        accessKeyId : process.env.AWS_ACCESS_KEY,
        secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
    }
});

export const uploadPDF = async(buffer,key)=>{
    await s3.send(new PutObjectCommand({
        Bucket:process.env.BUCKET_NAME,
        Key : key,
        Body : buffer,
        ContentType:"application/pdf"
    }));
};

export const getURL = async (key)=>{
    const command = new GetObjectCommand({
        Bucket : process.env.BUCKET_NAME,
        Key: key,
        ResponseContentDisposition : `attachment; filename="${key}.pdf"`,
    });
    return await getSignedUrl(s3,command,{expiresIn:3600});
};