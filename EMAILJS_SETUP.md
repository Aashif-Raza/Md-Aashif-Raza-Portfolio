# EmailJS contact form setup

## 1. Reply to visitor

Your template already has **Reply To** = `{{email}}`. The form sends that, so replies will go to the visitor.

## 2. From Name

Your template uses **From Name** = `{{name}}`. The form now sends `name`, so the sender's name will show correctly.

## 3. From Email (important – fix so emails send)

**From Email** is required. Right now it's empty and "Use Default Email Address" is unchecked, which can stop emails from sending.

Do **one** of the following:

- **Option A (recommended):** Check **"Use Default Email Address"**. EmailJS will use the address from your connected email service (e.g. Gmail). Emails will send from that address.

- **Option B:** Leave the checkbox unchecked and type a valid sender address in **From Email** (e.g. the same Gmail you use for the service). Some providers only allow sending from that address.

Save the template after changing this. Then try the contact form again; delivery should work once **From Email** is set or the default is used.
