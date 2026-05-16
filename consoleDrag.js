/**const consoleDrag = document.getElementById('consoleDrag');**/
/**const consoleDrag = document.getElementById('menuServers');**/
const consoleDragged = document.getElementById('consoleDrag');
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

consoleDragged.onmousedown = (e) => {
    e.preventDefault();
    pos3 = e.clientX; // Initial mouse X
    pos4 = e.clientY; // Initial mouse Y
    document.onmouseup = () => { document.onmousemove = null; };
    document.onmousemove = (e) => {
        pos1 = pos3 - e.clientX; // Difference X
        pos2 = pos4 - e.clientY; // Difference Y
        pos3 = e.clientX;
        pos4 = e.clientY;
        menuServers.style.top = (menuServers.offsetTop - pos2) + "px";
        menuServers.style.left = (menuServers.offsetLeft - pos1) + "px";
    };
};

function resetConsolePosition() {
    menuServers.style.top = '-120px';
    menuServers.style.left = '0px';
}

buttonConsoleReset.addEventListener('click', () => {
    resetConsolePosition();
});