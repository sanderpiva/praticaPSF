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

    slider = document.getElementById("slider");
    carregarImg(imgAtual);
    tempotroca=4000;
    tmp = setInterval(troca, tempotroca);
}

function troca(){

    imgAtual++;
    if(imgAtual>maxImg){

       imgAtual=0;
    }

    carregarImg(imgAtual);
}
                    /*function mudaCor(){

                        cx1.alert="x";

                    } ao passar o mouse queria um alerta "vacinacao"*/

                    
window.addEventListener("load", inicia);
                                       