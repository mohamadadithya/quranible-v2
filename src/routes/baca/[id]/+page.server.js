export async function load({ params, fetch }) {
	const surahId = params.id;

	const getSurahs = async () => {
		try {
			const request = await fetch(`https://api.quran.gading.dev/surah`);
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

	const getSurah = async () => {
		try {
			const request = await fetch(`https://api.quran.gading.dev/surah/${surahId}`);
			const response = await request.json();
			const { code } = response;

			if (code === 200) {
				const { data: surah } = response;
				return surah;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const surahs = await getSurahs();

	const nextNumber = parseInt(surahId) + 1;
	const prevNumber = parseInt(surahId - 1);
	const nextSurah = surahs.find((surah) => surah.number == nextNumber);
	const prevSurah = surahs.find((surah) => surah.number == prevNumber);

	return {
		surah: getSurah(),
		nextSurah,
		prevSurah
	};
}
