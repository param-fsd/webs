/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost',
    '192.168.1.1',
    // Add your local network IP here (example)
    // '192.168.1.100',   // ← change to your computer's IP
  ],
};

export default nextConfig;