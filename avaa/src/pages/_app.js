// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/pages/style/global.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />



export default function App({ Component, pageProps }) {
  return (
  

    <Component {...pageProps} />
   
  );
}
