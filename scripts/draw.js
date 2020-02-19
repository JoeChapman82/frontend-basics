(() => {
    const canvas = document.getElementById('drawingCanvas'); // grab the canvas element from the html using the id
    const ctx = canvas.getContext('2d'); // The context of the canvas where various drawing methods are held
    let isDrawing, lastX, lastY; // Declare variables required

    function init() {
        ctx.lineCap = 'round'; // use rounded edges whilst drawing lines
        ctx.lineWidth = 17;
        ctx.strokeStyle = 'rgba(225, 225, 225, 1)'; // Set the line colour to white
        isDrawing = false; // instantiate variables
        lastX = 0;
        lastY = 0;
        hue = 0;
        clearCanvas();
    }

    function draw(e) {
        if (!isDrawing) {
            return; // if isDrawing is not true, do not continue passed this point
        }
        ctx.beginPath(); // start drawing
        ctx.moveTo(lastX, lastY); // move to a previous x, y coordinates of the cursor
        ctx.lineTo(e.offsetX, e.offsetY); // plot a line to the current x, y coordinates of the cursor
        ctx.stroke(); // draw the line
        [lastX, lastY] = [e.offsetX, e.offsetY]; // set previous x, y, coordinates to the current x, y coordinates
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas of all data
    }

    // when the mouse is clicked anywhere on the canvas
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw); // everytime the mouse moves, execute the draw function
    canvas.addEventListener('mouseup', () => isDrawing = false); // when mouse is depressed, set isDrawing to false
    canvas.addEventListener('mouseout', () => isDrawing = false); // when mouse exits the canvas, set isDrawing to false
    window.addEventListener('resize', init); // when the screen resizes, execute the init function

    document.getElementById('canvasClearButton').addEventListener('click', clearCanvas);

    init();
})();
