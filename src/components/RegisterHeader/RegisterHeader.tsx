import { Link } from 'react-router-dom';

export default function RegisterHeader() {
  return (
    <header className="py-5">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center">
          <Link to="/">
            <img
              src="/Shopee.svg"
              alt="Shopee Logo"
              className="h-1 w-auto lg:h-10"
            />
          </Link>
          <div className="ml-5 text-xl lg:text-2xl">Đăng ký</div>
        </nav>
      </div>
    </header>
  );
}
