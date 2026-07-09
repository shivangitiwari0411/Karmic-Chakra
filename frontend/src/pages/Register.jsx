import AuthLayout from "../components/layout/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Begin your journey toward better decisions."
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;