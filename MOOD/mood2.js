function back()
{
    window.history.go(-1)
}

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
  const albumname=document.getElementById(`name${i}`)
   const   cover=document.getElementById(`cover${i}`)
  const  album=document.getElementById(`album${i}`)
  const icon=document.getElementById(`playicon${i}`)
  const songlist=document.getElementById(`songlist`)

  album.addEventListener('mouseover',()=>{
            icon.style.opacity="1"
            icon.style.transition="0.5s"
  })
  album.addEventListener('mouseleave',()=>{
      icon.style.opacity="0"
  })




    

    cover.src=albumarray[i].cover
    cover.style.height="300px"
    cover.style.width="350px"
    
artist.innerHTML=albumarray[i].artist
albumname.innerHTML=albumarray[i].name
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
     


     function playsong(k)
     {
          const  song= document.getElementById(`artistsong${a}`);
          song.style.backgroundColor="rgb(245, 151, 0)";
          song.style.color="white";
          song.style.borderRadius="8px"
          albumarray[c].songs[k].ref.play()
     }
       }
    
    




