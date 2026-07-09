import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Continue your journey of mindful decisions."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;