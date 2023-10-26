const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Event listener
searchBtn.addEventListener('click', getMealList);

// Get meal list that matches with ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${searchInputTxt}&number=5&ignorePantry=true&ranking=1`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '9712c3d31520993d5755978d79aceb64170727d6b61187a53ca74d2c720ccd1be1ee7a23cfa40f275443ac807b29a835'
        }
    })
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.length > 0) {
            data.forEach(meal => {
                html += `
                <div class="meal-item" data-id="${meal.id}">
                    <div class="meal-img">
                        <img src="${meal.image}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.title}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>`;
            });
        } else {
            html = '<p>No recipes found.</p>';
        }
        mealList.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });
}

