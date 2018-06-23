_Technologies Used_
<br>
-AWS TC2 instance: 
<br>
Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-a4dc46d
<br>
-node.js 
<br>
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions<br>
-nginx
<br>
https://nginx.org/en/docs/
<br>
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04
<br>
-npm
<br>
https://www.npmjs.com/package/npm
<br>
-pm2
<br>
https://www.npmjs.com/package/pm2

_First_
<br>
Go to your AWS console and launch a new instance.
<br>
Select "Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-a4dc46db" as your Amazon Machine Image (AMI)<br>
Select t2.micro as an instance type
<br>
Under "Configure Security Group", add HTTP and HTTPS rules. Set "Source" for all rules to "Anywhere".<br>
Click "Review and Launch", then click "Launch". Then create a new key pair and save it somewhere you can easily access it. You will use this to ssh into your VM. Then click "Luanch Instances".
<br>
<br>
***`Now your instance is running`
<br>
<br>
_SSH into your EC2_
<br>
cd into the file you saved your key pair in.
<br>
Use the chmod command to make sure your private key file isn't publicly viewable. For example, if the name of your private key file is my-key-pair.pem, use the following command:
<br>

```
chmod 400 my-key-pair.pem
```

Use the following SSH command to connect to the instance:
<br>
***`public_dns_name will be the public dns url found on the EC2 dashboard.`

```
ssh -i /my-key-pair.pem ubuntu@public_dns_name
```
It will ask you "Are you sure you want to continue connecting (yes/no)?", enter "yes".

***`You are now within your AWS VM.`
<br>
Update your local packages with this command:
```
sudo apt-get update && sudo apt-get upgrade -y
```

_Set up nginx_
<br>
Run this command to install nginx:
<br>
```
sudo apt-get install nginx -y
```
Check status of Nginx and start it using the following commands:
<br>
To check the status of nginx:
<br>
```
sudo systemctl status nginx    
```
To start nginx:
<br>
```
sudo systemctl start nginx 
```
<br>
Make sure that Nginx will run on system startup by using command below:
<br>

```
sudo systemctl enable nginx
```
<br>

***`nginx should be running now`

<br>

_Install Node_
<br>
Install node and npm using these commands:
<br>

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
<br>
Check node and npm verions with these commands:
<br>

```
node --version
```
```
npm --version
```
<br>

_Set up Nginx as a reverse proxy for Express_
<br>
https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
<br>

Get the private ip address of your instance by visiting your EC2 under the "Instances" tab on AWS.
<br>

Remove and add default file to sites-available by using following commands:
<br>

```
sudo rm /etc/nginx/sites-available/default
sudo vi /etc/nginx/sites-available/default
```

<br>
Now add this code to that file:
<br>

```
server {
    listen 80;
    server_name [url for your ec2 instance];
    location / {
        proxy_pass http://[your private ip]:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
     }
}
```
***`Replace [url for your ec2 instance] with your ec2 domain name and [your private ip] with the private ip address associated with your EC2`

<br>
Test the configuration of Nginx using the command below:
<br>

```
sudo nginx -t
```
<br>
Then reload Nginx if OK is displayed.
<br>

```
sudo /etc/init.d/nginx reload
```
<br>

_Create a Simple Node/Express server_


```
mkdir app
cd app
npm i express
```
<br>

_Create and open a new server.js file in VIM_

```
vi server.js
```

<br>
Here is a basic express server:
<br>

```
const express = require('express');
const app = express();

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(8080, 'private_ip_address');
```

***`Replace private_ip_address with your private ip address.`

<br>

Use the following command to run your server:
<br>

```
node server.js
```

<br>

Visit your EC2's domain, you should see "Hello World" now.
<br>

_Install pm2 and run your Express server with it_

<br>

Install pm2 with the following command:
<br>

```
sudo npm install pm2 -g
```

<br>
_Run your application using pm2 to make sure your application runs automatically when the server restarts._

<br>

```
pm2 start server.js
```

<br>

`Now you have set up a reverse proxy for your Express server using Nginx. pm2 will ensure that your server continues to run even if it restarts`

<br>

`Don't forget to stop your EC2 instance when you are't using it.`

<br>
You can do this by visiting your AWS account's "Instance's" tab. Here you can see all of your instances. Right click on and instance and select "Instance State" then "stop" to stop the instance. You can start an instance again by right clicking on it and selecting "Instance State" then "Start".