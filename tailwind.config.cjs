/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: { // Định nghĩa màu sắc tùy chỉnh
                orange: '#ee4d2d',
            },
        },
    },
    plugins: [], // Danh sách plugin Tailwind (nếu có)
};
