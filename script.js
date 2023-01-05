let count = 0;
function playlistcreate (){
    let Elementlink =document.querySelector(".Addtoplaylist").value

    let linkcover = document.createElement("div")
    document.querySelector("#Playlist").appendChild(linkcover)
    let element = document.createElement("a")
    element.setAttribute("href",Elementlink)
    count++;
    element.textContent=count+":"+Elementlink;
    linkcover.append(element)
    
 }



const VideoSeater =document.querySelector(".row");

function renderVideos(datum){  //function to display results of video/playlist  and   channel-info included
    let Videocolumn = document.createElement("div")
    Videocolumn.setAttribute("class","col-md-6 col-lg-4 col-xs-12")
    Videocolumn.innerHTML += `
    <div class="card" >
        
        <iframe id="existing-iframe-example"
        src=""
        frameborder="0"></iframe>
        <div class="card-body">
        <h5 class="card-title">${datum.snippet.title}</h5>
        <p class="card-text">${datum.snippet.channelTitle}</p>
        
        <button type="button" onclick="playlistcreate ()" value="https://www.youtube.com/embed/${datum.id.videoId}?enablejsapi=1" class="Addtoplaylist">Add to Playlist</button>
        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
        Channel-Info
        </button>
        <div class="dropdown-menu">
            <p class="dropdown-item" href="#">Channel Name: ${datum.snippet.channelTitle}</p>
            <p class="dropdown-item" href="#">Description: ${datum.snippet.description}</p>
             <p class="dropdown-item" href="#">Channel Id:${datum.snippet.channelId}</p>
        </div>

  </div>
    </div>
    `
    VideoSeater.append(Videocolumn)
}


document.querySelector("#searchGo").addEventListener("click",()=>{  //event to show results
    VideoSeater.innerHTML=""
    let Usersearch = document.querySelector("#searchbar").value;
    const SearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=AIzaSyDnsn3roe6g6MTdBGwnFCRxfbXDlb0771k&q=${Usersearch}`
    fetch(SearchUrl)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        const videos = data.items;

        
        for(var i of videos){
            renderVideos(i);
        }
    })
    
    .catch((error)=>console.log(error))
})

/////search function was done
//// info was also done with the same request

     