// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/globals.css'; // Your global styles (if any)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;