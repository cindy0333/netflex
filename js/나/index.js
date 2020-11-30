

var faqList =document.getElementsByClassName("faq_list");
var openStateIcon =document.getElementsByClassName("openstate_icon");
var openState =[0,0,0,0,0,0];  //list 오픈상태 저장 배열 변수. 전부닫힘


//방법 1
// function accOpen(clickNum){

//    for(i=0;i<6;i++){
//       faqList[i].style="max-height:60px;";
//       openStateIcon[i].style="transform:rotate(0deg)";
//       if(openState[clickNum]==0){openState[i]=0}
//    }
  


//    if(openState[clickNum]==0){
//       faqList[clickNum].style="max-height:600px;";
//       openStateIcon[clickNum].style="transform:rotate(45deg)";
//       openState[clickNum] = 1;}//클릭된 리스트의 상태를 알려줌 
//     else{faqList[clickNum].style="max-height:60px;"
//        openStateIcon[clickNum].style="transform:rotate(0deg)";
//       openState[clickNum] =0;}//클릭된 리스트가 닫혀있다는 상태를 알려줌

  

// }

//방법2

function accOpen(clickNum){

if(openState[clickNum] ==0){  /////////클릭한 리스트가 닫혀있으면
   for(i=0;i<faqList.length;i++){ //.length :개수를 자동으로 잡아줌
      faqList[i].style="max-height:60px;";
      openStateIcon[i].style="transform:rotate(0deg)";
      openState[i]=0;   /////////일단 다른것들 다 닫아주고 openstate를 0으로 초기화해주고
   }
   //////////클릭한것만 열어준다
   faqList[clickNum].style="max-height:600px;";
      openStateIcon[clickNum].style="transform:rotate(45deg)";
      openState[clickNum] = 1;//클릭된 리스트의 상태를 알려줌   

  }
  /////////클릭한 리스트가 안닫혀있으면 닫아줘라
    else{faqList[clickNum].style="max-height:60px;"
       openStateIcon[clickNum].style="transform:rotate(0deg)";
      openState[clickNum] =0;}//클릭된 리스트가 닫혀있다는 상태를 알려줌

  

}


   // for(i=0;i<916;i++){
   //    document.getElementById('faq_icon').style="left:"+i+"px";
   // }

// [?]아이콘 이동하는 반복문
//    var i=0;
//    function aniIcon(){
//     if (i > 915){return;}
//     document.getElementById('faq_icon').style="left:"+i+"px";
//     i=i+10;
//     setTimeout(aniIcon,10);
// }
//    aniIcon();


var randomBgNumber = Math.floor(Math.random()*7);
document.getElementById('hero').style.backgroundImage="url(img/bg_"+randomBgNumber+".jpg)";



// var randomNumber = Math.floor(Math.random() *10) //floor:소숫점버리기

// console.log(randomNumber);
// if(randomNumber < 4){document.getElementById('hero').style="background-image:url('img/poster" + randomNumber + ".jpg'"}





//눈내리는 효과
// function snow(){
//    randomSize= Math.floor(Math.random() * 10);
//    randomX = Math.floor(Math.random() * window.innerWidth);
//    randomY = Math.floor(Math.random() * window.innerHeight);
//    for(i=0;i<11;i++){
//       randomSize=Math.floor(Math.random() * 10);
//       randomX = Math.floor(Math.random() * window.innerWidth -20);
//       randomY = Math.floor(Math.random() * window.innerHeight);
//       // document.getElementsByClassName('snowball')[i].style="width:"+randomSize+"px;"+"height:"+randomSize+"px;"+"border-radius:"+randomsize/2+"px;"+"top:"+randomY+"px;" + "left:" +randomX +"px;"+"display:block"

//       document.getElementsByClassName('snowball')[i].style.width=randomSize+"px";
//       document.getElementsByClassName('snowball')[i].style.height=randomSize+"px";
//       document.getElementsByClassName('snowball')[i].style.borderRadius=randomsize/2+"px";
//       document.getElementsByClassName('snowball')[i].style.top=randomY+"px";
//       document.getElementsByClassName('snowball')[i].style.left=randomX+"px";

//       //위처럼 연결해서 쓰는게 복잡하면 아래처럼 하나하나 떨어뜨려서 쓰면 됨. 

//    }
   
// }
// setInterval(snow,1000);

//Scroll Event Coding

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(document.getElementById('tv_text').offsetTop);


   console.log(window.pageYOffset);
   console.log(window.scrollY);
   document.getElementById('scroll_position').innerHTML=window.scrollY;
   document.getElementById('tvtext_position').innerHTML=tvText.offsetTop;
   document.getElementById('offlinetext_position').innerHTML=offlineText.offsetTop;
   //tv로 즐기세요 텍스트 효과

   var scrollPoint = window.scrollY + window.innerHeight; //다음 시작은 화면값만큼 뒤에있으므로 innerheight를 더해주어서 스크롤포인트를 밑으로 내려놓음 
   var tvText = document.getElementById('tv_text');
   var offlineText = document.getElementById('offline_text');

   function scrollAnimation(){
      console.log(document.getElementById('tvtext_position').offsetTop)

   if((scrollPoint - tvText.offsetTop) > 200)
   {
      tvText.style="animation:fade_in_opacity 3s forwards ;"
   }
   if((scrollPoint - offlineText.offsetTop) > 200)
   {
      offlineText.style="animation:fade_in_opacity 3s forwards ;"
   }



}