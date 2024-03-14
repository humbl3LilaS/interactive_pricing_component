/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content : [
	"./pages/**/*.{ts,tsx}",
	"./components/**/*.{ts,tsx}",
	"./app/**/*.{ts,tsx}",
	"./src/**/*.{ts,tsx}",
  ],
  prefix  : "",
  theme   : {
	container: {
	  center : true,
	  padding: "2rem",
	  screens: {
		"2xl": "1400px",
	  },
	},
	extend   : {
	  width: {
		"90P": "90%",
	  },
	  maxWidth:{
		"largeScreen" : "38rem"
	  },
	  backgroundImage: {
		check    : "url('./assets/icon-check.svg')",
		sliderImg   : "url('./assets/icon-slider.svg')",
		pattern  : "url('./assets/pattern-circles.svg')",
		bgPattern: "url('./assets/bg-pattern.svg')",
	  },
	  colors         : {
		cta     : "hsl(226, 100%, 87%)",
		discount: "hsl(15, 100%, 70%)",
		gray    : "hsl(225, 20%, 60%)",
		
	  },
	  backgroundColor: {
		main       : "hsl(230, 100%, 99%)",
		emptySlider: "hsl(224, 65%, 95%)",
		fullSlider : "hsl(174, 77%, 80%)",
		slider     : "hsl(174, 86%, 45%)",
		toggle     : "hsl(223, 50%, 87%)",
		cta        : "hsl(227, 35%, 25%)",
		comp       : "hsl(0, 0%, 100%)",
		discount: "hsl(14, 92%, 95%)",
	  },
	  backgroundSize: {
		mobile: "100% 30%",
		largeScreen: "100% 50%"
	  },
	  borderColor: {
		slider     : "hsl(174, 86%, 45%)",
	  },
	  fontSize: {
		"small" : "15px"
	  },
	  keyframes      : {
		"accordion-down": {
		  from: {height: "0"},
		  to  : {height: "var(--radix-accordion-content-height)"},
		},
		"accordion-up"  : {
		  from: {height: "var(--radix-accordion-content-height)"},
		  to  : {height: "0"},
		},
	  },
	  animation      : {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up"  : "accordion-up 0.2s ease-out",
	  },
	},
  },
  plugins : [require("tailwindcss-animate")],
};