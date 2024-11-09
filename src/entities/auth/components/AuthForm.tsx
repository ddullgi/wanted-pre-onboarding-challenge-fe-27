import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Input } from "@/shared/components";
import { cn } from "@/shared/utils/cn";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { authQuery } from "../api/authApi";
import type { AuthParams } from "../model/auth";
import { AuthSchema } from "../schema/authSchema";

interface AuthFormProps {
	formType: "login" | "signup";
}

export default function AuthForm({ formType }: AuthFormProps) {
	const isLogin = formType === "login";

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<AuthParams>({
		resolver: isLogin ? undefined : zodResolver(AuthSchema),
		mode: "onChange", // 입력값 변경 시 유효성 검사를 실행하도록 설정
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { queryFn } = authQuery.signup();

	const { mutate } = useMutation({
		mutationFn: (values: AuthParams) => queryFn(values),
		onSuccess: (data) => {
			localStorage.setItem("token", data.token);
		},
	});

	return (
		<form onSubmit={handleSubmit(mutate)} noValidate className={cn("w-80")}>
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
				{isLogin ? "Login" : "Signup"}
			</Button>
			{isLogin && (
				<div className={cn("font-semibold my-2")}>
					계정이 없다면?{" "}
					<Link to="/signup" className="text-blue-700">
						가입하기
					</Link>
				</div>
			)}
		</form>
	);
}
