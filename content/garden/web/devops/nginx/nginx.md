---
title: "NGINX"
---

# NGINX

## Troubleshooting

Some steps in case that you are having any problems with your nginx server and you are unsure on what the problem is: [^1]

```bash
# Check if Nginx is running:
systemctl status nginx

# If nginx is not running you could start it with:
systemctl start nginx

# Check your nginx config syntax:
sudo nginx -t

# Restart nginx:
systemctl restart nginx

# Check error log
tail -f /var/log/nginx/error.log

# Find the user that your nginx service is running as:
ps auxf | grep nginx

# If you are using Ubuntu, the user should be www-data, so you would need to make sure that your files and folders are owned by that user, so nginx could read and write to those files:
chown -R www-data:www-data /var/www/yourdomain.com

# Check if nginx is binding to the default ports:
netstat -plant | grep '80\|443'

# Check if ufw allows TCP connections on port 80 and 443:
ufw status
```




[^1]: [How to Troubleshoot Common Nginx Issues on Linux Server?](https://www.digitalocean.com/community/questions/how-to-troubleshoot-common-nginx-issues-on-linux-server)