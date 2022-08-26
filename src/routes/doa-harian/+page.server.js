export async function load() {
    const response = await fetch(`https://api.npoint.io/31b52b3caae1b5c00c17`);
    const dailyPrayers = await response.json();
    return { dailyPrayers };
}