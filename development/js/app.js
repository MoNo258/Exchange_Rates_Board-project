document.addEventListener('DOMContentLoaded', function () {


    //-------------------------------------------------------------------------------------
    // ----- START: BASIC LOGIC FOR NAVIGATION -----
    //-------------------------------------------------------------------------------------

    const nameDisplay = document.querySelector('.userName__info');

    const dashboardFirstEntry = document.querySelector('.dashboardFirstEntry');
    const dashboardWidgets = document.querySelector('.dashboardWidgets');
    const recipesApp = document.querySelector('.recipesApp');
    const scheduleApp = document.querySelector('.schedulesApp');
    const dashboardShoppingList = document.querySelector('.dashboardShoppingList');

    const homeLink = document.getElementById('home-link');          //FirstEntry or Widgets
    const recipesLink = document.getElementById('recipes-link');        //Przepisy
    const schedulesLink = document.getElementById('schedules-link');        //Plany
    const shoppingListLink = document.getElementById('shoppingList-link');      //Lista zakupów

    // checking if userName is in local storage
    if (localStorage.getItem('providedName') != null) {

        //set user name
        nameDisplay.innerText = localStorage.getItem('providedName');

        // show widgets section
        dashboardWidgets.style.display = 'block';

        // hide everything else
        dashboardFirstEntry.style.display = 'none';
        recipesApp.style.display = 'none';
        scheduleApp.style.display = 'none';
        dashboardShoppingList.style.display = 'none';

    } else {
        console.warn('Brak klucza providedName!');

        //hide other navigation elements for new user
        recipesLink.style.display = 'none';
        schedulesLink.style.display = 'none';
        shoppingListLink.style.display = 'none';

        dashboardWidgets.style.display = 'none';
        recipesApp.style.display = 'none';
        scheduleApp.style.display = 'none';
        dashboardShoppingList.style.display = 'none';
    }

    // ----- PULPIT -----
    homeLink.addEventListener('click', function () {

        recipesApp.style.display = 'none';
        scheduleApp.style.display = 'none';
        dashboardShoppingList.style.display = 'none';


        if (localStorage.getItem('providedName') != null) {
            dashboardFirstEntry.style.display = 'none';
            dashboardWidgets.style.display = 'block';


        } else {
            dashboardFirstEntry.style.display = 'block';
            dashboardWidgets.style.display = 'none';
        }

        //change link to state active
        homeLink.parentElement.classList.add('is-active');
        recipesLink.parentElement.classList.remove('is-active');
        schedulesLink.parentElement.classList.remove('is-active');
        shoppingListLink.parentElement.classList.remove('is-active');
    });

    // ----- PRZEPISY -----
    recipesLink.addEventListener('click', function () {

        dashboardFirstEntry.style.display = 'none';
        dashboardWidgets.style.display = 'none';
        recipesApp.style.display = 'block';
        scheduleApp.style.display = 'none';
        dashboardShoppingList.style.display = 'none';

        //change link to state active
        homeLink.parentElement.classList.remove('is-active');
        recipesLink.parentElement.classList.add('is-active');
        schedulesLink.parentElement.classList.remove('is-active');
        shoppingListLink.parentElement.classList.remove('is-active');
    });

    // ----- PLANY -----
    schedulesLink.addEventListener('click', function () {

        dashboardFirstEntry.style.display = 'none';
        dashboardWidgets.style.display = 'none';
        recipesApp.style.display = 'none';
        dashboardShoppingList.style.display = 'none';
        scheduleApp.style.display = 'block';
        dashboardShoppingList.style.display = 'none';

        //change link to state active
        homeLink.parentElement.classList.remove('is-active');
        recipesLink.parentElement.classList.remove('is-active');
        schedulesLink.parentElement.classList.add('is-active');
        shoppingListLink.parentElement.classList.remove('is-active');
    });


    // ----- LISTA ZAKUPÓW -----
    shoppingListLink.addEventListener('click', function () {

        dashboardFirstEntry.style.display = 'none';
        dashboardWidgets.style.display = 'none';
        recipesApp.style.display = 'none';
        scheduleApp.style.display = 'none';
        dashboardShoppingList.style.display = 'block';

        //change link to state active
        homeLink.parentElement.classList.remove('is-active');
        recipesLink.parentElement.classList.remove('is-active');
        schedulesLink.parentElement.classList.remove('is-active');
        shoppingListLink.parentElement.classList.add('is-active');
    });

    //-------------------------------------------------------------------------------------
    // ----- END: BASIC LOGIC FOR NAVIGATION -----
    //-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//feature/2.3-name_localStorage START by MN
//-------------------------------------------------------------------------------------

    // console.clear();
    // localStorage.clear();
    const userNameInput = document.querySelector('.addName__form-input');
    const form = document.querySelector('.addName__form');
    const firstEntry__content = document.querySelector('.firstEntry__content');
    //const usersNames = []; //array to keep name of users that submitted form
    //localStorage.setItem('providedName', usersNames); //saving info from Array into Local Storage under name 'providedName' //array is changed into string

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        //checking if value exists in local storage
        if (localStorage.getItem('providedName') == null) {
            localStorage.setItem('providedName', userNameInput.value);
        }

        nameDisplay.innerText = userNameInput.value;
        dashboardFirstEntry.style.display = 'none';
        dashboardWidgets.style.display = 'block';

        //show others navigation element for logged user
        recipesLink.style.display = 'block';
        schedulesLink.style.display = 'block';
        shoppingListLink.style.display = 'block';

    });

    //-------------------------------------------------------------------------------------
    //feature/2.3-name_localStorage END by MN
    //-------------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------------
    // ----- START: WIDGET LOGIC #3 -----
    //-------------------------------------------------------------------------------------

    // ---- MODAL SHOW/HIDE -----
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const addScheduleBtn = document.getElementById('addScheduleBtn');
    const recipeModal = document.getElementById("recipeModal");
    const scheduleModal = document.getElementById("scheduleModal");

    addRecipeBtn.addEventListener('click', function () {
        recipeModal.style.display = 'block';
    });

    addScheduleBtn.addEventListener('click', function () {
        scheduleModal.style.display = 'block';
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === recipeModal) {
            recipeModal.style.display = "none";
            //clear all recipes inputs and lists
            clearRecipesInputs();
        }
        if (event.target === scheduleModal) {
            scheduleModal.style.display = "none";
        }
    }
    // ---------------------------------------

    // ----- NOTIFICATION CLOSE FUNCTION -----
    const infoClose = document.getElementById('info__close');
    const warningClose = document.getElementById('warning__close');
    const successClose = document.getElementById('success__close');

    const infoMessage = document.querySelector('.info');
    const warningMessage = document.querySelector('.warning');
    const successMessage = document.querySelector('.success');

    infoClose.addEventListener('click', function () {
        infoMessage.style.display = 'none';
    });

    warningClose.addEventListener('click', function () {
        warningMessage.style.display = 'none';
    });

    successClose.addEventListener('click', function () {
        successMessage.style.display = 'none';
    });
    // ---------------------------------------


    //-------------------------------------------------------------------------------------
    // ----- END: WIDGET LOGIC #3 -----
    //-------------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------------
    // ----- START: ADD NEW RECIPE FUNCTION #4.2 -----
    //-------------------------------------------------------------------------------------

    // constructor function for recipe
    const Recipe = function (name, description, instructions, ingredients) {
        this.name = name;
        this.description = description;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }

    // metoda do dodania nowego przepisu do local storage #4.2
    const addRecipeToLocalStorage = (name, description, instructions, ingredients) => {

        const recipe = new Recipe(name, description, instructions, ingredients);        //stworzenie nowego obiektu(przepisu) wg funkcji konstruktora Recipe

        if (localStorage.getItem('recipes') == null) {                  //jeżeli pod klucz 'recipes' w localStorage nie został przypisany jeszcze żaden przepis
            const recipes = [];                                             //tworzy tablicę i wrzuca tam przepis
            recipes.push(recipe)
            localStorage.setItem('recipes', JSON.stringify(recipes));       //zamiana tablicy na json(tekst) i zapisanie w local storage

        } else {
            const recipes = JSON.parse(localStorage.getItem('recipes'));        //do zmiennej recipes pobiera zawartość local storage , po pobraniu json jest parsowany i zamieniany na tablice obiektów
            recipes.push(recipe);                                                   //dodanie nowego obiektu przepisu do tablicy obiektów
            localStorage.setItem('recipes', JSON.stringify(recipes));               //aktualizacja tablicy z przepisami, zamiana tablicy na json(tekst) i zapisanie w local storage
        }

    }

    const refreshRecipesCount = () => {
        const infoText = document.querySelector('.info__text');

        if (localStorage.getItem('recipes') !== null) {

            const recipes = JSON.parse(localStorage.getItem('recipes'));

            if (recipes.length === 1) {
                infoText.innerHTML = `Masz już ${recipes.length} przepis, nieźle!`;

            } else if (recipes.length >= 2 && recipes.length <= 4) {
                infoText.innerHTML = `Masz już ${recipes.length} przepisy, nieźle!`;

            } else {
                infoText.innerHTML = `Masz już ${recipes.length} przepisów, nieźle!`;
            }
            infoMessage.style.display = 'flex';

        } else {
            infoMessage.style.display = 'none';
        }
    }
    refreshRecipesCount();


    //-------------------------------------------------------------------------------------
    //just checking if it works START - for feature 4.1 and 4.2
    //-------------------------------------------------------------------------------------

    const recipeNameLocation = document.querySelector('.recipeNameInput');
    const recipeDescLocation = document.querySelector('.recipeDescInput');
    const instructionList = document.querySelector('.instructionList__content');
    const instructionListElems = instructionList.children;
    const ingredientsList = document.querySelector('.ingredientsList__content');
    const ingredientsListElems = ingredientsList.children;
    const saveRecipe = document.querySelector('.recipeSaveAndAdd');
    const newInstruction = document.querySelector('.instructionTextInput');
    const instructionAddBtn = document.querySelector('.instructionAdd');
    const newIngredient = document.querySelector('.ingredientsTextInput');
    const ingredientAddBtn = document.querySelector('.ingredientsAdd')

    // ----- ALL CLEAR FUNCTION -----
    const clearRecipesInputs = () => {

        recipeNameLocation.value = '';
        recipeDescLocation.value = '';
        instructionList.innerHTML = '';
        ingredientsList.innerHTML = '';
    }
    // ----------------------------------

    saveRecipe.addEventListener('click', function (e) {
        e.preventDefault();

        //block submit empty form
        if (instructionList.innerHTML === '' || ingredientsList.innerHTML === '' || recipeNameLocation.value === '' || recipeDescLocation.value === '') {
            alert('Proszę wypełnić wszystkie pola');
            return;
        }

        console.log(recipeNameLocation.value);
        console.log(recipeDescLocation.value);
        const instructions = [];
        Array.from(instructionListElems).forEach(elem => {
            instructions.push(elem.innerText);
        })
        console.log(instructions);

        const ingredients = [];
        Array.from(ingredientsListElems).forEach(elem => {
            ingredients.push(elem.innerText);
        })
        console.log(ingredients);

        //add recipe to local storage and refresh recipes count
        addRecipeToLocalStorage(recipeNameLocation.value, recipeDescLocation.value, instructions, ingredients);
        refreshRecipesCount();

        //close modal window
        recipeModal.style.display = "none";

        //clear all recipes inputs and lists
        clearRecipesInputs();

    });

    instructionAddBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (newInstruction.value === '') {
            alert('Wprowadź instrukcję');
            return;
        }

        const newInstructionElem = `<li>${newInstruction.value} <span> <i class="fas fa-edit" style="cursor: pointer"></i> <i class="far fa-trash-alt" style="cursor: pointer"></i></span></li>`
        instructionList.innerHTML += newInstructionElem;

        newInstruction.value = '';
        newInstruction.focus();
    });

    ingredientAddBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (newIngredient.value === '') {
            alert('Dodaj składnik');
            return;
        }

        const newIngredientElem = `<li>${newIngredient.value} <span> <i class="fas fa-edit" style="cursor: pointer"></i> <i class="far fa-trash-alt" style="cursor: pointer"></i></span></li>`
        ingredientsList.innerHTML += newIngredientElem;

        newIngredient.value = '';
        newIngredient.focus();
    });

    const allForms = document.querySelectorAll('form');
    console.log(allForms);
    Array.from(allForms).forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault()
        })
    });

    //-------------------------------------------------------------------------------------
    // ----- END: ADD NEW RECIPE FUNCTION #4.2 -----
    //-------------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------------
    // ----- START: ADD NEW SCHEDULE FUNCTION #6.1 -----
    //-------------------------------------------------------------------------------------

    const planName = document.getElementById('planNameInput');              //nazwa planu
    const planDescription = document.getElementById('planDescInput');       //opis planu
    const weekNumber = document.getElementById('planWeekInput');            //numer tygodnia
    const savePlan = document.querySelector('.planSaveAndAdd');

// ----- CLEAR STUFF FUNCTION -----
    const clearPlanInputs = () => {
        planName.value = '';
        planDescription.value = '';
        weekNumber.value = '';
    }
// ----------------------------------


    savePlan.addEventListener('click', function (e) {
        e.preventDefault();
        //block submit empty form
        if (planName.value === '' || planDescription.value === '' || weekNumber.value === '') {
            alert('Proszę wypełnić wszystkie pola.');
            return;
        }

        //close modal window
        scheduleModal.style.display = "none";

        //clear all recipes inputs and lists
        clearPlanInputs();

    });


    //
    //
    //     // metoda dodania nowego planu do local storage
    //     const Schedule = function (name, description, weekNr, days) {
    //         this.name = name;
    //         this.description = description;
    //         this.weekNr = weekNr;
    //         this.days = days;
    //     }
    //
    //     const addSchedule = () => {}

    //-------------------------------------------------------------------------------------
    // ----- END: ADD NEW SCHEDULE FUNCTION #6.1 -----
    //-------------------------------------------------------------------------------------


})