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

//FUNCIÓN PARA DEVOLVER A TODOS LOS PERSONAJES FILTRADOS POR ESPECIE O ESTADO

async function filterAndExtractCharacters(
  filter_status = "",
  filter_species = ""
) {
  /*
  PARÁMETROS:
  filter_status: "alive" - "dead"
  filter_species: "human" - "alien"
  */
  try {
    if (filter_status !== "" && filter_species === "") {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?status=${filter_status}`
      );
      return data.results;
    } else if (filter_species !== "" && filter_status === "") {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?species=${filter_species}`
      );
      return data.results;
    } else if (filter_status !== "" && filter_species !== "") {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?species=${filter_species}&status=${filter_status}`
      );
      return data.results;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { extractAllCharaters, filterAndExtractCharacters };
