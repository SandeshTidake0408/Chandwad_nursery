/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				fadeInUp: "fadeInUp 1.5s ease-out",
			},
			scrollBehavior: {
				smooth: "smooth", // Define the smooth scrolling behavior
			},
			boxShadow: {
				lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
			},
			keyframes: {
				fadeInUp: {
					"0%": {
						opacity: 0,
						transform: "translateY(20px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
