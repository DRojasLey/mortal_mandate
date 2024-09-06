/** Main menu Handling functions */


/**Hide all sections on window.load */
window.onload = function() {
    hideSections(instructionsScreen);
    hideSections(creditsScreen);
    hideSections(secondScreen);
    hideSections(thirdScreen);
    hideSections(fourthScreen);
};

/**Set event listeners for the menu buttons */

/** Shows the instructions */
howToButton.addEventListener('click', () => {
    unhideSection(instructionsScreen);
    hideSections(firstScreen);
    backButton1.addEventListener('click', () => {
        unhideSection(firstScreen);
        hideSections(instructionsScreen);
    });
  });

/** Shows the credits */
creditsToButton.addEventListener('click', () => {
    unhideSection(creditsScreen);
    hideSections(firstScreen);
    backButton2.addEventListener('click', () => {
        unhideSection(firstScreen);
        hideSections(creditsScreen);
    });

});

/** Starts the game */
playButton.addEventListener('click', () => {
    hideSections(firstScreen);
    convertTitle();
    unhideSection(secondScreen);
    getAllPresidents().then(data=> {
        dataPresidents = data;
        filterNoImage(dataPresidents);
        generateCpuPlayers(dataPresidents);
        extractImages(cpuSelection);
        assignImagesToPlayers(cpuImages, cpuPlayersSelection);
        //TODO: create all 48 selectable president miniatures
        //TODO: assign user selection miniatures
    });
    goButton.addEventListener('click', ()=>{
        arenaCall();
    });
});

function arenaCall() {
    hideSections(secondScreen);
    unhideSection(thirdScreen);
    assignImagesToPlayers(cpuImages, cpuPlayersArena);
    //TODO: assign user selection miniatures from previous selection
    //TODO: calculate values of the presidents
    fightButton.addEventListener('click', ()=>{
        fightCall();
    });
};

function fightCall() {
    hideSections(thirdScreen);
    unhideSection(fourthScreen);
    //TODO: calculate winner
    //TODO: update final score report
    againButton.addEventListener('click', ()=>{
        window.location.reload();
    });
};