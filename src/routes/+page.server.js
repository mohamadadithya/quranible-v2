export async function load() {
    const response = await fetch(`https://equran.id/api/surat`);
    const surahs = await response.json();
    return { surahs }
}