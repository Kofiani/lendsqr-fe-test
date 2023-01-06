import { dataProps } from './types';
import fetchUserData from './fetchData';
export default async (
	url: string,
	setLoading: (arg: boolean) => void,
	setData: (arg: dataProps[] | null) => void,
	setError: (arg: boolean | null) => void,
) => {
	const result = await fetchUserData(url);
	try {
		if (result?.error) {
			setData(null);
			throw result;
		}
		setData(result);
		setError(null);
	} catch (e) {
		setError(result.error);
	} finally {
		setLoading(false);
	}
};
