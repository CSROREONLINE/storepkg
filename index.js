const backgroundSolid = document.getElementById('backgroundSolid');
const backgroundSmoke_1 = document.getElementById('backgroundSmoke_1');
const backgroundSmoke_2 = document.getElementById('backgroundSmoke_2');
const backgroundDust_1 = document.getElementById('backgroundDust_1');
const backgroundDust_2 = document.getElementById('backgroundDust_2');

const backgroundSolid2 = document.getElementById('backgroundSolid2');
const backgroundSmoke2_1 = document.getElementById('backgroundSmoke2_1');
const backgroundSmoke2_2 = document.getElementById('backgroundSmoke2_2');
const backgroundDust2_1 = document.getElementById('backgroundDust2_1');
const backgroundDust2_2 = document.getElementById('backgroundDust2_2');

const character1 = document.getElementById('character1');
const character2 = document.getElementById('character2');
const characterList = [
    'images/char1.png',
    'images/char2.png',
    'images/char3.png',
    'images/char4.png'
]
let currentIndex = -1;

const menuNews = document.getElementById('menuNews');

const menu = document.getElementById('menu');
const startTitle = document.getElementById('startTitle');
const startDownload = document.getElementById('startDownload');
const startDownloadPS3 = document.getElementById('startDownloadPS3');
const startDownloadPC = document.getElementById('startDownloadPC');
const menuStart = document.getElementById('menuStart');
const buttonInstall = document.getElementById('buttonInstall');
const buttonServers = document.getElementById('buttonServers');
const buttonAnimationsOn = document.getElementById('buttonAnimationsOn');
const buttonAnimationsOff = document.getElementById('buttonAnimationsOff');

const menuPlatform = document.getElementById('menuPlatform');
const buttonPS3 = document.getElementById('buttonPS3');
const buttonBackPlatform = document.getElementById('buttonBackPlatform');

const menuExplain = document.getElementById('menuExplain');
const explainMargin = document.getElementById('explainMargin');
const PS3Inside = document.getElementById('PS3Inside');
const buttonBackPS3 = document.getElementById('buttonBackPS3');
const buttonDownloadPS3 = document.getElementById('buttonDownloadPS3');

const menuServers = document.getElementById('menuServers');
const buttonBackServers = document.getElementById('buttonBackServers');
const buttonConsoleReset = document.getElementById('buttonConsoleReset')

function characterScroll_1() {
    character1.classList.remove('openCharacter1');
    void character1.offsetWidth;
    character1.classList.add('closeCharacter1');

    character2.classList.remove('closeCharacter1');
    void character2.offsetWidth;
    character2.classList.add('openCharacter1');
};
/**
function characterSelect_1() {
    const randomIndex = Math.floor(Math.random() * characterList.length);
    const selectedCharacterList = characterList[randomIndex];

    character2.style.backgroundImage = `url('${selectedCharacterList}')`;
};
function characterSelect_2() {
    const randomIndex = Math.floor(Math.random() * characterList.length);
    const selectedCharacterList = characterList[randomIndex];

    character1.style.backgroundImage = `url('${selectedCharacterList}')`;
};
**/
function characterScroll_2() {
    character2.classList.remove('openCharacter1');
    void character2.offsetWidth;
    character2.classList.add('closeCharacter1');

    character1.classList.remove('closeCharacter1');
    void character1.offsetWidth;
    character1.classList.add('openCharacter1');
};
function characterSelect_1() {
    let newIndex;
    do{
    newIndex = Math.floor(Math.random() * characterList.length)
    } while (newIndex === currentIndex);

    character2.style.backgroundImage = `url('${characterList[newIndex]}')`;

    currentIndex = newIndex;
};
function characterSelect_2() {
    let newIndex;
    do{
    newIndex = Math.floor(Math.random() * characterList.length)
    } while (newIndex === currentIndex);

    character1.style.backgroundImage = `url('${characterList[newIndex]}')`;

    currentIndex = newIndex;
};

function turnOffAnimations() {
    backgroundSolid.style.animationPlayState = 'paused';
    backgroundSmoke_1.style.animationPlayState = 'paused';
    backgroundSmoke_2.style.animationPlayState = 'paused';
    backgroundDust_1.style.animationPlayState = 'paused';
    backgroundDust_2.style.animationPlayState = 'paused';
    /**
    backgroundSolid2.style.animationPlayState = 'paused';
    backgroundSmoke2_1.style.animationPlayState = 'paused';
    backgroundSmoke2_2.style.animationPlayState = 'paused';
    backgroundDust2_1.style.animationPlayState = 'paused';
    backgroundDust2_2.style.animationPlayState = 'paused';
    */
    buttonAnimationsOn.style.pointerEvents = 'none';
    void buttonAnimationsOn.offsetWidth;
    buttonAnimationsOn.style.display = 'none';

    buttonAnimationsOff.style.pointerEvents = 'all';
    void buttonAnimationsOff.offsetWidth;
    buttonAnimationsOff.style.display = 'block';
};
function turnOnAnimations() {
    backgroundSolid.style.animationPlayState = 'running';
    backgroundSmoke_1.style.animationPlayState = 'running';
    backgroundSmoke_2.style.animationPlayState = 'running';
    backgroundDust_1.style.animationPlayState = 'running';
    backgroundDust_2.style.animationPlayState = 'running';
    /**
    backgroundSolid2.style.animationPlayState = 'running';
    backgroundSmoke2_1.style.animationPlayState = 'running';
    backgroundSmoke2_2.style.animationPlayState = 'running';
    backgroundDust2_1.style.animationPlayState = 'running';
    backgroundDust2_2.style.animationPlayState = 'running';
    */
    buttonAnimationsOff.style.pointerEvents = 'none';
    void buttonAnimationsOff.offsetWidth;
    buttonAnimationsOff.style.display = 'none';

    buttonAnimationsOn.style.pointerEvents = 'all';
    void buttonAnimationsOn.offsetWidth;
    buttonAnimationsOn.style.display = 'block';
};

