/** @type {import('next').NextConfig} */
const nextConfig = {
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	eslint: {
		dirs: ['/'],
	},
};

module.exports = nextConfig;
