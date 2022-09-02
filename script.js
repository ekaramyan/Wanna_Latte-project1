"use strict"

window.onload = function(){
    const parallax = document.querySelector('.parallax__body');
    if (parallax){
        const content = document.querySelector('.container1');
        const sign = document.querySelector('.images-parallax__sign');

        const forSign = 25;

        const speed = 0.5;

        let positionX= 0, positionY = 0;
        let coordXpercent = 0, coordYpercent = 0;

        function setMouseParallaxStyle()
        {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;

            positionX = positionX + (distX*speed);
            positionY = positionY + (distY*speed);
            sign.style.cssText = 'transform: translate(${positionX/forSign}%,${positionY/forSign}%);';

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function(e){
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXpercent = coordX / parallaxWidth*100;
            coordYpercent = coordY / parallaxWidth*100;

        })
    }
}


