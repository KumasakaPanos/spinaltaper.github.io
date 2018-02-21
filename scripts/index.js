'usestrict';
var pictureFileName=[];

// counter

// create object
// set image list
pictureFileName = new Array();
pictureFileName[0]='img/bag.jpg';
pictureFileName[1]='img/banana.jpg';
pictureFileName[2]='img/bathroom.jpg';
pictureFileName[3]='img/boots.jpg';
pictureFileName[4]='img/breakfast.jpg';
pictureFileName[5]='img/bubblegum.jpg';
pictureFileName[6]='img/chair.jpg';
pictureFileName[7]='img/cthulhu.jpg';
pictureFileName[8]='img/dog-duck.jpg';
pictureFileName[9]='img/dragon.jpg';
pictureFileName[10]='img/pen.jpg';
pictureFileName[11]='img/pet-sweep.jpg';
pictureFileName[12]='img/scissors.jpg';
pictureFileName[13]='img/shark.jpg';
pictureFileName[14]='img/sweep.png';
pictureFileName[15]='img/tauntaun.jpg';
pictureFileName[16]='img/unicorn.jpg';
pictureFileName[17]='img/usb.gif';
pictureFileName[18]='img/water-can.jpg';
pictureFileName[19]='img/wine-glass.jpg';
var numberOfRenders=0;
var buttonPress=document.getElementsByClassName('button');
var arrayid=1;
var pictureImageArray1=new Array;
var pictureImageArray2=new Array;
var title;
var images=[];
var duplicate;
var imageID;

function imageRender(){
  if (numberOfRenders<25){
    numberOfRenders+=1;
    for(var i=0;i<3;){
      i=randImg(i);
    }
    if(arrayid===1){
      for (var j=0;j<pictureImageArray1.length;j++){
        placeImages(j,pictureImageArray1[j]);}
    }
    if(arrayid===2){
      for (var j=0;j<pictureImageArray1.length;j++){
        placeImages(j,pictureImageArray2[j]);}
    }
    if(arrayid===2){
      pictureImageArray1=[];
      arrayid=1;
    }
    else{
      pictureImageArray2=[];
      arrayid=2;
    }
  }
  if(numberOfRenders===26){
    changePage();
  }
  if(numberOfRenders>26){
    console.log('Well this should\'nt be displaying.')
  }
}
function changePage(){

}
function randImg(i){
  var generatedNumber=Math.floor(Math.random()*pictureFileName.length);
  duplicate=dupliCheck(generatedNumber);
  if (duplicate===false){
    if(arrayid===1){
      pictureImageArray1.push(generatedNumber);
      return(i+1);
    }
    if(arrayid===2){
      pictureImageArray2.push(generatedNumber);
      return(i+1);
    }
  }
  else{
    return(i);}
}
function dupliCheck(number){
  duplicate=false;
  if(pictureImageArray1.includes(number)){
    duplicate=true;
  }
  if(pictureImageArray2.includes(number)){
    duplicate=true;
  }
  return duplicate;
}
function ImageObject(title,url,index){
  this.name=title;
  this.alt=title;
  this.id=title;
  this.url=url;
  this.clicks=0;
  this.views=0;
}
function placeImages(i,pictureIndex){
  console.log(arrayid);
  console.log(pictureIndex);
  var buttonID='button'+i;
  var button=document.getElementById(buttonID);
  console.log(buttonID);
  images[pictureIndex].views+=1;
  button.style.backgroundImage='url('+images[pictureIndex].url+')';
  button.style.zIndex=pictureIndex;
}
function onClick(buttonStyle){
  console.log(buttonStyle.style.zIndex);
  images[buttonStyle.style.zIndex].clicks+=1;
  imageRender();
}
//This makes objects.
for(var z=0;z<pictureFileName.length;z++){
  var url=pictureFileName[z];
  title=pictureFileName[z].substring(0,pictureFileName[z].length-4);
  title=title.substring(4,title.length);
  var object=new ImageObject(title,url,z);
  images.push(object);
}
imageRender();