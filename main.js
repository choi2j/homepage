let title = document.getElementById("title");

title.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let rotateY = (-1 / 12.5) * x + 20;
    let rotateX = (-1 / 5) * y + 20;
    console.log(rotateX, rotateY);
    title.style = `transform : perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
});

title.addEventListener("mouseleave", (e) => {
    title.style = `transform : rotateY(${0}deg) rotateX(${0}deg);`;
});
