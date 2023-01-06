// function should return a value
export default async (url: string) => {
	try {
		const response = await fetch(url, { method: 'GET' });
		if (!response.ok) {
			throw new Error(` ${response.status}: ${response.statusText}`);
		}
		let data = await response.json();
		return data;
	} catch (err: any) {
		return { error: err.message };
	}
};
