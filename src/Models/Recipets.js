const images = [
  'https://eda.ru/img/eda/c1304x700i/s1.eda.ru/StaticContent/Photos/170302230926/210603081202/p_O.jpg',
  'https://eda.ru/img/eda/c1304x700i/s1.eda.ru/StaticContent/Photos/170302230926/210604090936/p_O.jpg',
  'https://eda.ru/img/eda/c1304x700i/s1.eda.ru/StaticContent/Photos/170302230926/210604082116/p_O.jpg',
  'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/130104145234/130113185309/p_O.jpg',
]


export function getRecipe(id) {
  return {
    id: id,
    image: images[id % images.length],
  }
}


export function getRecipes(pageNumber) {
  const RECIPIES_PER_PAGE = 16;
  const recipies = [];

  for (let i = 1; i <= RECIPIES_PER_PAGE; ++i) {
    const cardIndex = pageNumber * RECIPIES_PER_PAGE + i;
    recipies.push(getRecipe(cardIndex));
  }

  return recipies;
}


export function getRecipesFromServer(page) {
  const TOTAL_PAGES = 8;
  const ITEM_PER_PAGE = 16;

  return {
    totalPages: TOTAL_PAGES,
    nextPage: page + 1,
    prevPage: page - 1,
    curretPage: page,
    result: getRecipes(page),
  }
}