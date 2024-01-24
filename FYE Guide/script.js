        const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText ="Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
});
//-------------------------------------pdf Document javascript functions----------------------------------
initPDFViewer=()=>{
    $("#mypdf_viewer").html("")
    pdfjsLib.getDocument("FYE_Handbook.pdf").promise.then(pdfDoc=>{
        let pages = pdfDoc._pdfInfo.numPages
        for(let i=1;i<=pages;i++){
        pdfDoc.getPage(i).then(page=>{
            let pdfCanvas = document.createElement("canvas")
            let context = pdfCanvas.getContext("2d")
            let pageViewPort = page.getViewport({scale:2})
            pdfCanvas.width = pageViewPort.width
            pdfCanvas.height = pageViewPort.height
            $("#mypdf_viewer").append(pdfCanvas)


            page.render({
                canvasContext: context,
                viewport: pageViewPort
            })
        }).catch(pageError =>{
            console.log(pageError)
        })
    }
    }).catch(pdfError =>{
        console.log(pdfError)
    })
}
    $(function(){
    initPDFViewer()
})


//-------------------------------------campus navigator javascript functions-------------------------------------
function initMap(){
    //map location
    var options={
        center: {lat: -25.4357557988, lng: 30.9828932223 },
        zoom: 16


    }
    
    //our map
    map = new google.maps.Map(document.getElementById("map"),options);


    
    function addMaker(property){
        var marker = new google.maps.Marker({
            position:property.location,
            map:map,
            draggable: false
        });

        const detailWindow = new google.maps.InfoWindow({
            content: property.content
        });

        marker.addListener("click", ()=>{
        detailWindow.open(map, marker);
        })
    }
    
    

    // ______________________________________________________________________________________  __________   ___    


// Array to store marker details
const markers = [
    { name: "Building 5", location: { lat: -25.435642, lng: 30.982423 }, content: '<h4> Building 5</h4>' },
    { name: "Multi Purpose Hall", location: { lat: -25.434814, lng: 30.980042 }, content: '<h4> Multi-Purpose Hall</h4>' },
    { name: "Library", location: { lat: -25.436912, lng: 30.982367 }, content: '<h4> library</h4>' },
    { name: "Main Gate", location: { lat: -25.437396, lng: 30.981636  }, content: '<h4> Main Gate</h4>' },
    { name: "Building 13", location: { lat: -25.437154 , lng: 30.980751 }, content: '<h4> Building 13 </h4>' },
    { name: "Block E", location: { lat: -25.436766, lng:30.981137 }, content: '<h4> Block E</h4>' },
    { name: "Block A", location: { lat: -25.436496, lng: 30.981032}, content: '<h4> Block A </h4>' },
    { name: "Block F", location: { lat: -25.436879, lng:  30.981349}, content: '<h4> Block F </h4>' },
    { name: "Building 7", location: { lat: -25.435465, lng: 30.980610 }, content: '<h4> Building 7 </h4>' },
    { name: "Block C", location: { lat: -25.436748 , lng:  30.981475}, content: '<h4> Block C </h4>' },
    { name: "DH", location: { lat: -25.436889 , lng: 30.980379 }, content: '<h4> DH</h4>' },
    { name: "Gym", location: { lat: -25.434788, lng: 30.980513 }, content: '<h4> Gym </h4>' },
    { name: "SRC Offices", location: { lat: -25.434718, lng: 30.980357  }, content: '<h4> SRC Offices </h4>' },
    { name: "Building 2", location: { lat: -25.437239, lng: 30.982293 }, content: '<h4> Building 2 </h4>' },
    { name: "Building 9", location: { lat: -25.436361, lng: 30.984592  }, content: '<h4> Building 9 </h4>' },
    { name: "Hospitality", location: { lat:  -25.43624891529165 , lng: 30.98568108154506 }, content: '<h4> Hospitality </h4>' },
    { name: "Building 10 East", location: { lat: -25.436969, lng: 30.984637 }, content: '<h4> Building 10 East </h4>' },
    { name: "Building 10 West", location: { lat: -25.437088 , lng:  30.984098}, content: '<h4> Building 10 West </h4>' },
    { name: "Building 4", location: { lat: -25.436255, lng: 30.983060 }, content: '<h4> Building 4 </h4>' },
    { name: "Old Admin", location: { lat: -25.435894, lng: 30.982963 }, content: '<h4> Old Admin </h4>' },
    { name: "Building 8", location: { lat: -25.436300, lng: 30.985654 }, content: '<h4> Building 8 </h4>' },
    { name: "Lecture Halls", location: { lat: -25.435572, lng: 30.982785 }, content: '<h4> Lecture Hall </h4>' },
    { name: "Parking", location: { lat: -25.436555 , lng: 30.985241 }, content: '<h4> Parking </h4>' },
    { name: "Swimming Pool", location: { lat: -25.434486, lng: 30.980516 }, content: '<h4> Swimming Pool </h4>' },
    { name: "Tennis Court", location: { lat: -25.434429, lng: 30.980039 }, content: '<h4>  Tennis Court </h4>' },
    { name: "Auditoriums", location: {lat: -25.436346, lng: 30.983586},content:'<h4>Auditoriums</h4>'},
    { name: "Parking Bay", location: {lat: -25.436558, lng: 30.981825},content:'<h4>Parking Bay</h4>'},
    { name: "Hospitality", location: { lat:  -25.436701153602833 , lng: 30.985818238723212 }, content: '<h4> Hotel & Conference </h4>' },
     { name: "Building 6", location: { lat:  -25.435327830165257 , lng: 30.97780973896203 }, content: '<h4> Building 6 </h4>' },
     { name: "Sports field", location: { lat:  -25.441275255145314 , lng: 30.98651581420242 }, content: '<h4> Sports Field </h4>' },
   
   
   

 

 
];

// Function to find a marker by its name
function findMarkerByName(name) {
    return markers.find(marker => marker.name.toLowerCase() === name.toLowerCase());
}

// Function to handle searching for a marker by name entered in the "Destination" field
let currentMarker = null;
function searchMarker() {
    const destinationInput = document.getElementById("to");
    const destinationName = destinationInput.value.trim();

    // Find the marker details based on the entered name
    const foundMarker = findMarkerByName(destinationName);

    if (foundMarker) {
        // Get the coordinates of the found marker
        const destinationCoordinates = foundMarker.location;
        
        
      // Set the input field value to the marker's name (optional)
        destinationInput.value = foundMarker.name;
         // Add or update the marker on the map
         removeCurrentMarker();

        // Add the new marker to the map
        addMarker(destinationCoordinates, foundMarker.content);

        // Calculate and display the route to the found marker
        calculateAndDisplayRoute(destinationCoordinates);
        
    } else {
        console.log("Marker not found");
        // Handle the case when the entered marker name doesn't match any in your list
    }
}
function removeCurrentMarker() {
    if (currentMarker) {
        currentMarker.setMap(null);
        currentMarker = null;
    }
}

// Function to add a marker to the map
function addMarker(location, content) {
    // Add the new marker to the map
    // This assumes you have a function to add a marker to the map
    // The 'content' parameter contains the HTML content for the marker's info window

    // For example:
    currentMarker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: false
    });

    const detailWindow = new google.maps.InfoWindow({
        content: content
    });

    currentMarker.addListener("click", () => {
        detailWindow.open(map, currentMarker);
    });
}

    // ______________________________________________________________________________________  __________   ___  
