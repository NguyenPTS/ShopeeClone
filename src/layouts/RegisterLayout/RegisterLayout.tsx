import Footer from '../../components/Footer';
import RegisterHeader from '../../components/RegisterHeader'; //sủa lại @/

interface Props {
  children?: React.ReactNode;
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  );
}
