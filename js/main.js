const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty("--mouse-x", `${x}px`);
    hero.style.setProperty("--mouse-y", `${y}px`);
});

const circleOne = document.querySelector(".circle-one");
const circleTwo = document.querySelector(".circle-two");

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 25;
    const moveY = (y / rect.height - 0.5) * 25;

    circleOne.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    circleTwo.style.transform =
        `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
});