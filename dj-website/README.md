# No D Lehs DJ Services Website

Professional DJ services website built with vanilla HTML, CSS, and JavaScript. Features a modern, animated design with full e-commerce capabilities.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated UI**: Smooth animations and gradient backgrounds
- **Service Pages**: Detailed information about DJ services
- **Pricing Packages**: Three-tier pricing with add-on services
- **Quote Form**: Contact form for custom quotes
- **Online Store**: Merchandise and digital products with shopping cart
- **Mobile Navigation**: Hamburger menu for mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no build tools required

## Pages

- **Home** (`index.html`) - Hero section with features and call-to-actions
- **Services** (`services.html`) - Detailed DJ service categories
- **Packages** (`packages.html`) - Pricing tiers and add-on services
- **Get a Quote** (`quote.html`) - Contact form for custom quotes
- **Store** (`store.html`) - Merchandise and digital products

## Running Locally

### Option 1: Python HTTP Server

```bash
# Navigate to the project directory
cd dj-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Visit `http://localhost:8000` in your browser.

### Option 2: Node.js HTTP Server

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the project directory and run
cd dj-website
http-server -p 8000
```

Visit `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Self-Hosting Setup

### Prerequisites

- A computer that will stay on to host the website
- Home internet connection with stable upload speed
- Domain name purchased from a registrar (GoDaddy, Namecheap, etc.)
- Router with port forwarding capability

### Step 1: Install Web Server Software

#### Option A: Using Node.js (Recommended for simplicity)

1. Install Node.js from https://nodejs.org/
2. Install PM2 to keep the server running:
   ```bash
   npm install -g pm2
   ```
3. Create a simple server file `server.js`:
   ```javascript
   const http = require('http');
   const fs = require('fs');
   const path = require('path');

   const PORT = 80;

   const mimeTypes = {
       '.html': 'text/html',
       '.css': 'text/css',
       '.js': 'text/javascript',
       '.json': 'application/json',
       '.png': 'image/png',
       '.jpg': 'image/jpeg',
       '.gif': 'image/gif',
       '.svg': 'image/svg+xml',
   };

   const server = http.createServer((req, res) => {
       let filePath = '.' + req.url;
       if (filePath === './') filePath = './index.html';

       const extname = path.extname(filePath);
       const contentType = mimeTypes[extname] || 'application/octet-stream';

       fs.readFile(filePath, (err, content) => {
           if (err) {
               if (err.code === 'ENOENT') {
                   res.writeHead(404);
                   res.end('404 Not Found');
               } else {
                   res.writeHead(500);
                   res.end('Server Error');
               }
           } else {
               res.writeHead(200, { 'Content-Type': contentType });
               res.end(content, 'utf-8');
           }
       });
   });

   server.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });
   ```
4. Start the server with PM2:
   ```bash
   cd dj-website
   pm2 start server.js --name dj-website
   pm2 save
   pm2 startup
   ```

#### Option B: Using Apache or Nginx

Install Apache or Nginx and configure them to serve files from the `dj-website` directory.

### Step 2: Configure Port Forwarding

1. Find your computer's local IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` or `ip addr`
2. Log into your router's admin panel (usually 192.168.1.1 or 192.168.0.1)
3. Navigate to Port Forwarding settings
4. Create a new port forwarding rule:
   - External Port: 80 (HTTP)
   - Internal Port: 80
   - Internal IP: Your computer's local IP address
   - Protocol: TCP
5. Optional but recommended: Also forward port 443 for HTTPS

### Step 3: Set Up Dynamic DNS (Recommended)

Since most home internet connections have dynamic IP addresses:

1. Sign up for a free Dynamic DNS service:
   - DuckDNS (free, simple)
   - No-IP (free tier available)
   - Dynu (free tier available)
2. Create a hostname (e.g., `nodlehsdj.duckdns.org`)
3. Install their update client on your PC to keep the IP updated

### Step 4: Configure Your Domain

Once you have your public IP address or Dynamic DNS hostname:

#### Option A: Direct Domain Pointing

In your domain registrar's DNS settings:
- Create an A record pointing to your public IP address
- Or create a CNAME record pointing to your Dynamic DNS hostname

#### Option B: Using Cloudflare (Recommended)

1. Sign up for a free Cloudflare account
2. Add your domain to Cloudflare
3. Update your domain's nameservers to Cloudflare's
4. In Cloudflare DNS settings:
   - Add an A record pointing to your public IP
   - Or add a CNAME to your Dynamic DNS hostname
5. Benefits:
   - Free SSL/HTTPS
   - DDoS protection
   - CDN caching
   - Hide your home IP address

### Step 5: Enable HTTPS (Highly Recommended)

#### Using Cloudflare (Easiest)

Cloudflare provides free SSL automatically. Just enable it in the SSL/TLS settings.

#### Using Let's Encrypt (Self-managed)

```bash
# Install Certbot
sudo apt-get install certbot  # Ubuntu/Debian
brew install certbot          # macOS

# Get certificate
sudo certbot certonly --standalone -d nodlehsdjservices.com

# Configure your web server to use the certificates
```

### Step 6: Keep Your Server Running

#### Windows - Using NSSM

1. Download NSSM from https://nssm.cc/
2. Install as a service:
   ```cmd
   nssm install DJWebsite "C:\Program Files\nodejs\node.exe" "C:\path\to\dj-website\server.js"
   nssm start DJWebsite
   ```

#### Linux/Mac - Using PM2

Already configured in Step 1 if using Node.js option.

### Security Considerations

1. **Firewall**: Only open ports 80 and 443
2. **Updates**: Keep your OS and server software updated
3. **Backups**: Regularly backup your website files
4. **Monitoring**: Set up uptime monitoring (UptimeRobot, Pingdom)
5. **Rate Limiting**: Consider using Cloudflare to prevent abuse
6. **HTTPS**: Always use HTTPS to encrypt traffic

## Customization

### Update Content

Edit the HTML files directly to update:
- Business name and branding
- Service descriptions
- Pricing information
- Contact details

### Change Colors

Edit `css/styles.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary: #8b5cf6;        /* Primary purple */
    --primary-dark: #7c3aed;   /* Darker purple */
    --secondary: #ec4899;      /* Pink accent */
    --dark: #0f172a;           /* Dark backgrounds */
    --dark-lighter: #1e293b;   /* Lighter dark */
    --gray: #64748b;           /* Text gray */
    --light: #f8fafc;          /* Light backgrounds */
    --white: #ffffff;          /* White */
}
```

### Add Images

Replace the text placeholders in the store products:
1. Edit `js/cart.js`
2. Update the `image` property to use actual image URLs:
   ```javascript
   { id: 1, name: 'DJ T-Shirt', price: 25, image: 'images/shirt.jpg', ... }
   ```
3. Add corresponding images to the `images/` directory

## Backend Integration

The quote form currently logs data to the console. To send emails or save to a database:

1. Set up a backend server (Node.js, Python, PHP)
2. Update `js/quote.js` to send form data to your backend
3. Implement email sending (Nodemailer, SendGrid, etc.)
4. Optional: Save submissions to a database

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## License

Copyright 2024 No D Lehs DJ Services. All rights reserved.

## Support

For questions or support with this website, contact the developer or create an issue in the project repository.
