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

    // Draw clock face/border
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 14;
    ctx.arc(0, 0, 142, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    
    // Draw house lines
    ctx.save();
    for(let i=0; i<12; i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
    }
    ctx.restore();

    // Draw Minute lines
    ctx.save();
    ctx.lineWidth = 4;
    for(let i=0; i<60; i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/30);
        ctx.moveTo(117,0);
        ctx.lineTo(120,0);
        ctx.stroke();
    }

    ctx.restore();

    const hr = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hr}:${min}:${sec}`);

    // Draw the hour hand:
    ctx.save();
    ctx.rotate((Math.PI/6)*hr+(Math.PI/360) * min+(Math.PI/21600)*sec);
    ctx.strokeStyle = "#800000";
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();


     // Draw the minute hand:
     ctx.save();
     ctx.rotate((Math.PI/30)*min+(Math.PI/1800)*sec);
     ctx.strokeStyle = "#800000";
     ctx.lineWidth = 12;
     ctx.beginPath();
     ctx.moveTo(-20,0);
     ctx.lineTo(100, 0);
     ctx.stroke();
     ctx.restore();

      // Draw the second hand:
      ctx.save();
      ctx.rotate((sec*Math.PI)/30);
      ctx.strokeStyle = "#FF7F50";
      ctx.fillStyle = "#FF7F50";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-30,0);
      ctx.lineTo(100, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI*2, true);
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(clock);
};

requestAnimationFrame(clock);