async function fetchCatImg(){
    try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        const catImageUrl = data[0].url;

        document.getElementById("catImg").src = catImageUrl;

    }catch(error){
        console.error("Error al obtener la imagen del gatito :(", error);
    }

}
window.onload = fetchCatImg;

