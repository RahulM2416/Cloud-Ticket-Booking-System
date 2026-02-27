![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![React](https://img.shields.io/badge/React-Frontend-blue)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green)

# 🎫 AWS Event Ticket Booking & Notification System

A cloud-integrated event ticket booking application built using **React.js**, **Node.js**, and **AWS services**.
The system allows users to book event tickets, automatically generate PDF tickets, store them securely in AWS S3, and receive booking notifications through Email and SMS.

---

## 🚀 Features

* 🧾 Event ticket booking form with modern React UI
* 📄 Dynamic PDF ticket generation
* ☁️ Secure ticket storage using AWS S3
* 🔗 Presigned URL generation for secure ticket download
* 📧 Email confirmation with downloadable ticket link via AWS SES
* 📱 SMS notification confirming ticket delivery via AWS SNS
* ⏱ Unique timestamp-based ticket filenames
* 🎨 Responsive UI built with Tailwind CSS

---

## 🏗️ System Architecture

User Booking → Backend API → PDF Generation → S3 Upload →
Email Notification (SES) + SMS Notification (SNS)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* PDFKit

### AWS Cloud Services

* Amazon S3 — File Storage
* Amazon SES — Email Service
* Amazon SNS — SMS Notifications
* IAM — Secure Access Management

---

## ⚙️ How It Works

1. User enters booking details.
2. Backend generates a PDF ticket dynamically.
3. Ticket is uploaded to AWS S3.
4. A secure presigned download link is created.
5. Email with ticket download link is sent via SES.
6. SMS notification confirms ticket delivery.

---

## 📸 Demo Workflow

* Book Event
* Receive Email Confirmation
* Download Ticket
* Receive SMS Notification

---

## 🔮 Future Enhancements

* OTP-based user verification
* QR code ticket validation
* Serverless deployment using AWS Lambda
* Booking history dashboard

---

![Made with Love](https://img.shields.io/badge/Made%20By-Rahul%20M-blueviolet)
