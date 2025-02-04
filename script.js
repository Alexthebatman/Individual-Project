function positionArrows() {
    const circle = document.querySelector('.mission-item .circle img');
    const arrowContainer = document.querySelector('.arrow-class');
    const container = document.querySelector('.arrow-relative');

    if (circle && arrowContainer && container) {

        const circleRect = circle.getBoundingClientRect();

        const containerRect = container.getBoundingClientRect();

        const circleCenter = circleRect.top + circleRect.height /2;

        const relativeTop = circleCenter - containerRect.top;

        arrowContainer.style.top = relativeTop + 'px';
    }
}

window.addEventListener('load', positionArrows);
window.addEventListener('resize', positionArrows);