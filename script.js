const VideoSeater =document.querySelector(".row");

function renderVideos(datum){
    let Videocolumn = document.createElement("div")
    Videocolumn.setAttribute("class","col-md-6 col-lg-4 col-xs-12")
    Videocolumn.innerHTML += `
    <div class="card" >
        
        <iframe id="existing-iframe-example"
        src="https://www.youtube.com/embed/${datum.id.videoId}?enablejsapi=1"
        frameborder="0"></iframe>
        <div class="card-body">
        <h5 class="card-title">${datum.snippet.title}</h5>
        <p class="card-text">${datum.snippet.channelTitle}</p>
  </div>
    </div>
    `
    VideoSeater.append(Videocolumn)
}


document.querySelector("#searchGo").addEventListener("click",()=>{
    VideoSeater.innerHTML=""
    let Usersearch = document.querySelector("#searchbar").value;
    const SearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=AIzaSyDnsn3roe6g6MTdBGwnFCRxfbXDlb0771k&q=${Usersearch}`
    fetch(SearchUrl)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        const videos = data.items;
        console.log(videos)
        for(var i of videos){
            console.log(i)
            renderVideos(i);
        }
    })
    .catch((error)=>console.log(error))
})

/////search function was done




