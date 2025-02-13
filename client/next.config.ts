import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "petal-s3-img.s3.us-east-1.amazonaws.com",
        port: "",
        pathname:"/**",
      },
    ],
  },
};


export default nextConfig;
