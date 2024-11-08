import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { cn } from "@/shared/utils/cn";
import type { AuthParams } from "../model/auth";
import { AuthSchema } from "../schema/authSchema";

export default function AuthForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AuthParams>({
		resolver: zodResolver(AuthSchema),
		mode: "onChange", // 입력값 변경 시 유효성 검사를 실행하도록 설정
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: AuthParams) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("w-80")}>
			<div className={cn("w-full h-24")}>
				<label htmlFor="email" className={cn("font-bold")}>
					Email
				</label>
				<Input
					id="email"
					type="email"
					{...register("email")}
					placeholder="이메일을 입력하세요"
				/>
				{errors.email && <p>{errors.email.message}</p>}
			</div>

			<div className={cn("w-full h-24")}>
				<label htmlFor="password" className={cn("font-bold")}>
					Password
				</label>
				<Input
					id="password"
					type="password"
					{...register("password")}
					placeholder="비밀번호를 입력하세요"
				/>
				{errors.password && <p>{errors.password.message}</p>}
			</div>

			{/* 제출 버튼은 유효성 검사 후 활성화 */}
			<Button type="submit" disabled={!isValid}>
				Login
			</Button>
		</form>
	);
}