function closeMenu() {
    menu.style.pointerEvents = 'none';
    menu.style.display = 'none';
};
function openMenu() {
    menu.style.pointerEvents = 'all';
    menu.style.display = 'block';
};

function closeMenuStart() {
    menuStart.style.pointerEvents = 'none';
    menuStart.style.display = 'none';
};
function openMenuStart() {
    menuStart.style.pointerEvents = 'all';
    menuStart.style.display = 'block';
};
function closeMenuNews() {
    menuNews.style.pointerEvents = 'none';
    menuNews.style.display = 'none';
};
function openMenuNews() {
    menuNews.style.pointerEvents = 'all';
    menuNews.style.display = 'block';
};

function openMenuPlatform() {
    menuPlatform.style.pointerEvents = 'all';
    menuPlatform.style.display = 'block';
};
function closeMenuPlatform() {
    menuPlatform.style.pointerEvents = 'none';
    menuPlatform.style.display = 'none';
};

function openMenuPS3() {
    menuExplain.style.pointerEvents = 'all';
    menuExplain.style.backgroundColor = 'var(--explainBackground)';
    explainMargin.style.pointerEvents = 'all';
    explainMargin.style.backgroundColor = 'var(--explainMarginColor)';
    explainMargin.style.borderTop = 'var(--explainMarginBorder)';
    explainMargin.style.borderBottom = 'var(--explainMarginBorder)';
    PS3Inside.style.pointerEvents = 'all';
    PS3Inside.style.display = 'block';
};
function closeMenuPS3() {
    menuExplain.style.pointerEvents = 'none';
    menuExplain.style.backgroundColor = 'transparent';
    explainMargin.style.pointerEvents = 'none';
    explainMargin.style.backgroundColor = 'transparent';
    explainMargin.style.borderTop = 'var(--explainMarginBorderClose)';
    explainMargin.style.borderBottom = 'var(--explainMarginBorderClose)';
    PS3Inside.style.pointerEvents = 'none';
    PS3Inside.style.display = 'none';
};

function openMenuServers() {
    menuStart.style.pointerEvents = 'none';
    menuStart.style.display = 'none';

    menuServers.style.opacity = '80%';
    menuServers.style.pointerEvents = 'all';
    menuServers.style.display = 'block';

    buttonConsoleReset.style.display = 'block';
    buttonConsoleReset.style.pointerEvents = 'all';
};
function closeMenuServers() {
    menuServers.style.opacity = '0%';
    menuServers.style.pointerEvents = 'none';

    menuStart.style.pointerEvents = 'all';
    menuStart.style.display = 'block';

    buttonConsoleReset.style.display = 'none';
    buttonConsoleReset.style.pointerEvents = 'none';
};

buttonInstall.addEventListener('click', () => {
    closeMenuStart();
    openMenuPlatform();
    characterScroll_1();
    characterSelect_1();
});
buttonBackPlatform.addEventListener('click', () => {
    closeMenuPlatform();
    openMenuStart();
    characterScroll_2();
    characterSelect_2();
});

buttonPS3.addEventListener('click', () => {
    openMenuPS3();
    closeMenu();
    closeMenuPlatform();
});
buttonBackPS3.addEventListener('click', () => {
    closeMenuPS3();
    openMenu();
    openMenuPlatform();
});
buttonDownloadPS3.addEventListener('click', () => {
    window.open('https://www.mediafire.com/file/yvp175ueqqsu0eu/Counter_Strike_Re-Online_PS3.pkg/file'), ('_blank');
});

buttonServers.addEventListener('click', () => {
    openMenuServers();
    closeMenuStart();
});
buttonBackServers.addEventListener('click', () => {
    closeMenuServers();
    openMenuStart();
});

buttonAnimationsOn.addEventListener('click', () => {
    turnOffAnimations();
});
buttonAnimationsOff.addEventListener('click', () => {
    turnOnAnimations();
});



/**
startDownloadPS3.addEventListener('click', () => {
    window.open('https://www.mediafire.com/file/yvp175ueqqsu0eu/Counter_Strike_Re-Online_PS3.pkg/file'), ('_blank');
});
startDownloadPC.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1F8TM-jbvXc4S5EDj31WUA6QVyDsjXh3H/view?pli=1'), ('_blank');
});
**/



