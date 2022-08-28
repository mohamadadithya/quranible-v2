export async function load() {
    const response = await fetch(`https://api.npoint.io/d6fd1df2986d4ce90dc5`);
    const result = await response.json();
    const intentions = await result;
    return { intentions }
}