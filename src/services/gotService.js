
  const apiBase= 'https://www.anapioficeandfire.com/api';

  const getResource = async (url) => {
    const res = await fetch(`${apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  }

  const getAllCharacters = async () => {
    const res = await getResource('/characters?page=5&pageSize=10');
    return res.map(transformCharacter);
  }

  const getCharacter = async (id) => {
    const res = await getResource(`/characters/${id}`);
    return transformCharacter(res);
  }

  const transformCharacter = (character) => {
    return {
      name: character.name,
      gender: character.gender,
      born: character.born,
      died: character.died,
      culture: character.culture
    }
  }


export {getAllCharacters, getCharacter};
