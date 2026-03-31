function plotPoint(x0, y0, x, y) {

    console.log(x0, y0, x, y);

   
    document.getElementById("in1").innerHTML =
        x0 + " " + y0 + " " + x + " " + y;

    var point = document.createElement('div');
    point.className = 'point';
    point.style.position = "absolute";

    
let scale = 5;

let dx = (x - x0) * scale;
let dy = (y - y0) * scale;


dx = Math.max(-195, Math.min(195, dx));
dy = Math.max(-195, Math.min(195, dy));

point.style.left = (200 + dx - 5) + 'px';
point.style.bottom = (200 + dy - 5) + 'px';

    document.getElementById('coordinatePlane').appendChild(point);

   if (x == x0 || y == y0) {
    document.getElementById("out1").innerHTML = "divisa";
}
else if (x > x0 && y > y0) {
    document.getElementById("out1").innerHTML = "NE";
}
else if (x < x0 && y < y0) {
    document.getElementById("out1").innerHTML = "SO";
}
else if (x > x0 && y < y0) {
    document.getElementById("out1").innerHTML = "SE";
}
else if (x < x0 && y > y0){
    document.getElementById("out1").innerHTML = "NO";
}}