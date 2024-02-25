
import './reset.css'
import './global.css'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "سامانه املاک مسلمی",
  description: "سامانه خرید و فروش و اجاره مسلمی ",
};

export default async function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body>
        {children}
      </body>
    </html>
  );
}
