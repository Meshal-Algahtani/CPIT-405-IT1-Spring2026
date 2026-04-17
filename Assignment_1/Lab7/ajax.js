const XhrButton = document.querySelector('#XhrButton');
const userInput = document.querySelector('input');
const resultsContainer = document.getElementById('results');

//This section for XHR request to Unsplash API
XhrButton.addEventListener('click', reqXHR);

function reqXHR(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();


    xhr.addEventListener("readystatechange", function (photo) {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);

                console.log("1. Full API Response:", data);

                resultsContainer.innerHTML = '';

                if (data.results && Array.isArray(data.results)) {

                    data.results.forEach(function (photo, index) {

                        if (photo && photo.urls && photo.urls.small) {
                            const imgElement = document.createElement('img');
                            imgElement.src = photo.urls.regular;
                            imgElement.alt = photo.alt_description || 'Unsplash image';

                            imgElement.style.width = '300px';
                            imgElement.style.height = '600px';
                            imgElement.style.objectFit = 'cover';
                            imgElement.style.margin = '10px';
                            imgElement.style.borderRadius = '8px';

                            resultsContainer.appendChild(imgElement);
                        } else {
                            console.warn(`2. Item at index ${index} is missing urls!`, photo);
                        }

                    });
                } else {
                    console.error("3. The 'results' array is missing from the data!", data);
                }

            } else {
                console.log("Error:", this.status, this.responseText);
            }
        }
    });


    xhr.open("GET", `https://api.unsplash.com/search/photos?query=${userInput.value}`);
    xhr.setRequestHeader("Authorization", "Client-ID IaMBugt2sxO5FpZ5VNmb4vA131FD4dPffP1UxwtOEHM");

    xhr.send();
}
// End of XHR request section
// This section for Fetch API request to Unsplash API
const fetchButton = document.querySelector('#PromButton');
fetchButton.addEventListener('click', reqFetch);


function reqFetch(e) {
    e.preventDefault();
    fetch(`https://api.unsplash.com/search/photos?query=${userInput.value}`, {
        headers: {
            "Authorization": "Client-ID IaMBugt2sxO5FpZ5VNmb4vA131FD4dPffP1UxwtOEHM"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("1. Full API Response:", data);
        resultsContainer.innerHTML = '';

        if (data.results && Array.isArray(data.results)) {
            data.results.forEach(function (photo, index) {
                if (photo && photo.urls && photo.urls.small) {
                    const imgElement = document.createElement('img');
                    imgElement.src = photo.urls.regular;
                    imgElement.alt = photo.alt_description || 'Unsplash image';

                    imgElement.style.width = '300px';
                    imgElement.style.height = '600px';
                    imgElement.style.objectFit = 'cover';
                    imgElement.style.margin = '10px';
                    imgElement.style.borderRadius = '8px';

                    resultsContainer.appendChild(imgElement);
                } else {
                    console.warn(`2. Item at index ${index} is missing urls!`, photo);
                }
            });
        } else {
            console.error("3. The 'results' array is missing from the data!", data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
// End of Fetch API request section
// This section for Axios request to Unsplash API
const axiosButton = document.querySelector('#asyncButton');
axiosButton.addEventListener('click', reqAxios);   

function reqAxios(e) {
    e.preventDefault();
    axios.get(`https://api.unsplash.com/search/photos?query=${userInput.value}`, {
        headers: {
            "Authorization": "Client-ID IaMBugt2sxO5FpZ5VNmb4vA131FD4dPffP1UxwtOEHM"
        }
    })
    .then(response => {
        console.log("1. Full API Response:", response.data);
        resultsContainer.innerHTML = '';

        if (response.data.results && Array.isArray(response.data.results)) {
            response.data.results.forEach(function (photo, index) {
                if (photo && photo.urls && photo.urls.small) {
                    const imgElement = document.createElement('img');
                    imgElement.src = photo.urls.regular;
                    imgElement.alt = photo.alt_description || 'Unsplash image';

                    imgElement.style.width = '300px';
                    imgElement.style.height = '600px';
                    imgElement.style.objectFit = 'cover';
                    imgElement.style.margin = '10px';
                    imgElement.style.borderRadius = '8px';

                    resultsContainer.appendChild(imgElement);
                } else {
                    console.warn(`2. Item at index ${index} is missing urls!`, photo);
                }
            });
        } else {
            console.error("3. The 'results' array is missing from the data!", response.data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
// End of Axios request section

// This section for Async/Await request to Unsplash API
const asyncButton = document.querySelector('#asyncAwaitButton');
asyncButton.addEventListener('click', reqAsyncAwait);