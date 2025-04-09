import { RegisterOptions } from 'react-hook-form';

// Định nghĩa kiểu dữ liệu FormData
export type FormData = {
  email: string;
  password: string;
  Confirm_password: string;
};

// Định nghĩa các quy tắc xác thực
export const rules: Record<keyof FormData, RegisterOptions<FormData>> = {
  email: {
    required: { value: true, message: 'Email không được để trống' },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email không đúng định dạng',
    },
  },
  password: {
    required: { value: true, message: 'Mật khẩu không được để trống' },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có ít nhất 6 ký tự',
    },
  },
  Confirm_password: {
    required: { value: true, message: 'Vui lòng xác nhận mật khẩu' },
    validate: (value, formValues: FormData) =>
      value === formValues.password || 'Mật khẩu xác nhận không khớp',
  },
};
