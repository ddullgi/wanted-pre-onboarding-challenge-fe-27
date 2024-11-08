export interface AuthResponse {
	message: string;
	token: string;
}

export interface AuthParams {
	email: string;
	password: string;
}
