import AuthForm from "@/entities/auth/components/AuthForm";
import { cn } from "@/shared/utils/cn";

export default function SignupPage() {
	return (
		<div>
			<h1 className={cn("flex justify-center font-bold text-3xl my-4")}>
				회원가입
			</h1>
			<AuthForm formType="signup" />
		</div>
	);
}
