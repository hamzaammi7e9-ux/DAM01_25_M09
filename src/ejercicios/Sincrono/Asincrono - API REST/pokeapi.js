async function conectaAPI() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOID}`)
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        mostrarPOkemon(json.value);
    } catch (error) {
        console.error("Error:", error);
    }
}