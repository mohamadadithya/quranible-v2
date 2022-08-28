export async function load() {
    const response = await fetch(`https://api.npoint.io/7c853c9f8335e6e948dd`);
    const goodNames = await response.json();
    return { goodNames }
}