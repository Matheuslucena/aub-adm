/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: "/aub-adm",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "incentivio.s3.amazonaws.com",
        port: "",
        pathname: "/e0dd160f-773f-4cb0-bd8f-e4e43818469a/**",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/incentivio/e0dd160f-773f-4cb0-bd8f-e4e43818469a/**",
      },
    ],
  },
};

export default nextConfig;
