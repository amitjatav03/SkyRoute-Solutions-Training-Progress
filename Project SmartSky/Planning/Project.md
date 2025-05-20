# CRM Automation Tool (Phase 1 - Email Automation)


## Overview

The CRM Automation Tool is designed to help users manage client communications from multiple platforms in one place.



* A CRM (Customer Relationship Management) automation tool automates repititive tasks within marketing, sales, and customer service to streamline processes and improve productivity.

It uses technology within CRM software to automate tasks like creating contacts, scheduling meetings, sending emails, and updating records, saving time and reducing errors.

This allows teams to focus on more strategic and high value activites.



* Customer ke saath jo bhi company ki interaction hoti hai, usko manage karna taaki business ke paas apne customer ka data ho, jissey woh apne customer ko smjh kar apne business ko grow kar ske



**OBJECTIVE-1**

To automate personalized email outreach, track client responses, and automatically manage leads based on those reponses.



## TECH STACK 

**Frontend**
ReactJS, TailwindCSS
GSAP, Locmotive, Framer Motion

**Backend**
NodeJS + Express (for Backend API)
MongoDB (for Database)

**Email Handling**
Nodemailer 
(to send emails via Gmail or SMTP)

**File Handling**
CSV Uploads via csv-parser or multer



## CORE FEATURES

**Upload Contacts**
- Users upload a CSV with name and email fields.
- Data is parsed and store in MongoDB.

**Automated Email Sequence (Max 4 Levels)**
- Level 1: Send a personalized initial email.
- If reply received: Send a custom reply email and mark as lead.
- If no reply: Move to the next email level (upto Level 4).
- After Level 4 with no reply: Mark client as cold.

**Handle Replies**
- Detect replies using Gmail API, IMAP or webhook.
- If a reply is detected, send an automated follow-up and stop further emails.

**Export Leads**
- Clients who respond (at any level) are exported to an Excel file.



## API ENDPOINTS

**Upload Contact List**
> POST /api/upload
    upload a csv file


**Send Initial Emails**
> POST /api/send-initial
    trigger level 1 emails


**Send Follow-Up Emails**
> POST /api/send-followup/:level
    trigger emails for next level if no response


**Handle Email Replies**
> POST /api/email-response
    triggered an reply detection, updates status


**Export Leads**
> GET /api/export-leads
    - download excel of clients marked as lead


## DATABASE DESIGN

**Clients Collection**

{
    "name": "John Doe",
    "email": "john@example.com",
    "status": "level1_sent", // responded, lead, cold
    "level": 1,
    "lastEmailSent": "2025-04-28T10:00:00Z",
    "replied": false
}


## DEVELOPER TIPS

- Use cron jobs for sending follow-up emails based on delay.
- Reply detection can be polled or triggered via webhook.
- Frontend can remain simple, focusing on functionality over design for Phase 1.


# TESTING CHECKLIST

1. Upload and parse CSV successfully
2. Email sent logs at each level
3. Reply correctly updates status
4. Export function generator correct leads file