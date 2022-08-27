export async function load({params}) {
    const id = params.id;
    const response = await fetch(`https://api.npoint.io/31b52b3caae1b5c00c17`);
    const dailyPrayers = await response.json();
    const dailyPrayer = dailyPrayers.find(dailyPrayer => dailyPrayer.id == id);
    const otherPrayers = dailyPrayers.filter(dailyPrayer => dailyPrayer.id != id);
    return { dailyPrayer, otherPrayers }
}