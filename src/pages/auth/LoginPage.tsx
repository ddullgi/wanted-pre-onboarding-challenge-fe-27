import { Link } from "react-router-dom";
import Button from "../../shared/components/Button";
import { cn } from "../../shared/utils/cn";

export default function LoginPage() {
	return (
		<div>
			<h1 className={cn("text-3xl")}>로그인 페이지</h1>
			<Button>로그인</Button>
			<Link to="/signup">회원 가입</Link>
		</div>
	);
}
