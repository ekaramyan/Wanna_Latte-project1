"use strict"

window.onload = function(){
    const parallax = document.querySelector('.container1');
    if (parallax){
        const content = document.querySelector('.parallax__body');
        //const sign = document.querySelector('.images-parallax__sign');
        const bg = document.querySelector('.images-parallax__bg');
        const table = document.querySelector('.images-parallax__table');
        const lights = document.querySelector('.images-parallax__lights');

        //const forSign = 25;
        const forBg = 80;
        const forTable = 20;
        const forLights = 30;

        const speed = 0.05;

        let positionX= 0, positionY = 0;
        let coordXpercent = 0, coordYpercent = 0;

        function setMouseParallaxStyle()
        {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;

            positionX = positionX + (distX*speed);
            positionY = positionY + (distY*speed);
            //sign.style.cssText = 'transform: translate(${positionX/forSign}%,${positionY/forSign}%);';
            bg.style.cssText = `transform: translate(${positionX/forBg}%,${positionY/forBg}%);`;
            table.style.cssText = `transform: translate(${positionX/forTable}%,${positionY/forTable}%);`;
            lights.style.cssText = `transform: translate(${positionX/forLights}%,${positionY/forLights}%);`;

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


