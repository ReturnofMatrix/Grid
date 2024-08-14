const container = document.querySelector("div");

for (let i = 0; i < 256; i++) { // 16 * 16 = 256 squares
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}
