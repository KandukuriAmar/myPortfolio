// tailwind.config.js
export default {
  content: [
    './index.html', // The HTML file
    './src/**/*.{js,jsx,ts,tsx}', // The React components
  ],
  theme: {
    extend: {
      width: {
        '66rem': '66rem'
      },
      padding: {
        '46rem': '46rem'
      },
      colors: {
        linkedin: '#0A66C2',
        github: '#657681', 
        instagram: '#f942bf', 
        gmail: '#D14836',
        card: '#242424',
        gold: '#99ed4f',
      }
    },
  },
  plugins: [],
}