let directionsRenderer;

function calculateAndDisplayRoute(destinationCoordinates) {

    if (directionsRenderer) {
        directionsRenderer.setMap(null); // Clear previous directions from the map
    }

    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    

    const directionsService = new google.maps.DirectionsService();
    const selectedMode = document.getElementById("mode").value;
  
    directionsService
      .route({
        origin: document.getElementById("from").value,
        destination: destinationCoordinates,
        travelMode: google.maps.TravelMode[selectedMode],

        
      })
      .then((response) => {

        // Render the new directions
        directionsRenderer.setDirections(response);

      })
      .catch((e) => window.alert("Directions request failed due to " + e.message));
  }

// Event listener for when the "Destination" input changes
document.getElementById("to").addEventListener('change', searchMarker);
}
// ---------------------------------------About Us-----------------------------------------------------------------

const swiper = new Swiper('.image-section', {

    autoplay:{
            delay: 3000,
            disableOnInteraction: false,
    },
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickacble:true,
      },
    
  });

//   -------------------------------------------Mentorship-----------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Select the div element by its ID
    const mentorshipMessage = document.getElementById("mentorship-message");

    // Check if the element exists before manipulating it
    if (mentorshipMessage) {
        // You can change the content of the div here
        mentorshipMessage.innerHTML = "<p.</p>";
    }
});

// Function to handle opening the pop-up message box for contacting mentors
function openMessageBox(email) {
   // Find the modal element
    const modal = document.getElementById('emailModal');

    // Get the input field inside the modal
    const emailInput = modal.querySelector('#recipientEmail');

    // Set the recipient's email in the input field
    emailInput.value = email;

    // Open the Bootstrap modal using jQuery (assuming you have jQuery loaded)
    $(modal).modal('show');
}

// Add event listeners to the 'Contact' buttons
const contactButtons = document.querySelectorAll('.btn-primary');
contactButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Find the respective mentor's email address
        const emailElement = this.parentElement.parentElement.querySelector('p:nth-child(3)');
        const email = emailElement.textContent.trim().split(' ')[1];

        // Open the pop-up message box to send an email
        openMessageBox(email);
    });
});

//   -------------------------------------------Email modal-----------------------------------------------------
// Function to send email
function sendEmail(recipient, message) {
    // You'd typically send this data to a server-side script (like Node.js or PHP)
    // Here, we'll just log the data to the console for demonstration purposes
    console.log('Sending email to:', recipient);
    console.log('Message:', message);
    // In a real application, you'd use AJAX or fetch to send this data to your server-side code
    // You'd then handle the email sending logic on the server and send the email using a service like Nodemailer (for Node.js) or PHP's mail function.
}

// Add event listener to the 'Send Email' button inside the modal
const sendEmailBtn = document.querySelector('#emailModal .btn-primary');
sendEmailBtn.addEventListener('click', function () {
    // Get recipient's email and message from the modal inputs
    const recipient = document.getElementById('recipientEmail').value;
    const message = document.getElementById('emailMessage').value;

    // Check if recipient and message are not empty
    if (recipient.trim() !== '' && message.trim() !== '') {
        // Call the function to send the email
        sendEmail(recipient, message);

        // Close the modal after sending the email (assuming you want to close it)
        const modal = document.getElementById('emailModal');
        $(modal).modal('hide');

        // Optional: Clear the input fields after sending the email
        document.getElementById('recipientEmail').value = '';
        document.getElementById('emailMessage').value = '';
    } else {
        // Display an error message or handle empty fields as needed
        console.error('Recipient or message is empty.');
    }
});

//   -------------------------------------------Tutorship-----------------------------------------------------
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});