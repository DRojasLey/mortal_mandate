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

/**filter only presidents that have images
* @param {array} array to filter
* @returns undefined
* will filter given array and reassign dataPresidents for only image holders
*/
function filterNoImage(array) {
    const noimagenull = array.filter(obj => obj.image !== "null" && obj.image !== "");
    dataPresidents = noimagenull;
};


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
    * @param {array} arrayc valid presidents array
    * @returns undefined
    * Adds 3 elements to the CPU selection
    */
function generateCpuPlayers(arrayc) {
        for (let index = 0; index < 3; index++) {
            let newPresi;
            do {
                newPresi = getRandomPresident(arrayc);
            } while (cpuSelection.includes(newPresi));
            cpuSelection.push(newPresi);
        }
}

/**extract images from an array with objects that contain the 'image' key
    * @param {array} selectionArray array with objects to extract images
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
}

/**Filters the duplicate objects from the array
    *
    * @param {Array} availablePresidents
    */
function filterDuplicates(availablePresidents) {
        const seen = new Set();
        for (const obj of availablePresidents) {
            const key = `${obj.name}-${obj.lastName}`;
            if (!seen.has(key)) {
                seen.add(key);
                availablePresidentsNoDups.push(obj);
            }
        }
}

/**Filters the known broken images
    *
    * @param {Array} objects presidents list
    */
function filterBrokenImages(objects) {
        for (const obj of objects) {
            if ((obj.name !== "Guillermo Leon" && obj.lastName !== "Valencia")) {
                if (obj.name !== "Diego Euclides" && obj.lastName !== "De Angulo Lemos"){
                    availablePresidentsNoBroken.push(obj);
                }
            }
        }
}

/** Will add objects to the available Presidents array
    *
    * @param {Array} filteredPlayerList all active presidents that have image links
    * @param {Array} cpuSelectionList  previously generated CPU selections
    * @returns undefined
    */
function getAvailablePlayers(filteredPlayerList, cpuSelectionList) {
        for (const element of filteredPlayerList) {
            if (!cpuSelectionList.includes(element)) {
                availablePresidents.push(element);
            }
        }
        filterDuplicates(availablePresidents);
        filterBrokenImages(availablePresidentsNoDups);
};

function filterByID(id, arrayD) {
        availablePresidents = [];
        for (const meObject of arrayD){
            console.log(`id: ${typeof +id}, presiID: ${typeof meObject.id}`)
            if (meObject.id !== (+id)){
                availablePresidents.push(meObject)
            }
        }
};

/**creates li elements for each element in an array
 * adds event listeners to each element
 * @param {array} availablePresidentsArrayA  
 */
function createNewListElement(availablePresidentsArrayA) {
    console.log(availablePresidentsArrayA);
    
    if (presidentList.childElementCount !== 0) {
        do {
            presidentList.removeChild(presidentList.lastChild);
        } while (presidentList.hasChildNodes());
    }
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
        newInput.addEventListener('change', ()=>{
            executeSelection()
        });
        /**TODO: ADD EVENT LISTENERS TO THE CHECKBOXES */
        /**Append the elements to the list */
        presidentList.appendChild(newLi);
        /**Remove the loading */
        loadingMessage.remove();
    });
};

function setGoButton(number, currentPresidentsdata) {
        if (number = 1 ){
            goButton.innerText = 'SIGUIENTE';
            goButton.addEventListener('click', () => {
                filterByID(userSelection[0], currentPresidentsdata)
                createNewListElement(availablePresidents)
                
            })
        } else if (number === 2) {
            goButton.removeEventListener('click', () => {
                createNewListElement(currentPresidentsdata)
            })
            goButton.addEventListener('click', () => {
                createNewListElement(currentPresidentsdata)
            })
        } else if (number === 3) {
            goButton.innerText = 'LISTO!'
        }
};

function extractObjectByID(id) {
        for (const meObject of availablePresidents){
            if (meObject.id === (+id)){
                userSelectionObjects.push(meObject)
            }
        }
};

function extractImageFromSingleObject(object){

};

function userSelectionAddImage(actionNumber){
        if (actionNumber === 1){
            extractObjectByID(userSelection[0])
            
            assignImagesToPlayers(userSelectionImages, userPlayersSelectionImage);
        } else if (actionNumber === 2){
            
        }else if (actionNumber === 3){
            
        }
};

function executeSelection() {
        const firstChecked = document.querySelector('.chooseBox:checked');
        if (userSelection.length <= 1 ){
            userSelection[0] = firstChecked.value
            userSelectionAddImage(1);
        } else if (userSelection.length === 2 ){
            userSelection[1] = firstChecked.value
        } else if (userSelection.length === 3 ){
            userSelection[2] = firstChecked.value
        } else {
            console.log(`error! ${userSelection.length} not valid amount of numbers in the useSelection array`)
        }
        console.log(userSelection)
};

