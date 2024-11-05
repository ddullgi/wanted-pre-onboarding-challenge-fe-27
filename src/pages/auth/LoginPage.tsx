import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div>
			<h1>로그인</h1>
			<Link to="/signup">회원 가입</Link>
		</div>
	);
}
