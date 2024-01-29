
async function getmeals(){
    let mealsresponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    mealdata = await mealsresponse.json()
    meals = mealdata.meals
    return meals;
}

function displaydata(finaldata){
    cartona=``
    for(let i=0 ; i< finaldata.length ;i++){
        cartona +=`
        <div onclick=getmealsdata('${finaldata[i].idMeal}') class="sora col-md-3">
        <div class="meal rounded-2">
        <img src="${finaldata[i].strMealThumb}" class=" image-meal w-100" alt="">
        <div class="slideUp">
            <h2>${finaldata[i].strMeal}</h2>
        </div>
    </div>
    </div>
        `
    }
    document.getElementById('cartona').innerHTML=cartona;
}

async function start(){
    try{
        let finaldata = await getmeals()
        displaydata(finaldata)
    } catch (error){

        console.error(error);
    }
}
start()


function displaydetailsclick(categories){

    cartona=``
    for(let i=0 ; i< categories.length ;i++){
        cartona +=`
        <div class="col-md-4">
        <img src="${categories[i].strMealThumb}" class="details w-100" alt="">
        <h2>${categories[i].strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${categories[i].strInstructions}</p>
        <h3>Area : <span>${categories[i].strArea}</span></h3>
        <h3>Category : <span>${categories[i].strCategory}</span></h3>
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
        
            <li class="alert alert-danger m-2 p-1">${categories[i].strTags}</li>
         </ul>
         <a target="_blank" href="${categories[i].strSource}" class="btn btn-success">Source</a>
         <a target="_blank" href="${categories[i].strYoutube}" class="btn btn-danger">Youtube</a>


    </div>
        `
    }
    document.getElementById('cartona').innerHTML=cartona;
}

async function getmealsdata(idmeal){
    let mealsresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
    mealdata = await mealsresponse.json()
    categories = mealdata.meals
    displaydetailsclick(categories)

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
