/**DOM declarations */
/** DOM screens */
const firstScreen = document.getElementById('firstScreenContainer');
const instructionsScreen = document.getElementById('instructionsScreen');
const creditsScreen = document.getElementById('creditsScreen');
const secondScreen = document.getElementById('secondScreenContainer');
const thirdScreen= document.getElementById('thirdScreenContainer');
const fourthScreen= document.getElementById('fourthScreenContainer');
/**DOM Title */
const tittleContainer = document.getElementById('titleContainer');
const maintittle = document.getElementById('mainTitle');
const subtitle = document.getElementById('subTitle');
/**DOM buttons */
const playButton = document.getElementById('playButton');
const howToButton = document.getElementById('howToButton');
const creditsToButton = document.getElementById('creditsToButton');
const backButton1 = document.getElementById('backButton1');
const backButton2 = document.getElementById('backButton2');
const goButton = document.getElementById('goButton');
const fightButton = document.getElementById('fightButton');
const againButton = document.getElementById('againButton');
/**DOM CPU selection */
/**CPU selection 1 */
const selectedPresidentContainerCPU = document.getElementById('selectedPresidentContainer1');
const selectedPresidentCpuImage1 = document.getElementById('selectedPresidentCpuImage1');
const selectedPresidentCpuImage2 = document.getElementById('selectedPresidentCpuImage2');
const selectedPresidentCpuImage3 = document.getElementById('selectedPresidentCpuImage3');
/**CPU players arena */
const cpuPlayerImage1 = document.getElementById('cpuPlayerImage1')
const cpuPlayerImage2 = document.getElementById('cpuPlayerImage2')
const cpuPlayerImage3 = document.getElementById('cpuPlayerImage3')
/**DOM  User selection */
const selectedPresidentContainerUser = document.getElementById('selectedPresidentContainer2');
const selectedPresidentUser1 = document.getElementById('selectedPresidentUser1');
const selectedPresidentUser2 = document.getElementById('selectedPresidentUser2');
const selectedPresidentUser3 = document.getElementById('selectedPresidentUser3');

/** Variable Declarations*/
let dataPresidents = [];
let cpuSelection = [];
let cpuPlayersSelection = [selectedPresidentCpuImage1, selectedPresidentCpuImage2, selectedPresidentCpuImage3];
let cpuPlayersArena = [cpuPlayerImage1, cpuPlayerImage2, cpuPlayerImage3];
let cpuImages = [];
let userSelection = [];
let userImages = [];
let userPlayersSelection = [selectedPresidentUser1, selectedPresidentUser2, selectedPresidentUser3];
