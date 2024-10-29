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
const cpuPresidentName1 = document.getElementById('cpuPresidentName1');
const cpuPresidentName2 = document.getElementById('cpuPresidentName2');
const cpuPresidentName3 = document.getElementById('cpuPresidentName3');
const cpuPresidentScore1 = document.getElementById('cpuPresidentScore1')
const cpuPresidentScore2 = document.getElementById('cpuPresidentScore2')
const cpuPresidentScore3 = document.getElementById('cpuPresidentScore3')

/**DOM  User selection */
/**user selection 1 */
const selectedPresidentContainerUser = document.getElementById('selectedPresidentContainer2');
const selectedPresidentUser1 = document.getElementById('selectedPresidentUser1');
const selectedPresidentUser2 = document.getElementById('selectedPresidentUser2');
const selectedPresidentUser3 = document.getElementById('selectedPresidentUser3');
const selectedPresidentUserImage1 = document.getElementById('selectedPresidentUserImage1');
const selectedPresidentUserImage2 = document.getElementById('selectedPresidentUserImage2');
const selectedPresidentUserImage3 = document.getElementById('selectedPresidentUserImage3');
/** user player arena */
const userPlayerImage1 = document.getElementById('userPlayerImage1');
const userPlayerImage2 = document.getElementById('userPlayerImage2');
const userPlayerImage3 = document.getElementById('userPlayerImage3');
const userPresidentName1 = document.getElementById('userPresidentName1');
const userPresidentName2 = document.getElementById('userPresidentName2');
const userPresidentName3 = document.getElementById('userPresidentName3');
const userPresidentScore1 = document.getElementById('userPresidentScore1')
const userPresidentScore2 = document.getElementById('userPresidentScore2')
const userPresidentScore3 = document.getElementById('userPresidentScore3')
/** figth conclusion */
const winnerText = document.querySelector('.winnerText')
const userScore = document.getElementById('userScore')
const cpuScore = document.getElementById('cpuScore')

/**DOM loading placeholder */
const loadingMessage = document.getElementById('loadingContainer')

/**DOM Available presidents list */
const presidentList = document.getElementById('presidentList');
const presidentPlaceholder = document.getElementById('presidentPlaceholder');




/** Variable Declarations*/
let cpuPlayersDOM = [selectedPresidentCpuImage1, selectedPresidentCpuImage2, selectedPresidentCpuImage3];
let cpuPlayersArenaImage = [cpuPlayerImage1, cpuPlayerImage2, cpuPlayerImage3];
let cpuSelection = [];
let cpuImages = [];
let cpuNames = [];
let cpuArenaNames = [cpuPresidentName1, cpuPresidentName2, cpuPresidentName3];
let cpuPoints = []
let cpuArenaPoints = [cpuPresidentScore1, cpuPresidentScore2, cpuPresidentScore3]
let userSelection = [];
let userImages = [];
let userPlayersSelectionImage = [selectedPresidentUserImage1, selectedPresidentUserImage2,selectedPresidentUserImage3]
let userPlayersArenaImage = [userPlayerImage1, userPlayerImage2, userPlayerImage3]
let userNames = []
let userArenaNames = [userPresidentName1, userPresidentName2, userPresidentName3];
let userPoints = []
let userArenaPoints = [userPresidentScore1, userPresidentScore2, userPresidentScore3]
let teamsPoints = {"cpuPoints": 0, "userPoints": 0};


