/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'golos':[
          '"Golos Text", sans-serif'
        ]
      },
      colors:{
        '1':"#DE5703"
      }
    },
  },
  plugins: [],
}
