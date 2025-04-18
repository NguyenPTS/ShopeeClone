import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { rules } from '../../utils/rules';

interface FormData {
  email: string;
  password: string;
  Confirm_password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="bg-orange">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="rounded bg-white p-10 shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng Nhập</div>
              <div className="mt-8">
                <input
                  type="email"
                  {...register('email', rules.email)}
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Email"
                />
                <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">
                  {errors.email && 'Email không hợp lệ'}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register('password', rules.password)}
                  autoComplete="on"
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Password"
                />
                <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">
                  {errors.password && 'Mật khẩu không hợp lệ'}
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="button w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600"
                >
                  Đăng nhập
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <span className="text-gray-400">Bạn mới biết đến Shopee?</span>
                <Link className="ml-1 text-red-400" to="/register">
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
