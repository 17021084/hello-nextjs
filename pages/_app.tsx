import './global.css'
// just import it in app file and dont need in any page

function MyApp({ Component, pageProps }) {
  console.log("Hello in app, chay dc tren ca client ")
  return <Component {...pageProps} />
}

export default MyApp
