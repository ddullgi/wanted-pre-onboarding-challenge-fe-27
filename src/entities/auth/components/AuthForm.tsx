import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Button, Input } from "@/shared/components";
import { cn } from "@/shared/utils/cn";
import { authApi } from "../api/authApi";
import { AuthSchema } from "../schema/authSchema";

import type { AuthParams } from "../model/auth";

interface AuthFormProps {
	formType: "login" | "signup";
}

export default function AuthForm({ formType }: AuthFormProps) {
	const isLogin = formType === "login";
	const navigate = useNavigate();

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

	const { mutate } = useMutation({
		mutationFn: (params: AuthParams) =>
			isLogin ? authApi.login(params) : authApi.signup(params),
		onSuccess: (data) => {
			if (isLogin) {
				localStorage.setItem("authToken", data.token);
				navigate("/");
			} else {
				alert("회원가입 완료");
				navigate("/login");
			}
		},
	});

	const onSubmit = (data: AuthParams) => {
		mutate(data);
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
				{errors.email && (
					<p className={cn("text-red-400")}>{errors.email.message}</p>
				)}
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
				{errors.password && (
					<p className={cn("text-red-400")}>{errors.password.message}</p>
				)}
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
