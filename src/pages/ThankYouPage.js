import { useLocation } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product');

  return (
    <div className="thank-you-page">
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
    </div>
  );
};

export default ThankYouPage;
