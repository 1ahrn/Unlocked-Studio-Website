// Anime information
const animeInfo = {
    anime1: {
        title: "SILVERSTONE PART 1: ORIGIN",
        description: "Yusuf Muhammad, also known as Silverstone, is a 14-year-old high school student whose life takes a dramatic turn when he discovers an alien power source. This mysterious force grants him extraordinary abilities, but it also thrusts him into a world of danger and responsibility far beyond his years"
    },
    anime2: {
        title: "SILVERSTONE PART 2: LEGACY ",
        description: "Silverstone Part 2: Legacy, Yusuf Muhammad continues his journey, mastering the powers of Silverstone. Along the way, he encounters Megaone, a powerful alien with an insatiable desire to conquer Earth."
    },
    anime3: {
        title: "AGENT Z",
        description: "Agent Z is a young billionaire businessman whose life is shattered by a series of tragic losses. Driven by a thirst for justice and vengeance, he leaves behind his luxurious lifestyle to become a world-class spy."
    },
    anime4: {
        title: "My Hero Academia",
        description: "In a world where nearly everyone has superpowers called Quirks, Izuku Midoriya, a Quirkless boy, dreams of becoming the greatest hero."
    },
    anime5: {
        title: "Demon Slayer",
        description: "Tanjiro Kamado becomes a Demon Slayer to avenge his family and cure his sister, who was turned into a demon."
    },
    /*anime6: {
        title: "Death Note",
        description: "Light Yagami finds a supernatural notebook that grants him the power to kill anyone whose name he writes in it."
    },
    anime7: {
        title: "Sword Art Online",
        description: "Players get trapped in a virtual reality MMORPG, where the only way to escape is to clear all 100 floors, but dying in the game means dying in real life."
    },
    anime8: {
        title: "Fullmetal Alchemist: Brotherhood",
        description: "Brothers Edward and Alphonse Elric use alchemy in their quest to restore their bodies after a failed transmutation left Alphonse without a body."
    },
    anime9: {
        title: "Hunter x Hunter",
        description: "Gon Freecss embarks on a journey to become a Hunter and find his father, encountering dangerous creatures and skilled fighters along the way."
    },
    anime10: {
        title: "Tokyo Ghoul",
        description: "Ken Kaneki becomes a half-ghoul after a near-fatal encounter and must navigate a world where humans and ghouls are at odds."
    },
    anime11: {
        title: "Jujutsu Kaisen",
        description: "Yuji Itadori becomes entangled in the world of jujutsu sorcerers after swallowing a cursed object and gaining the power of a powerful cursed spirit."
    },
    anime12: {
        title: "Dragon Ball Z",
        description: "Goku and his friends defend Earth from powerful foes like Saiyans, androids, and intergalactic tyrants while uncovering his own Saiyan heritage."
    },
    anime13: {
        title: "Fairy Tail",
        description: "Lucy Heartfilia teams up with the powerful wizard Natsu Dragneel and other Fairy Tail guild members to go on magical adventures and battle dark forces."
    },
    anime14: {
        title: "Bleach",
        description: "Ichigo Kurosaki, a high school student who can see ghosts, becomes a Soul Reaper and fights evil spirits known as Hollows to protect the living and the dead."
    }*/
};

// Show popup
function showPopup(anime) {
    const popupContainer = document.getElementById("popup-container");
    const animeTitle = document.getElementById("anime-title");
    const animeDescription = document.getElementById("anime-description");

    animeTitle.innerText = animeInfo[anime].title;
    animeDescription.innerText = animeInfo[anime].description;
    
    popupContainer.style.display = "flex";
}

// Hide popup
function hidePopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";
}
