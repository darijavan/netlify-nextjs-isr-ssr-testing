export default async function SSR() {
    const response = await fetch("https://randomuser.me/api/", {
        cache: "no-cache",
    });
    const data = await response.json();

    return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
