



/**Hide all non essential sections
* @param {string} section name of the section to hide from the page
*/
function hideSections(section) {
    section.style.display = 'none';
}
/**Unhide a section
* @param {string} section  name of the section to show in the page
*/
function unhideSection(section) {
    section.style.display = 'flex';
};

/**convert the title for gameplay */
function convertTitle(){
    tittleContainer.removeAttribute('class', 'titleContainer');
    tittleContainer.setAttribute('class', 'titleContainerInGame');
    maintittle.removeAttribute('class', 'mainTitle');
    maintittle.setAttribute('class', 'mainTitleInGame');
    subtitle.removeAttribute('class', 'subTitle');
    subtitle.setAttribute('class', 'subTitleInGame');
};

/**Fetch presidents data from API
* Async function, fetches presidents data
*/
const getAllPresidents = async () => {
    const response = await fetch('https://api-colombia.com/api/v1/President');
    const data = await response.json() // get data from the promise
    return data;
};


//DATA FILTERING BLOCK
/**filter only presidents that have images
* @param {array} array to filter
* @returns array with objects
* will filter given array and reassign dataPresidents for only image holders
*/
function filterNoImage(array) {
    const noimagenull = array.filter(obj => obj.image !== "null" && obj.image !== "");
    return noimagenull
};
/**Filters the duplicate objects from the array
    *
    * @param {Array} availablePresidents
    */
function filterDuplicates(availablePresidents) {
    const seen = new Set();
    let availablePresidentsNoDups = [];
    for (const obj of availablePresidents) {
        const key = `${obj.name}-${obj.lastName}`;
        if (!seen.has(key)) {
            seen.add(key);
            availablePresidentsNoDups.push(obj);
        }
    }
    return availablePresidentsNoDups;
}
/**Filters the known broken images
    *
    * @param {Array} objects presidents list
    */
function filterBrokenImages(objects) {
    let availablePresidentsNoBroken = [];
    for (const obj of objects) {
        if ((obj.name !== "Guillermo Leon" && obj.lastName !== "Valencia")) {
            if (obj.name !== "Diego Euclides" && obj.lastName !== "De Angulo Lemos"){
                availablePresidentsNoBroken.push(obj);
            }
        }
    }
    return availablePresidentsNoBroken;
}
/**removes duplicates and broken images
 * @param {array} filteredPlayerList 
 * @returns filtered array of objects
 */
function filterData(filteredPlayerList) {
    let availablePresidents = filteredPlayerList;
    availablePresidents = filterDuplicates(availablePresidents);
    availablePresidents = filterBrokenImages(availablePresidents);
    return availablePresidents
};
//DATA FIlTERING BLOCK END


/**Get random number
* generates random numbers within the given object length
* @param {Array} array array to get the maximum number
*/
function getRandomIndex(arraya) {
    return Math.floor(Math.random() * arraya.length);
}

/** will iterate on the array and return a single object
* @param {presidents Array array to extract president from
    * @returns object single president object
    */
function getRandomPresident(arrayb) {
        const randomIndex = getRandomIndex(arrayb);
        return arrayb[randomIndex];
}

/**Generate CPU players
    * @param {Array} arrayc valid presidents array
    * @returns undefined
    * Adds 3 elements to the CPU selection
    */
function generateCpuPlayers(arrayc) {
    let cpuSelectionInternal = [];
    for (let index = 0; index < 3; index++) {
        let newPresi;
        do {
            newPresi = getRandomPresident(arrayc);
        } while (cpuSelectionInternal.includes(newPresi));
        cpuSelectionInternal.push(newPresi);
    }
    return cpuSelectionInternal;
}

/**extract images from an array with objects that contain the 'image' key
    * @param {Array} selectionArray array with objects to extract images
    * @returns undefined
    * reassigns the cpuImages variable
    */
function extractImages(selectionArray) {
        let onlyImages = selectionArray.reduce((imagesArray, objectA) => {
            imagesArray.push(objectA.image);
            return imagesArray
        }, []);
        return onlyImages;
};

/**Assigns images to each element of a given array based on other array
    *
    * @param {Array} urlsArray should include URLs of each image to assign
    * @param {Array} playersArray should have the same length as the url array
    * @returns undefined
    * it will mutate the DOM elements to add images
    */
function assignImagesToPlayers(urlsArray, playersArray) {
    for (let i = 0; i < urlsArray.length; i++) {
        playersArray[i].src = urlsArray[i];
    }
};

/** Gets array of players not selected by CPU
 *
 * @param {Array} filteredPlayerList
 * @param {Array} cpuSelectionList
 * @returns array of objects
 */
function getAvailablePlayers(filteredPlayerList, cpuSelectionList){
    let availablePresidentsInternal = [];
    for (const element of filteredPlayerList) {
        if (!cpuSelectionList.includes(element)) {
            availablePresidentsInternal.push(element);
        }
    }
    return availablePresidentsInternal;
}

/**creates li elements for each element in an array
 * adds event listeners to each element
 * @param {array} availablePresidentsArrayA  
 */
