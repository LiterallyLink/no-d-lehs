# No-D-Lehs DJ Services Website

A modern, professional DJ services website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎵 **Modern Design**: Sleek, animated interface with gradient backgrounds and smooth transitions
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎨 **Animated**: Framer Motion animations throughout for engaging user experience
- 💼 **Professional**: Complete business website with services, packages, quote form, and store

## Pages

- **Home**: Hero section with call-to-action and features showcase
- **Services**: Detailed information about DJ services offered
- **Packages**: Three pricing tiers (Essential, Premium, Ultimate) with add-ons
- **Quote**: Interactive form to request custom quotes
- **Store**: Online store for merchandise and digital products

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Self-Hosting Instructions

To host this website from your PC on your home WiFi:

### Option 1: Using Port Forwarding

1. **Build the production version**:
   ```bash
   npm run build
   npm start
   ```
   This will start the server on port 3000.

2. **Find your local IP address**:
   - Windows: `ipconfig` in Command Prompt
   - Linux/Mac: `ifconfig` or `ip addr` in Terminal

3. **Set up port forwarding on your router**:
   - Log into your router's admin panel (usually 192.168.1.1 or 192.168.0.1)
   - Navigate to Port Forwarding settings
   - Forward external port 80 (HTTP) or 443 (HTTPS) to your PC's local IP on port 3000

4. **Configure your domain**:
   - Log into your domain registrar (where you bought nodlehsdjservices.com)
   - Set an A record pointing to your home's public IP address
   - You can find your public IP at https://whatismyipaddress.com

### Option 2: Using a Reverse Proxy (Recommended)

Use a service like:
- **Cloudflare Tunnel**: Free, secure tunneling without port forwarding
- **ngrok**: Easy setup for temporary hosting
- **Nginx**: Advanced users can set up Nginx as a reverse proxy

### Option 3: Dynamic DNS

If your home IP changes frequently:
1. Sign up for a Dynamic DNS service (No-IP, DuckDNS, etc.)
2. Install their client on your PC
3. Point your domain to the DDNS hostname

## Keeping the Server Running

### Linux/Mac
Use PM2 process manager:
```bash
npm install -g pm2
pm2 start npm --name "dj-website" -- start
pm2 startup
pm2 save
```

### Windows
Use a tool like:
- **NSSM (Non-Sucking Service Manager)** to run as a Windows service
- **Task Scheduler** to start on boot

## Environment Variables

Create a `.env.local` file for any environment-specific settings:

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://nodlehsdjservices.com
```

## Customization

### Colors
Edit the gradient colors in `app/globals.css` to match your branding.

### Content
- Update text content in each page component
- Replace placeholder images with actual photos
- Modify package prices and features in `app/packages/page.tsx`

### Contact Form
The quote form currently logs to console. To make it functional:
1. Set up a backend API endpoint
2. Use a service like FormSpree, EmailJS, or SendGrid
3. Update the form submission handler in `app/quote/page.tsx`

## Security Considerations

⚠️ **Important for self-hosting:**
- Keep your system and Node.js updated
- Use HTTPS (Let's Encrypt for free SSL certificates)
- Consider using Cloudflare for DDoS protection
- Set up a firewall on your PC
- Regularly backup your server
- Monitor server logs for suspicious activity

## License

All rights reserved - No-D-Lehs DJ Services

## Support

For questions or issues, please contact the website administrator.
