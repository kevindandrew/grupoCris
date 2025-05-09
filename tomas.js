//FUNCIÓN PARA EXTARER A TODOS LOS PERSONAJES

async function extractAllCharaters() {
  const data = await axios.get("https://rickandmortyapi.com/api/character");
  return data;
}

export { extractAllCharaters };
