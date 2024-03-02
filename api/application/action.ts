'use server';

import { cookies } from 'next/headers';
import { ApplicationResponse } from './response.interface';
import { ApplicationParams } from './params.interface';

import { ErrorResponse, Response, Error } from '@/api/types/response.interface';

export type queryFn<T, P = undefined> = (params?: P) => Promise<Response<T>>;

export const createApplication: queryFn<ApplicationResponse, ApplicationParams> = async (
	params,
) => {
	const res = await fetch(`${process.env.URL}/application`, {
		method: 'POST',
		headers: {
			Cookie: cookies().toString(),
		},
		body: JSON.stringify(params),
	});

	if (!res.ok) {
		const errorMessage: Error = await res.json();
		const error: ErrorResponse = {
			message: errorMessage.error,
		};
		return { error };
	}

	return { data: await res.json() };
};
