
counter=0
let songarray=[
    
        {names:"Tujhe Sochta Hu",ref:new Audio('song1.mp3'),cover:'https://i.ytimg.com/vi/ybFzlvrNw6o/maxresdefault.jpg'},
        {names:"Bhula Dena",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Aashiqui 2/Bhula Dena.mp3'),cover:'https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg'},
        {names:"Darkhast",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Shivaay/Darkhaast (Shivaay) 128 Kbps.mp3'),cover:"https://i.ytimg.com/vi/LMnJp_dSdnw/maxresdefault.jpg"},
        {names:"Tera Zikr",ref:new Audio('https://pwdown.com/12829/Tera Zikr - Darshan Raval 320Kbps.mp3'),cover:"https://i.ytimg.com/vi/eK0IIyBlYew/maxresdefault.jpg"},
        {names:"Libaas",ref:new Audio('https://cdn.pagalworld.us/songs/new/192/Libaas - Kaka.mp3'),cover:"https://i.ytimg.com/vi/KzHrZVXRvAs/maxresdefault.jpg"},
        {names:"Kun Faya Kun",ref:new Audio('https://pwdown.com/112646/04. Kun Faya Kun.mp3'),cover:"https://img.pagalworld.icu/Kun%20Faaya%20Kun-4073-sd.jpg"},
        {names:"Excuses",ref:new Audio('https://pwdown.com/113510/Excuses - Ap Dhillon.mp3'),cover:"https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg"},
        {names:"We Rollin",ref:new Audio('https://pwdown.com/113515/We Rollin - Shubh.mp3'),cover:"https://i.ytimg.com/vi/RLhuPD2ASKE/maxresdefault.jpg"}
]
      
      
      // songarray.push({names:"Pushed",ref:new Audio('https://pwdown.com/12829/Tera Zikr - Darshan Raval 320Kbps.mp3'),cover:"https://i.ytimg.com/vi/eK0IIyBlYew/maxresdefault.jpg"})

      songarray.sort(() => Math.random()  - 0.5);

      for(i=0;i<=(songarray.length-1);i++)
{
  namefromsongarray=document.getElementById(`${i}`)
  namefromsongarray.innerHTML=songarray[i].names
}



let adi=document.createElement('img')
adi.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
  
function last(kannu){
    la=kannu
    return la
}
const playimg=document.createElement('img')
playimg.src='play1.png'



let lastplayed=songarray[0].ref
let bhoomika=document.getElementById('playbutton')
let aditya=document.getElementById('pausebutton')

let completed=document.getElementById('completed')
let totaltime=document.getElementById('total')

let progressbar=document.getElementById('progressbar')
progressbar.addEventListener('mouseover',()=>{
    progressbar.title=progressbar.value.currentTime
})


progressbar.style.accentColor="rgb(212, 138, 0)"


minutes=0;

function home()
{

    console.log("HYYYYYYYYYYY") 
    changed=document.getElementById('songlists')
    songlist.innerHTML=
    `
    <style>
    .songs{
      list-style: none;
      margin:25px 3px;
      padding: 10px;
      
  }
  .list{
    background-color: black;
    color: white;
    padding-top: 51px;
    padding-left: 49px;
    width: 50vw;
      
  }
  .songs:hover{
      cursor:pointer;
      
  }
    </style>
    <div id="songlist" class="list">
    <ol>
        
        <li id="0"  class="songs" onclick="start(0)"></li>
        <li id="1"  class="songs" onclick="start(1)"></li>
        <li id="2"  class="songs" onclick="start(2)"></li>
        <li id="3"  class="songs" onclick="start(3)"></li>
        <li id="4"  class="songs" onclick="start(4)"></li>
        <li id="5"  class="songs" onclick="start(5)"></li>
        <li id="6"  class="songs" onclick="start(6)"></li>
        <li id="7"  class="songs" onclick="start(7)"></li>
        <li id="8"  class="songs" onclick="start(8)"></li>
        <li id="9"  class="songs" onclick="start(9)"></li>
        <li id="10" class="songs" onclick="start(10)"></li>
        <li id="11" class="songs" onclick="start(11)"></li>
        <li id="12" class="songs" onclick="start(12)"></li>
        <li id="13" class="songs" onclick="start(13)"></li>
        <li id="14" class="songs" onclick="start(14)"></li>
        <li id="15" class="songs" onclick="start(15)"></li>
        <li id="16" class="songs" onclick="start(16)"></li>
        <li id="17" class="songs" onclick="start(17)"></li>
        <li id="18" class="songs" onclick="start(18)"></li>
        <li id="19" class="songs" onclick="start(19)"></li>
        <li id="20" class="songs" onclick="start(20)"></li>
        <li id="21" class="songs" onclick="start(21)"></li>
        <li id="22" class="songs" onclick="start(22)"></li>
        <li id="23" class="songs" onclick="start(23)"></li>
        <li id="24" class="songs" onclick="start(24)"></li>
        <li id="25" class="songs" onclick="start(25)"></li>
        <li id="26" class="songs" onclick="start(26)"></li>
        <li id="27" class="songs" onclick="start(27)"></li>
        <li id="28" class="songs" onclick="start(28)"></li>
        <li id="29" class="songs" onclick="start(29)"></li>

        
        
    </ol>
</div>

    `
    counter=0
let songarray=[
    
        {names:"Tujhe Sochta Hu",ref:new Audio('song1.mp3'),cover:'https://i.ytimg.com/vi/ybFzlvrNw6o/maxresdefault.jpg'},
        {names:"Bhula Dena",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Aashiqui 2/Bhula Dena.mp3'),cover:'https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg'},
        {names:"Darkhast",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Shivaay/Darkhaast (Shivaay) 128 Kbps.mp3'),cover:"https://i.ytimg.com/vi/LMnJp_dSdnw/maxresdefault.jpg"},
        {names:"Tera Zikr",ref:new Audio('https://pwdown.com/12829/Tera Zikr - Darshan Raval 320Kbps.mp3'),cover:"https://i.ytimg.com/vi/eK0IIyBlYew/maxresdefault.jpg"},
        {names:"Libaas",ref:new Audio('https://cdn.pagalworld.us/songs/new/192/Libaas - Kaka.mp3'),cover:"https://i.ytimg.com/vi/KzHrZVXRvAs/maxresdefault.jpg"},
        {names:"Kun Faya Kun",ref:new Audio('https://pwdown.com/112646/04. Kun Faya Kun.mp3'),cover:"https://img.pagalworld.icu/Kun%20Faaya%20Kun-4073-sd.jpg"},
        {names:"Excuses",ref:new Audio('https://pwdown.com/113510/Excuses - Ap Dhillon.mp3'),cover:"https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg"},
        {names:"We Rollin",ref:new Audio('https://pwdown.com/113515/We Rollin - Shubh.mp3'),cover:"https://i.ytimg.com/vi/RLhuPD2ASKE/maxresdefault.jpg"}
]

songarray.sort(() => Math.random()  - 0.5);

for(i=0;i<=(songarray.length-1);i++)
{
namefromsongarray=document.getElementById(`${i}`)
namefromsongarray.innerHTML=songarray[i].names
}



let adi=document.createElement('img')
adi.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"

function last(kannu){
la=kannu
return la
}
const playimg=document.createElement('img')
playimg.src='play1.png'



let lastplayed=songarray[0].ref
let bhoomika=document.getElementById('playbutton')
let aditya=document.getElementById('pausebutton')

let completed=document.getElementById('completed')
let totaltime=document.getElementById('total')

let progressbar=document.getElementById('progressbar')
progressbar.addEventListener('mouseover',()=>{
progressbar.title=progressbar.value.currentTime
})


progressbar.style.accentColor="rgb(212, 138, 0)"


minutes=0;

function next()
{

    for(i=0;i<=(songarray.length-1);i++)
    {    
         console.log(lastplayed)
         if (songarray[i].ref==lastplayed)
        { 
            j=i+1
            console.log("next")
            console.log(j)
         
                start(j)
            
        }
    }
}



function prev()
{
    for(i=0;i<=(songarray.length-1);i++)
    {
         if (songarray[i].ref==lastplayed)
           { 
              j=i-1
              start(j)

           }
    }
 }


function paused()
{  
    console.log("enter")
    for(i=0;i<=(songarray.length-1);i++)
    {
        if (songarray[i].ref==lastplayed)
        {  
          if(bhoomika.style.opacity==0)
           { console.log("ghhusa")
               songarray[i].ref.pause()
            bhoomika.style.opacity="1"
            aditya.style.opacity="0"
            
           }
           else
          {  console.log("bhkk")
            songarray[i].ref.play()
            bhoomika.style.opacity="0"
            aditya.style.opacity="1"
            
          }
        
        }

        
    }
}




function start(a)
{
counter=1
        
    let song=document.getElementsByClassName('songs')
    

  
    for(i=0;i<=(songarray.length-1);i++)
    {  
      if(a==i)
      { 
   

          id=document.getElementById(`${i}`);
          id.style.backgroundColor='rgb(255, 162, 0)';
          id.style.padding="10px";
          id.style.width="300px";
          adi.remove()
          img=document.createElement('img')
          img.src=songarray[i].cover
          document.querySelector('.currentsong').append(img)
          adi=last(img)
          
          img.style.width=" 470px";
          img.style.height=" 380px";
          for(k=0;k<=7;k++)
          {
              if(k!=i){
                  song[k].style.backgroundColor='black';
               }
           }
           
           for(j=0;j<=7;j++)
            {
           
           
               if(j!=i)
               {
                   songarray[j].ref.pause()
                   console.log(songarray[j])
               }
       
           }
           if(songarray[a].ref!=lastplayed)
         {
           songarray[a].ref.currentTime=0
           songarray[a].ref.play()
           
        
           playbutton.style.opacity="0"
           pausebutton.style.opacity="1"
           
           
          //  pausebutton.style.left="227px"
   
           lastplayed=songarray[a].ref
   
         }
   
         else
         {
           if(songarray[a].ref.paused)
              {
                 songarray[a].ref.play()
                 playbutton.style.opacity="0"
                 pausebutton.style.opacity="1"
               
   
               
               }
           else
              {
               songarray[a].ref.pause()
               playbutton.style.opacity="1"
               pausebutton.style.opacity="0"
   
               
              }
        }
        songarray[a].ref.addEventListener('timeupdate' , ()=>{
          //  console.log("timeupdate");
           //update seek bar
           progress=parseFloat((songarray[a].ref.currentTime/songarray[a].ref.duration)*100);
           progressbar.value=progress;
          
          
           seconds=parseInt(songarray[a].ref.currentTime)
           minutes=Math.floor(parseFloat((seconds/60)))
           
           if(seconds>59)
           {
             seconds=seconds-(minutes*60)

           }

           totalminutes=parseInt(songarray[a].ref.duration/60)
           remainingseconds=parseInt(songarray[a].ref.duration%60)
           
           if(seconds>=10)
           {
           completed.innerHTML=`${minutes}:${seconds}`
           }
           else{
            completed.innerHTML=`${minutes}:0${seconds}`
           }

           if(remainingseconds>10)
           {
             totaltime.innerHTML=`${totalminutes}:${remainingseconds}`
          }
          else
          {
            totaltime.innerHTML=`${totalminutes}:0${remainingseconds}`
          }
        })
        progressbar.addEventListener('change',()=>{
           songarray[a].ref.currentTime=parseFloat(progressbar.value*songarray[a].ref.duration/100);
        })
        
     
       
       
       
      }
    }
}


}

function album()
{  list = document.getElementById('songlist')
  list.innerHTML=  
  
  `
  <style>
  .albumcontainer{
    display: flex;
}
  .album{
    background-color:black;
    color: white;
    margin:30px;
    width:27vw;
    height: 60vh;
    text-align: center;
    /* border: 2px solid red; */
    box-shadow: 4px 4px 10px orange;
    
   
}

.artist{
    position: relative;
    top:15vh;
    font-family: sans-serif;

    font-size: 17px;
}
.artist:hover{
    color: orange;
    text-decoration: underline;
}
.playicon{
    position: relative;
    bottom:12vh;
    left:9vw;
    background-color: rgba(255, 0, 0, 0);
    opacity:  0;
    width:70px;
    height:70px;
}
.cover{
    width:27vw;
     height:40vh;


}
.progressbar
{
  position: relative;
  /* top: -650px; */
  width: 30vw;
  left: 3vw;
  background-color: rgb(0, 0, 0);
}
  </style>
 <div id="songlists">

  <div class="albumcontainer">
      <div id="album0" class="album">
          <img id="cover0" class="cover" src="https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg" >
          <div id="artist0"class="artist">Honey Singh</div>
          <div id="name0" class="name">Raftar</div>
          <img id="playicon0" class="playicon" onclick="clicked(0)"  src="play.png" width="70px" height="70px">
      </div>
      <div id="album1" class="album">
          <img id="cover1" class="cover" src="https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg" >
          <div id="artist1"class="artist">Mika Singh</div>
          <div id="name1" class="name">Bulbul</div>
          <img id="playicon1" class="playicon" onclick="clicked(1)"  src="play.png" width="70px" height="70px">

      </div>

  </div>
  <div  class="albumcontainer">
      <div id="album2" class="album">
          <img id="cover2" class="cover" src="https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg" >
          <div id="artist2"class="artist">Honey Singh</div>
          <div id="name2" class="name">Raftar</div>
          <img id="playicon2" class="playicon" onclick="clicked(2)" src="play.png" width="70px" height="70px">
      </div>
      <div id="album3" class="album">
          <img id="cover3" class="cover" src="https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg" >
          <div id="artist3"class="artist">Mika Singh</div>
          <div id="name3" class="name">Bulbul</div>
          <img id="playicon3" class="playicon" onclick="clicked(3)" src="play.png" width="70px" height="70px">

      </div>

  </div>
  <div class="albumcontainer">
      <div id="album4" class="album">
          <img id="cover4" class="cover" src="https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg" >
          <div id="artist4"class="artist">Honey Singh</div>
          <div id="name4" class="name">Raftar</div>
          <img id="playicon4" class="playicon" onclick="clicked(4)" src="play.png" width="70px" height="70px">
      </div>
      <div id="album5" class="album">
          <img id="cover5" class="cover" src="https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg" >
          <div id="artist5"class="artist">Mika Singh</div>
          <div id="name5" class="name">Bulbul</div>
          <img id="playicon5" class="playicon" onclick="clicked(5)"  src="play.png" width="70px" height="70px">

      </div>
 
  </div>
  <div class="albumcontainer">
      <div id="album6" class="album">
          <img id="cover6" class="cover" src="https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg" >
          <div id="artist6" class="artist">Honey Singh</div>
          <div id="name6" class="name">Raftar</div>
          <img id="playicon6" class="playicon" onclick="clicked(6)" src="play.png" width="70px" height="70px">
      </div>
      <div id="album7" class="album">
          <img id="cover7" class="cover" src="https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg" >
          <div id="artist7" class="artist">Mika Singh</div>
          <div id="name7" class="name">Bulbul</div>
          <img id="playicon7" class="playicon" onclick="clicked(7)" src="play.png" width="70px" height="70px">

      </div>

  </div>
</div>    


`


albumarray=
[
{name:"EXCUSES",artist:"AP DHILLON",cover:"https://yt3.ggpht.com/YIy9K_tD0dFczpAbuaFc0NwZSqkZMdn46X8DdHXxmLyMJNXkNPMpkez5gBFCquulHAzGXQ9S=s900-c-k-c0x00ffffff-no-rj",
songs:[
{sname:"Excuses",ref:new Audio('song1.mp3'),cover:'https://i.ytimg.com/vi/ybFzlvrNw6o/maxresdefault.jpg'},
{sname:"Brown Munde",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Aashiqui 2/Bhula Dena.mp3'),cover:'https://i.ytimg.com/vi/g8LEktKv9hs/maxresdefault.jpg'},
{sname:"Spaceship",ref:new Audio('https://pagalsong.in/uploads/systemuploads/mp3/Shivaay/Darkhaast (Shivaay) 128 Kbps.mp3'),cover:"https://i.ytimg.com/vi/LMnJp_dSdnw/maxresdefault.jpg"},
{sname:"Insane",ref:new Audio('https://pwdown.com/12829/Tera Zikr - Darshan Raval 320Kbps.mp3'),cover:"https://i.ytimg.com/vi/eK0IIyBlYew/maxresdefault.jpg"},
{sname:"Ma belle",ref:new Audio('https://cdn.pagalworld.us/songs/new/192/Libaas - Kaka.mp3'),cover:"https://i.ytimg.com/vi/KzHrZVXRvAs/maxresdefault.jpg"},
{sname:"song6",ref:new Audio('https://pwdown.com/112646/04. Kun Faya Kun.mp3'),cover:"https://img.pagalworld.icu/Kun%20Faaya%20Kun-4073-sd.jpg"},
{sname:"song7",ref:new Audio('https://pwdown.com/113510/Excuses - Ap Dhillon.mp3'),cover:"https://a10.gaanacdn.com/images/albums/4/4729504/crop_480x480_4729504.jpg"},
{sname:"song8",ref:new Audio('https://pwdown.com/113515/We Rollin - Shubh.mp3'),cover:"https://i.ytimg.com/vi/RLhuPD2ASKE/maxresdefault.jpg"}]},

{name:"BOSS",artist:"JASS MANAK", cover:'https://a10.gaanacdn.com/gn_img/artists/jBr3gybR1m/Br3gqB1ObR/size_xl_1645198831.webp'},
{name:"",artist:"KAKA",cover:"https://punjabicelebrities.com/wp-content/uploads/2020/11/kaka-1.jpg"},
{name:"",artist:"Arjit Singh",cover:'https://i.cdn.newsbytesapp.com/images/l37220210424184951.png'},
{name:"",artist:"JASSI GILL",cover:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-s9v490p2bdt71qqsba951pp011-20200128005217.Medi.jpeg"},
{name:"",artist:"Armaan Mallik",cover:"https://rollingstoneindia.com/wp-content/uploads/2021/12/Armaan-Malik-960x1440.jpeg"},
{name:"",artist:"Rahat Fateh Ali Khan",cover:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/rahat_fateh_ali_khan.jpeg?ifC96m2YTHB.Echrfbxr6YVVc7vPZECR"},
// songs:{name:"Excuses",cover:"",ref:""}

{name:"",artist:"B-Praak",cover:"https://yt3.ggpht.com/ytc/AKedOLRZKRZIuT6jN3ugK7FcUk6Tn4M72azp31UngOyR=s900-c-k-c0x00ffffff-no-rj"},

]


for (i=0;i<=7;i++)
{
const  artist=document.getElementById(`artist${i}`)
 const   cover=document.getElementById(`cover${i}`)
const  album=document.getElementById(`album${i}`)
const icon=document.getElementById(`playicon${i}`)

album.addEventListener('mouseover',()=>{
          icon.style.opacity="1"
          icon.style.transition="1s"
})
album.addEventListener('mouseleave',()=>{
    icon.style.opacity="0"
})


  

  cover.src=albumarray[i].cover
  cover.style.height="300px"
  cover.style.width="350px"
  
artist.innerHTML=albumarray[i].name

}


}

function clicked(c)
{
           songlist.innerHTML=

          `<style>     
             body{
            background-color: rgb(0, 0, 0);
        }
     .albumlist{
        background-color: black;
        color: white;
        width: 45vw;
        font-size: 20px;
        margin: 40px;
        box-shadow: 1px 1px 10px rgb(85, 85, 85);
        padding: 10px;
        
     }
     .albumlist:hover{
        color: orange;
        cursor: pointer;
     }

        #imagecontainer{
            display: flex;
            flex-direction: column;
            height:60vh;
            background-color: rgb(0, 0, 0);
            width:50vw;
            align-items: center;
            justify-content: center;
            margin-top: 12vh;

        }
        #artist{
            background-color: rgb(255, 51, 0);
            color: white;
            display: inline;
            height: 100px;
            width: 50vw;
            text-align: center;
        font-size: 50px;
        background-color: rgba(0, 0, 0, 0.735);
        /* width:100px ; */
        color: rgb(255, 255, 255);
        position: relative;
        bottom: 105px;
        padding-bottom: 49px;
        margin-left: 6vw;;
        
        


            
        }
        ol{
            /* list-style: none; */
        }
        #cover{
                 width: 50vw;
                 height:65vh;
                 margin-left: 6vw;
        }
    </style>
</head>
<body>
    
    <div>
        <div id="imagecontainer">
            <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-s9v490p2bdt71qqsba951pp011-20200128005217.Medi.jpeg" id="cover">
            <!-- <span id="artist">AP Dhillonerf</span> -->
            <span id="artist" class="artist1">Rahat Fateh Ali Khan</span>
        </div>
        <div>
            <ol>
                <li id="artistsong0" class="albumlist" onclick="playsong(0)">Ex</li>
                <li id="artistsong1" class="albumlist" onclick="playsong(1)">CUU</li>
                <li id="artistsong2" class="albumlist" onclick="playsong(2)">LAMBO</li>
                <li id="artistsong3" class="albumlist" onclick="playsong(3)">CAR</li>
                <li id="artistsong4" class="albumlist" onclick="playsong(4)">DUSTER</li>
                <li id="artistsong5" class="albumlist" onclick="playsong(5)">FERRARI</li>
                <li id="artistsong6" class="albumlist" onclick="playsong(6)">FERRARI</li>

            </ol>
        </div>
    </div>`


           cover=document.getElementById('cover')
           cover.src=albumarray[c].cover

           artistname=document.getElementById('artist')
           artistname.innerHTML=albumarray[c].artist

           for (i=0;i<=5;i++)
           { 
             const  song=document.getElementById(`artistsong${i}`)
             song.innerHTML=albumarray[c].songs[i].sname
             
            }
     



}

function playsong(k)

{
    console.log(k)
     const  song= document.getElementById(`artistsong${a}`);
     song.style.backgroundColor="rgb(245, 151, 0)";
     song.style.color="white";
     song.style.borderRadius="8px"
     albumarray[c].songs[k].ref.play()
}


function next()
{

    for(i=0;i<=(songarray.length-1);i++)
    {    
         console.log(lastplayed)
         if (songarray[i].ref==lastplayed)
        { 
            j=i+1
            console.log("next")
            console.log(j)
         
                start(j)
            
        }
    }
}



function prev()
{
    for(i=0;i<=(songarray.length-1);i++)
    {
         if (songarray[i].ref==lastplayed)
           { 
              console.log(i)
              j=i-1
              start(j)
              console.log("prev")

           }
    }
 }


function paused()
{  
    console.log("enter")
    for(i=0;i<=(songarray.length-1);i++)
    {
        if (songarray[i].ref==lastplayed)
        {  
          if(bhoomika.style.opacity==0)
           { console.log("ghhusa")
               songarray[i].ref.pause()
            bhoomika.style.opacity="1"
            aditya.style.opacity="0"
            
           }
           else
          {  console.log("bhkk")
            songarray[i].ref.play()
            bhoomika.style.opacity="0"
            aditya.style.opacity="1"
            
          }
        
        }

        
    }
}




function start(a)
{
counter=1
console.log("start",a)           
    let song=document.getElementsByClassName('songs')
    

  
    for(i=0;i<=(songarray.length-1);i++)
    {  
      if(a==i)
      { 
   

          id=document.getElementById(`${i}`);
          id.style.backgroundColor='rgb(255, 162, 0)';
          id.style.padding="10px";
          id.style.width="300px";
          adi.remove()
          img=document.createElement('img')
          img.src=songarray[i].cover
          document.querySelector('.currentsong').append(img)
          adi=last(img)
          
          img.style.width=" 470px";
          img.style.height=" 380px";
          for(k=0;k<=7;k++)
          {
              if(k!=i){
                  song[k].style.backgroundColor='black';
               }
           }
           
           for(j=0;j<=7;j++)
            {
           
           
               if(j!=i)
               {
                   songarray[j].ref.pause()
                   console.log(songarray[j])
               }
       
           }
           if(songarray[a].ref!=lastplayed)
         {
           songarray[a].ref.currentTime=0
           songarray[a].ref.play()
           
        
           playbutton.style.opacity="0"
           pausebutton.style.opacity="1"
           
           
          //  pausebutton.style.left="227px"
   
           lastplayed=songarray[a].ref
   
         }
   
         else
         {
           if(songarray[a].ref.paused)
              {
                 songarray[a].ref.play()
                 playbutton.style.opacity="0"
                 pausebutton.style.opacity="1"
               
   
               
               }
           else
              {
               songarray[a].ref.pause()
               playbutton.style.opacity="1"
               pausebutton.style.opacity="0"
   
               
              }
        }
        songarray[a].ref.addEventListener('timeupdate' , ()=>{
          //  console.log("timeupdate");
           //update seek bar
           progress=parseFloat((songarray[a].ref.currentTime/songarray[a].ref.duration)*100);
           progressbar.value=progress;
          
          
           seconds=parseInt(songarray[a].ref.currentTime)
           minutes=Math.floor(parseFloat((seconds/60)))
           
           if(seconds>59)
           {
             seconds=seconds-(minutes*60)

           }

           totalminutes=parseInt(songarray[a].ref.duration/60)
           remainingseconds=parseInt(songarray[a].ref.duration%60)
           
           if(seconds>=10)
           {
           completed.innerHTML=`${minutes}:${seconds}`
           }
           else{
            completed.innerHTML=`${minutes}:0${seconds}`
           }

           if(remainingseconds>10)
           {
             totaltime.innerHTML=`${totalminutes}:${remainingseconds}`
          }
          else
          {
            totaltime.innerHTML=`${totalminutes}:0${remainingseconds}`
          }
        })
        progressbar.addEventListener('change',()=>{
           songarray[a].ref.currentTime=parseFloat(progressbar.value*songarray[a].ref.duration/100);
        })
        
     
       
       
       
      }
    }
}
