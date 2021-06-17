const images = [
  'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/5639252/pexels-photo-5639252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/4629324/pexels-photo-4629324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2732666/pexels-photo-2732666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2072476/pexels-photo-2072476.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/939052/pexels-photo-939052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1755785/pexels-photo-1755785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/793762/pexels-photo-793762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/6420305/pexels-photo-6420305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
  const TOTAL_PAGES = 100;
  const ITEM_PER_PAGE = 16;

  return {
    totalPages: TOTAL_PAGES,
    nextPage: page + 1,
    prevPage: page - 1,
    currentPage: page,
    result: getRecipes(page),
  }
}