//FUNCIÓN PARA EXTARER A TODOS LOS PERSONAJES

async function extractAllCharaters() {
  try {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { extractAllCharaters };
