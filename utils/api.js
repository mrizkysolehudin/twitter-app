import { API_URL, AUTH_TOKEN } from "./config";

// fetch all tweets
export const getAllTweets = async () => {
	const res = await fetch(`${API_URL}/tweet`, {
		headers: {
			Authorization: `Bearer ${AUTH_TOKEN}`,
		},
	});
	if (res.status === 401) {
		throw new Error("Not authorized. please sign in");
	}
	if (res.status !== 200) {
		throw new Error("error fetching all tweets");
	}

	return await res.json();
};

export const getOneTweet = async (id) => {
	const res = await fetch(`${API_URL}/tweet/${id}`, {
		headers: {
			Authorization: `Bearer ${AUTH_TOKEN}`,
		},
	});
	if (res.status === 401) {
		throw new Error("Not authorized. Please sign in");
	}
	if (res.status !== 200) {
		throw new Error("error fetching one tweet");
	}

	return await res.json();
};

export const createTweet = async (newTweet) => {
	const res = await fetch(`${API_URL}/tweet`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${AUTH_TOKEN}`,
			"Content-type": "application/json",
		},
		body: JSON.stringify(newTweet),
	});
	if (res.status === 401) {
		throw new Error("Not authorized. Please sign in");
	}
	if (res.status !== 201) {
		throw new Error("error creating tweet");
	}

	return await res.json();
};

// auth login
export const signInAuth = async (email) => {
	const res = await fetch(`${API_URL}/auth/login`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(email),
	});
	if (res.status !== 201) {
		throw new Error("error auth login");
	}
};

// auth confirmation code
export const confirmAuth = async (data) => {
	const res = await fetch(`${API_URL}/auth/authenticate`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (res.status !== 200) {
		throw new Error("error auth confirmation code");
	}
};
