export async function load({params}) {
    const surahId = params.id;
    const response = await fetch(`https://equran.id/api/surat/${surahId}`);
    const surah = await response.json();
    return { surah }
}