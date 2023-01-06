import { dataProps } from './types';

export default (
	setSingleUserDetails: (arg: dataProps | null) => void,
	setData: (arg: dataProps[] | null) => void,
	setError: (arg: boolean | null) => void,
	setLoading: (arg: boolean) => void,
) => {
	try {
		let loadUser = JSON.parse(localStorage.getItem('user') || '');
		if (loadUser === '') {
			throw new Error('404: Not Found');
		}
		setSingleUserDetails(loadUser);
		setError(null);
		setData(null);
	} catch (e: any) {
		setError(e.message);
		setSingleUserDetails(null);
	} finally {
		setLoading(false);
	}
};
