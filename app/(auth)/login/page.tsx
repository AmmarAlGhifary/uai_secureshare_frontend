import { LoginForm } from "@/components/auth/LoginForm"
import AuthLayout from "../login";

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}

export default LoginPage;