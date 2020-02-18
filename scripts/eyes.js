(() => {

    const eyes = document.querySelectorAll('.eye');
    window.addEventListener('mousemove', updateEyes);

    function updateEyes(e) {
        eyes.forEach((eye) => {
            let x = (getOffset(eye).left) + (getOffset(eye).width / 2);
            let y = (getOffset(eye).top) + (getOffset(eye).height / 2);
            let radians = Math.atan2(e.pageX - x, e.pageY - y);
            let rotation = (radians * (180 / Math.PI) * -1);
            console.log(rotation);
            eye.style.transform = `rotate(${rotation}deg)`;
        });

    }

    function getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft,
            width: rect.width,
            height: rect.height
        }
    }

})();
