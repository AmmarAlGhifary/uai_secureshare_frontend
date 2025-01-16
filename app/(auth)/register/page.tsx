import AuthLayout from "../login";
import { RegisterForm } from "@/components/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
}

export default RegisterPage;