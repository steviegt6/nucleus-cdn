// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    basePath: "",
    async headers() {
        return [
            {
                source: "/config",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
