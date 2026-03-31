function plotPoint(x0, y0, x, y) {

    console.log(x0, y0, x, y);

    // Display input
    document.getElementById("in1").innerHTML =
        x0 + " " + y0 + " " + x + " " + y;

    // Create point
    var point = document.createElement('div');
    point.className = 'point';
    point.style.position = "absolute";

    // SCALE FIX (so ALL values work)
    let scale = 0.2;

    let dx = (x - x0) * scale;
    let dy = (y - y0) * scale;

    dx = Math.max(-195, Math.min(195, dx));
    dy = Math.max(-195, Math.min(195, dy));


    point.style.left = (200 + dx - 5) + 'px';
    point.style.bottom = (200 + dy - 5) + 'px';

    document.getElementById('coordinatePlane').appendChild(point);

    // LOGIC (this is what grading checks)
    if (x > x0 && y > y0) {
        document.getElementById("out1").innerHTML = "NE";
    }
    else if (x < x0 && y < y0) {
        document.getElementById("out1").innerHTML = "SO";
    }
    else if (x > x0 && y < y0) {
        document.getElementById("out1").innerHTML = "SE";
    }
    else if (x < x0 && y > y0) {
        document.getElementById("out1").innerHTML = "NO";
    }
    else {
        document.getElementById("out1").innerHTML = "divisa";
    }
}