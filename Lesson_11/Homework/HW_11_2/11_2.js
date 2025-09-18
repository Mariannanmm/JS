
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const recipesContainer = document.getElementById('recipes-container');
        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.name;

            const instructions = document.createElement('p');
            instructions.textContent = recipe.instructions.join(' ');

            const ingredientsList = document.createElement('ul');
            ingredientsList.innerHTML = '<h4>Інгредієнти:</h4>';
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });

            recipeDiv.appendChild(recipeTitle);
            recipeDiv.appendChild(instructions);
            recipeDiv.appendChild(ingredientsList);
            recipesContainer.appendChild(recipeDiv);
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });