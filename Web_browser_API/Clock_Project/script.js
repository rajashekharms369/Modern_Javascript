function clock(){
    const now = new Date();
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');

    // Setup canvas
    ctx.save(); // Save the default state
    ctx.clearRect(0,0,500,500);
    ctx.translate(250, 250); // Put 0,0 in the middle
    ctx.rotate(-Math.PI/2); // Rotate clock by -90 Degree;

    // Set Default styles
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#f4f4f4";
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    
    ctx.restore();

    console.log(now);

    console.log("Hello world");
};
clock();
console.log("Hello world");