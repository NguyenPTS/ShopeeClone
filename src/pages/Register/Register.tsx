import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { rules } from '../../utils/rules';

interface FormData {
  email: string;
  password: string;
  Confirm_password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  console.log(errors);
  return (
    <div className="bg-orange">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="rounded bg-white p-10 shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng Ký</div>
              <div className="mt-8">
                <input
                  type="email"
                  {...register('email', rules.email)}
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Email"
                />
                <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">
                  {errors.email?.message}
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
                  {errors.password?.message}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register('Confirm_password', {
                    required: 'Vui lòng xác nhận mật khẩu',
                    validate: (value) =>
                      value === watch('password') ||
                      'Mật khẩu xác nhận không khớp',
                  })}
                  className="w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-orange focus:ring-1 focus:ring-gray-300"
                  placeholder="Confirm Password"
                />
                <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">
                  {errors.Confirm_password?.message}
                </div>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="button w-full bg-red-500 px-2 py-4 text-center text-sm uppercase text-white hover:bg-red-600"
                >
                  Đăng ký
                </button>
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
