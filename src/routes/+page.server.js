import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ fetch }) {
	const getSurahs = async () => {
		try {
			const request = await fetch(`${PUBLIC_API_URL}/surah`);
			const response = await request.json();
			const { code } = response;

			if (code === 200) {
				const { data: surahs } = response;
				return surahs;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		surahs: getSurahs()
	};
}
