let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let API_key = "6d83156e4e40ca97d0c6924b832fe00c";
  
 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        // alert("Please Enter Location")
        image.src="400.PNG";
        city.innerHTML="";
        temp.innerHTML="Enter location";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        // alert("Please Enter Write Location")
        image.src="404.PNG";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="https://media4.giphy.com/media/Ws5qaQsbskvt0McqQg/200w.webp?cid=ecf05e47tdixy9oy7xpadfxij50zghktrw5cwscgxqfvgmi0&ep=v1_stickers_search&rid=200w.webp&ct=s"
    }else if(type.innerHTML == "Haze"){
        image.src="haze.PNG"
    }
    else if(type.innerHTML == "Rain"){
        image.src="https://media3.giphy.com/media/5pQGenUQR3i8tx2zy1/200.webp?cid=ecf05e47fwqyo2kttepdskdyk2x4wxu0f0m579w06yzxyy1h&ep=v1_stickers_search&rid=200.webp&ct=s"
    }
    else if(type.innerHTML == "Snow"){
        image.src="rain.PNG"
    }
    else if(type.innerHTML == "Clear"){
        image.src="https://media1.giphy.com/media/cOJbD5FJCMRbFJdjSe/200w.webp?cid=ecf05e474ik1fg25qaabdu9sr13fa258ruj96i7ldd2sii7y&ep=v1_stickers_search&rid=200w.webp&ct=s"
    }
    else if(type.innerHTML == "Strom"){
        image.src="https://media0.giphy.com/media/fkhBZAoqhTEnzDAgMp/200w.webp?cid=ecf05e474ik1fg25qaabdu9sr13fa258ruj96i7ldd2sii7y&ep=v1_stickers_search&rid=200w.webp&ct=s"
    }else{
        image.src="https://media4.giphy.com/media/3ov9jCEFMBtCy54q6Q/200w.webp?cid=ecf05e47fwqyo2kttepdskdyk2x4wxu0f0m579w06yzxyy1h&ep=v1_stickers_search&rid=200w.webp&ct=s"

    }
    
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }

 