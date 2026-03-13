
const anime=[
{title:"Attack on Titan",img:"https://cdn.myanimelist.net/images/anime/10/47347.jpg"},
{title:"Jujutsu Kaisen",img:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg"},
{title:"Demon Slayer",img:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"},
{title:"Solo Leveling",img:"https://cdn.myanimelist.net/images/anime/1823/143097.jpg"}
]

const apps=[
{name:"Aniyomi",img:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Android_robot.png"},
{name:"Crunchyroll",img:"https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png"},
{name:"Netflix",img:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}
]

const grid=document.getElementById("animeGrid")
const appsGrid=document.getElementById("appsGrid")
const watchGrid=document.getElementById("watchlistGrid")

let watchlist=[]

function card(item,isAnime=true){

const el=document.createElement("div")
el.className="card"

el.innerHTML=`
<img src="${item.img}">
<div class="card-body">
<h3>${item.title||item.name}</h3>
${isAnime?'<button>Add Watchlist</button>':''}
</div>
`

if(isAnime){
el.querySelector("button").onclick=()=>{
watchlist.push(item)
renderWatch()
}
}

return el

}

anime.forEach(a=>grid.appendChild(card(a,true)))
apps.forEach(a=>appsGrid.appendChild(card(a,false)))

function renderWatch(){
watchGrid.innerHTML=""
watchlist.forEach(a=>watchGrid.appendChild(card(a,false)))
}

const search=document.getElementById("search")

search.addEventListener("input",()=>{

const val=search.value.toLowerCase()

grid.innerHTML=""

anime.filter(a=>a.title.toLowerCase().includes(val))
.forEach(a=>grid.appendChild(card(a,true)))

})


let slides=document.querySelectorAll(".slide")
let dots=document.querySelectorAll(".dot")
let index=0

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"))
dots.forEach(d=>d.classList.remove("active"))

slides[i].classList.add("active")
dots[i].classList.add("active")

}

setInterval(()=>{

index++

if(index>=slides.length) index=0

showSlide(index)

},4000)

dots.forEach((dot,i)=>{

dot.onclick=()=>{

index=i
showSlide(index)

}

})
