async function getmeals(){
    let mealsresponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    mealdata = await mealsresponse.json()
    meals = mealdata.categories
    displaydata(meals)
}
getmeals()
function displaydata(meals){
    cartona=``
    for(let i=0 ; i< meals.length ;i++){
        cartona +=`
        <div class="col-md-3">
                    <div onclick=getmealsdata('${meals[i].strCategory}') class="meal rounded-2">
                    <img src="${meals[i].strCategoryThumb}" class="w-100" alt="">
                    <div class="slideUp rounded-2">
                        <h2>${meals[i].strCategory}</h2>
                        <p>${meals[i].strCategoryDescription.substr(1,130)}</p>
                    </div>
                </div>
                </div>

        `
    }
    document.getElementById('cartona').innerHTML=cartona;
}
function displaycategoryclick(categories){
    cartona=``
    for(let i=0 ; i< categories.length ;i++){
        cartona +=`
        <div onclick=getmealsdetails('${categories[i].idMeal}') class="sora col-md-3">
        <div class="meal rounded-2">
        <img src="${categories[i].strMealThumb}" class=" image-meal w-100" alt="">
        <div class="slideUpword">
            <h2>${categories[i].strMeal}</h2>
        </div>
    </div>
    </div>
        `
    }
    document.getElementById('cartona').innerHTML=cartona;
}

async function getmealsdata(typemeal){
    let mealsresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${typemeal}`)
    mealdata = await mealsresponse.json()
    categories = mealdata.meals
    displaycategoryclick(categories)

}


function displaydetailsclick(categoriess){
    cartona=``
    for(let i=0 ; i< categoriess.length ;i++){
        cartona +=`
        <div class="col-md-4">
        <img src="${categoriess[i].strMealThumb}" class="details w-100" alt="">
        <h2>${categoriess[i].strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${categoriess[i].strInstructions}</p>
        <h3>Area : <span>${categoriess[i].strArea}</span></h3>
        <h3>Category : <span>${categoriess[i].strCategory}</span></h3>
        <h3>Recipes : </h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient1}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient2}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient3}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient4}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient5}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient6}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient7}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient8}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient9}</li>
        <li class="alert alert-info m-2 p-1">${categories[i].strIngredient10}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        
            <li class="alert alert-danger m-2 p-1">${categoriess[i].strTags}</li>
         </ul>
         <a target="_blank" href="${categoriess[i].strSource}" class="btn btn-success">Source</a>
         <a target="_blank" href="${categoriess[i].strYoutube}" class="btn btn-danger">Youtube</a>


    </div>
        `
    }
    document.getElementById('cartona').innerHTML=cartona;
}

async function getmealsdetails(idmeal){
    let mealsresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
    mealdata = await mealsresponse.json()
    categoriess = mealdata.meals
    displaydetailsclick(categoriess)

}




$(".closeIcon").on("click", function () {
    $("#menu").animate({ width: "toggle" }, 500);
    $("#menu").css("display", "flex");
    $(".close").toggleClass("fa-solid fa-bars fa-2x");
    $(".close").toggleClass("fa-solid open-close-icon fa-2x fa-x");
  });
$(function(){
    $('.loader').fadeOut(1500 , function(){
        $('.loading').fadeOut(1500 , function(){

            $("body").css('overflow' , 'auto');
            $('.loading').remove()
        })

    })
})