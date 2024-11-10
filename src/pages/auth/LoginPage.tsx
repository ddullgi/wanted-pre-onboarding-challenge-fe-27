import AuthForm from "@/entities/auth/components/AuthForm";
import { cn } from "@/shared/utils/cn";

export default function LoginPage() {
	return (
		<div>
			<h1 className={cn("flex justify-center font-bold text-3xl my-4")}>
				로그인
			</h1>
			<AuthForm formType="login" />
		</div>
	);
}
