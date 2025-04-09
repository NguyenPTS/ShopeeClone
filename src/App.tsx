import useRouteElements from './hooks/useRouteElements';

function App() {
  const routeElements = useRouteElements(); // Lấy các route đã định nghĩa từ custom hook
  return <div>{routeElements}</div>;
}

export default App;
