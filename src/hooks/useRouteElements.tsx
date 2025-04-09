import { useRoutes } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import Register from '../pages/Register';
import Login from '../pages/Login';
import RegisterLayout from '../layouts/RegisterLayout';

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />, // Trang danh sách sản phẩm
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login /> {/* Trang đăng nhập */}
        </RegisterLayout>
      ),
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register /> {/* Trang đăng ký */}
        </RegisterLayout>
      ),
    },
  ]);

  return routeElements; // Trả về các route đã được định nghĩa
}
