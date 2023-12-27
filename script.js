
const access_key = "xAmyoQVLqYAkbu8p2jBEb1mIzgHZ_4bSCVEdmZokpLU" ;

const browse = document.getElementById('browse') ;
const results = document.querySelector('.results') ;

browse.addEventListener('click', searchImages) ;

async function searchImages(){
    const input = document.getElementById('input') ;
    const url = `https://api.unsplash.com/search/users?page=1&query=${input.value}&client_id=${access_key}`
    let newImg = document.createElement('img') ;

    const response = await fetch(url) ;
    const data = await response.json() ;
    console.log(data) ;

    // data.results.map((ele)=>{
    //     let newImg = document.createElement('img') ;
    //     newImg.src = elem
    // })

}