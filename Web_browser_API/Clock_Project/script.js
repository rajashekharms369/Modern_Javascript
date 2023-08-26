function clock(){
    const now = new Date();
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');

    // Setup canvas
    ctx.save(); // Save the default state

    ctx.restore();

    
    console.log(now);
};
clock();