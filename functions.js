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
    console.log(cpuSelection);
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
    cpuImages = onlyImages;
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