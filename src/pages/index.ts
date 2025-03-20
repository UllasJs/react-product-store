import HomePage from './home-page';
import ProductDetails from './product-details';

export const routeComponents: Record<string, React.FC> = {
    home: HomePage,
    'product-details': ProductDetails,
};