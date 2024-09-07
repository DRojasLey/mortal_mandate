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
        cpuImages = extractImages(cpuSelection);
        assignImagesToPlayers(cpuImages, cpuPlayersSelectionElements);
        //TODO: create all selectable president miniatures:
        getAvailablePlayers(dataPresidents, cpuSelection);
        availablePresidentsImages = extractImages(availablePresidentsNoBroken);
        createNewListElement(availablePresidentsNoBroken);
        setGoButton(1, availablePresidentsNoBroken);
        //TODO: assign user selection miniatures
    });
    
});






















function arenaCall() {
    hideSections(secondScreen);
    unhideSection(thirdScreen);
    assignImagesToPlayers(cpuImages, cpuPlayersArenaImage);
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