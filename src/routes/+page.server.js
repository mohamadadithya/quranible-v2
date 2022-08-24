export async function load() {
    const response = await fetch(`https://quranapi.idn.sch.id/surah`);
    const surahs = await response.json();
    return { surahs }
}