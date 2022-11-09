var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempotroca;

function preCarregamento(){

    var s=1;

     for(var i=0; i<4; i++){

        imgs[i] = new Image();
        imgs[i].src="assets/imagesSlider/s"+s+".jpg";
        s++;
      }
 }

function carregarImg(img){

    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia(){

    preCarregamento();

    imgAtual=0;
    maxImg=imgs.length-1;
    var btnE, btnD;


    slider = document.getElementById("slider");
    btnE = document.getElementById("btnSliderE");
    btnD = document.getElementById("btnSliderD");
    
   

    carregarImg(imgAtual);
    tempotroca=4000;
    tmp = setInterval(troca, tempotroca);
    btnE.addEventListener("click",btnEtroca);
    btnD.addEventListener("click", btnDtroca);
}

function btnEtroca(){

    
    imgAtual--;
    if(imgAtual<0){

       imgAtual=0;
    }

    carregarImg(imgAtual);


}

function btnDtroca(){

    imgAtual++;
    if(imgAtual>maxImg){

       imgAtual=0;
    }

    carregarImg(imgAtual);

}


function troca(){

    imgAtual++;
    if(imgAtual>maxImg){

       imgAtual=0;
    }

    carregarImg(imgAtual);
}
                   

                    
window.addEventListener("load", inicia);
                                       