function createNewListElement(availablePresidentsArrayA) {
    actionCounter++

    if (presidentList.childElementCount !== 0) {
        do {
            presidentList.removeChild(presidentList.lastChild);
        } while (presidentList.hasChildNodes());
    }
    let availablePresidentsImages= [];
    availablePresidentsImages = extractImages(availablePresidentsArrayA);
    //
    availablePresidentsArrayA.forEach((element, index) => {
        /**Remove the empty placeholder */
        presidentPlaceholder.remove();
        /**DOM declarations for the new element */
        let newLi = document.createElement('li');
        let newLabel = document.createElement('label');
        let newImg = document.createElement('img');
        let newInput = document.createElement('input');
        /**Appending elements */
        newLi.appendChild(newLabel);
        newLi.appendChild(newInput);
        newLabel.appendChild(newImg);
        /**Set attributes */
        newLabel.setAttribute('for', `president${index}`);
        newImg.setAttribute('class', 'chooseImage');
        newImg.setAttribute('src', element.image);
        newImg.setAttribute('alt', element.lastName);
        newInput.setAttribute('type', 'radio');
        newInput.setAttribute('class', 'chooseBox');
        newInput.setAttribute('id', `president${index}`);
        newInput.setAttribute('name', 'selectablePresidents');
        newInput.setAttribute('value', element.id);
        /* Setting the event listeners */
        newInput.addEventListener('change', ()=>{
            executeSelection(availablePresidentsArrayA);
        });
        /**TODO: ADD EVENT LISTENERS TO THE CHECKBOXES */
        /**Append the elements to the list */
        presidentList.appendChild(newLi);
        /**Remove the loading */
        loadingMessage.remove();
    });
};

function executeSelection(availablePresidentsArrA) {
    const firstChecked = document.querySelector('.chooseBox:checked');
    if ( actionCounter <= 1 ){
        userSelection[0] = extractObjectByID(firstChecked.value, availablePresidentsArrA);
        setGoButton(availablePresidentsArrA);
    } else if ( actionCounter === 2 ){
        userSelection[1] = extractObjectByID(firstChecked.value, availablePresidentsArrA);
        setGoButton (availablePresidentsArrA);
    } else if ( actionCounter === 3 ){
        userSelection[2] = extractObjectByID(firstChecked.value, availablePresidentsArrA);

    } else {
        console.log(`error! ${userSelection.length} not valid amount of numbers in the useSelection array`)
    }
    console.log(userSelection)
};

/** get object from the selection
 *
 * @param {number} id ()
 * @param {Array} availablePresiArray
 * @returns object corresponding to the given id
 */
function extractObjectByID(id, availablePresiArray) {
    for (const meObject of availablePresiArray){
        if (meObject.id === (+id)){
            return meObject;
        } else {
            console.log('object is not the id, moving to next object')
        };
    };
};

function setGoButton( currentPresidentsdata ) {
    if ( actionCounter === 1 ){
        goButton.innerText = 'SIGUIENTE';
        goButton.addEventListener('click', () => {
            nextButtonAction( currentPresidentsdata )
        });
    } else if (actionCounter === 2) {
        goButton.removeEventListenerEventListener('click', () => {
            nextButtonAction( currentPresidentsdata )
        });
        goButton.innerText = 'SIGUIENTE';
        goButton.addEventListener('click', () => {
            nextButtonAction( currentPresidentsdata )
        });
    } else if (actionCounter === 3) {
        goButton.removeEventListener('click', () => {
            nextButtonAction( currentPresidentsdata )
        });
        goButton.innerText = 'LISTO!';
        goButton.addEventListener('click', () => {
            arenaCall();
    });
    } else {
        console.log(`setGoButton was called incorrectly, the actionCounter is: ${actionCounter}`);
    }
};

function nextButtonAction( currentPresidentsdata1 ){
    let updatedPresidents = [];
    if ( actionCounter === 1 ){
        userPlayersSelectionImage[0].src = userSelection[0].image;
        updatedPresidents = filterByID( userSelection[0].id , currentPresidentsdata1 );
        createNewListElement(updatedPresidents);
    } else if ( actionCounter === 2 ) {
        userPlayersSelectionImage[1].src = userSelection[1].image
        updatedPresidents = filterByID( userSelection[1].id , currentPresidentsdata1 );
        createNewListElement(updatedPresidents);
    } else if ( actionCounter > 2 ){
        console.log('nextButtonAction shouldn`t be called more than 2 times' );
    } else {
        console.log(`Next Button action was called incorrectly while action counter was: ${actionCounter}`);
    };
};






/** removes the object with 'id' from the array
 *
 * @param {number} id
 * @param {array} arrayD
 * @returns array without id element
 */
function filterByID(id, arrayD) {
    let availablePresidentsFilter = [];
    for (const meObject of arrayD){
        if (meObject.id !== (+id)){
            availablePresidentsFilter.push(meObject)
        }
    }
    return availablePresidentsFilter
};
