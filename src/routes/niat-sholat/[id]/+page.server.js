export async function load({params}) {
    const id = params.id;
    const response = await fetch(`https://api.npoint.io/d6fd1df2986d4ce90dc5`);
    const intentions = await response.json();
    const intention = intentions.find(intention => intention.id == id);
    const otherIntentions = intentions.filter(intention => intention.id != id);
    return { intention, otherIntentions }
}