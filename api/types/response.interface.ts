export interface Response<T> {
	data?: T;
	error?: ErrorResponse;
}

export interface Error {
	error: string;
}

export interface ErrorResponse {
	message: string;
}
