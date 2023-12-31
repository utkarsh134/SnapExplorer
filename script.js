

const access_key = "xAmyoQVLqYAkbu8p2jBEb1mIzgHZ_4bSCVEdmZokpLU" ;

const browse = document.getElementById('browse') ;
const resultBox = document.querySelector('.results') ;
const showMore = document.getElementById('show-more-btn')


let keywords = "" ;
let page = 1 ;
let input = document.getElementById('input') ;
input.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        e.preventDefault() ;
        browse.click() ;
    }
})

async function searchImages(){

    keywords = input.value ;
    if(page === 1) {
        resultBox.innerHTML = "" ;
    }
    // input.value = "Yeah, It is Working"
    if(keywords.length != 0){
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${access_key}&per_page=16`
    let response = await fetch(url) ;
    let data = await response.json() ;
    // console.log(data.results) ;

    // console.log(data.results.length) ;

    (data.results).map((result)=>{
        // console.log(element) ;

        let newImage = document.createElement('img') ;
        newImage.src = result.urls.small ;
        const imageLink = document.createElement('a') ;
        imageLink.href = result.links.html ;
        imageLink.target = "_blank" ;
        imageLink.appendChild(newImage) ;

        resultBox.appendChild(imageLink) ;

        // let photosArr = element.photos ;
        // photosArr.forEach((arrayElement) =>{
        //     let newImg = document.createElement('img') ;
        //     let source = `${arrayElement.urls.small}` ;
        //     newImg.src = `${source}` ;
        //     results.appendChild(newImg) ;
        // })
    })
    showMore.style.display = "block" ;
}

}

browse.addEventListener('click', (e)=>{
    page = 1 ;
    showMore.style.display = "none" ;
    searchImages() ;
}) ;

showMore.addEventListener('click', ()=>{
    page++ ;
    searchImages() ;
})

