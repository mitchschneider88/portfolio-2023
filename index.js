window.onload = () => {

    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      columnWidth: 80,
      gutter: 20,
      itemSelector: '.grid-item',
    });

    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo) => {
            photo.style.opacity = 1;
    });
    
};

const descriptions = [
    "music directer / producer / sound design / programmer", // 0 crash
    "engineer / producer / sound design / keyboards / bass", // 1 secret.wav
    "composer / sound design", // 2 half light
    "producer / engineer / keyboards / programmer", // 3 gpt
    "music director / sound design / programmer", // 4 snl
    "coachella: music director / producer / sound design / programmer", // 5 coachella
    "full cycle design and development in c++/juce of a character reverb plugin, based on an emulation of a classic hardware reverb bussed through reel to reel tape", // 6 taped spaces
    "kontakt programming for a lofi felt piano with unique tonal weight", // 7 dustbowl
    "kontakt programming for a sub bass sampled to sit perfectly in any arrangement or mix", // 8 lo
    "kontakt programming and sampling for a scoring tool created from a tape-machine-processed piano", // 9 ekotape
    "design & development of a max device that integrates seamlessly with directout's 'Buffer Loop Detection System' & 'Enhanced Automatic Redundancy Switching', enabling stable and fully automatic playback redundancy in high pressure environments", // 10 BLDS looper
    "music director / sound design / programmer / keyboards", // 11 bbc
    "custom tilt eq dsp algorithm implentation for Audio Developers Conference 2023 mentorship program assignment", // 12 ADC assignment
    "engineer / producer / sound design", // 13 secret.wav zeke
    "boiler room: additional sound design", // 14 boiler room
    "brat tour: music direction", // 15 brat
    "sweat tour: music direction for Charli XCX & Troye Sivan", // 16 sweat
    "GCDS SS25: music arrangement & editing", // 17 GCDS
    "music direction / broadcast mix supervision", // 18 SNL50
    "music direction / programming" // 19 stgte
];



function showText(index, descriptionIndex) {
    // Hide all photos except the one being hovered over
    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo, i) => {
        if (i !== index) {
            photo.style.opacity = 0;
        }
    });

    var element = document.createElement("p");

    element.id = "description"

    element.textContent = descriptions[descriptionIndex];

    photos[index].appendChild(element);

}

function hideText(index) {
    // Restore the visibility of all photos
    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo) => {
        photo.style.opacity = 1;
    });

    var elementToRemove = document.getElementById("description");

    if (elementToRemove)
    {
        elementToRemove.remove();
    }

}

