import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="bg-orange">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="rounded bg-white p-10 shadow-sm">
              <div className="text-2xl">Đăng Ký</div>
              <div className="mt-8">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Email"
                />

                <div className="mt-1 min-h-[1rem] text-sm text-red-600">
                  Email ko hợp lệ
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  name="password"
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Password"
                />

                <div className="mt-1 min-h-[1rem] text-sm text-red-600"></div>
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  name="Confirm_password"
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Confirm Password"
                />

                <div className="mt-1 min-h-[1rem] text-sm text-red-600"></div>
              </div>
              <div className="mt3">
                <div className="button w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600">
                  Đăng ký
                </div>
              </div>
              <div className="justify mt-8 text-center"></div>
              <div className="flex items-center justify-center">
                <span className="text-gray-400">Bạn đã có tài khoản?</span>
                <Link className="ml-1 text-red-400" to="/login">
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
