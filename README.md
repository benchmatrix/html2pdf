# HTML2PDF Service Setup on Windows using PuTTY

This service is designed to execute on AWS EC2 servers. Follow the steps below to set it up on a Windows machine using PuTTY.

## Prerequisites

- **PuTTY**: Download PuTTY from [this link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

## Installation Steps

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Copy HTML2PDF File**: From the cloned repository, copy the `HTML2PDF` file to your Desktop.

## Configure PuTTY

1. **Open PuTTY** and expand the `Connection` section in the right box.
2. Expand `SSH`, then expand `Auth`, and click on `Credentials`.
3. **Browse for the PPK File**: Locate the PPK file you installed for private key file authentication and then click `Open`.
4. **Setup Host**:
   - In the `Session` folder, add the following host name `16.24.72.82`.
   - Click on `Load`, then `Save`.

## Connect to EC2 Instance

1. **Open PuTTY** and select the saved session.
2. Click the `Load` button. PuTTY terminal will open asking for login username.
3. Type `ec2-user` and press enter.

## Server Setup

1. **Navigate to the HTML2PDF Folder**:
   - Type `cd html2pdf` and navigate to the folder.
2. **Update Repository**:
   - In the folder, type `git pull` to get the latest update.
   - Type `npm i` to install the required packages.
3. **Manage Server**:
   - Start the server by typing `pm2 start server.js`.
   - Stop the server by typing `pm2 stop server.js`.

## Further Assistance

For further help, attached are images guiding through each step:

1. [Link to Image for Step 1](https://ibb.co/V2M9M1w)
2. [Link to Image for Step 2](https://ibb.co/cynb80y)
3. [Link to Image for Step 3](https://ibb.co/hfcM77Y)
4. [Link to Image for Step 4](https://ibb.co/JRCmGs1)
5. [Link to Image for Step 5](https://ibb.co/cy9MdvG)

