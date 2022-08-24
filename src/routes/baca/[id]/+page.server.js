export async function load({params}) {
    const surahId = params.id;
    const [surah, surahs] = await Promise.all([
        fetch(`https://quranapi.idn.sch.id/surah/${surahId}`).then(res => res.json()),
        fetch(`https://quranapi.idn.sch.id/surah/`).then(res => res.json())
    ]);
    const nextNumber = parseInt(surahId) + 1;
    const prevNumber = parseInt(surahId - 1);
    const nextSurah = surahs.data.find(surah => surah.number == nextNumber);
    const prevSurah = surahs.data.find(surah => surah.number == prevNumber);
    return { surah, nextSurah, prevSurah }
}