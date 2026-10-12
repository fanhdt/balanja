import { SignIn } from "@clerk/clerk-react";
const LoginPage = () => {
  return (
    <div className="h-screen hero">
      <h1>Login Page</h1>
      <SignIn />
    </div>
  );
};

export default LoginPage;
