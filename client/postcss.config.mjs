import { hostname } from 'os';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "petal-s3-img.s3.us-east-1.amazonaws.com",
        port: "",
        pathname:"/**",
      }
    ]
  }
};

export default config;
