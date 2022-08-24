export async function load({params}) {
    const surahId = params.id;
    const response = await fetch(`https://quranapi.idn.sch.id/surah/${surahId}`);
    const surah = await response.json();
    return { surah }
}