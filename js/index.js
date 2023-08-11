// Code ref. teacher Patryk (Kodehode/Jobloop) #drumKit concept

// folder with the audio files
const soundFolder = "sounds/"

// array sound list
const soundList = [
  { key: "q", fileName: "key01.mp3", blackKey: true, },
  { key: "w", fileName: "key02.mp3", blackKey: true, },
  { key: "e", fileName: "key03.mp3", blackKey: true, },
  { key: "r", fileName: "key04.mp3", blackKey: true, },
  { key: "t", fileName: "key04.mp3", blackKey: true, },
  { key: "y", fileName: "key05.mp3", blackKey: true, },
  { key: "u", fileName: "key06.mp3", blackKey: true, },
  { key: "i", fileName: "key07.mp3", blackKey: true, },
  { key: "o", fileName: "key08.mp3", blackKey: true, },
  { key: "p", fileName: "key09.mp3", blackKey: true, },

  { key: "a", fileName: "key10.mp3", whiteKey: true, },
  { key: "s", fileName: "key11.mp3", whiteKey: true, },
  { key: "d", fileName: "key12.mp3", whiteKey: true, },
  { key: "f", fileName: "key13.mp3", whiteKey: true, },
  { key: "g", fileName: "key14.mp3", whiteKey: true, },
  { key: "h", fileName: "key15.mp3", whiteKey: true, },
  { key: "j", fileName: "key16.mp3", whiteKey: true, },
  { key: "k", fileName: "key17.mp3", whiteKey: true, },
  { key: "l", fileName: "key18.mp3", whiteKey: true, },
  { key: "c", fileName: "key19.mp3", whiteKey: true, },
  { key: "v", fileName: "key20.mp3", whiteKey: true, },
  { key: "b", fileName: "key21.mp3", whiteKey: true, },
  { key: "n", fileName: "key22.mp3", whiteKey: true, },
  { key: "m", fileName: "key23.mp3", whiteKey: true, },
];


// soundList array and soundFolder as parameters
function createPiano(soundList, soundFolder) { 
  // creates a piano container element
  const pianoContainer = document.createElement("div");
  
  soundList.forEach((soundInfo) => {
    // iterates through the soundList to create key buttons
    const keyButton = document.createElement("button");
    
    const pianoContainer = document.getElementById("piano");
    
    // add class to style in css stylesheet
    if (soundInfo.blackKey) {
      keyButton.classList.add("black-key");
    } else {
      keyButton.classList.add("white-key");
    }
   
    const sound = new Audio(soundFolder + soundInfo.fileName);
    
    // Play sound on button click
    keyButton.addEventListener("click", () => playSound(sound));
    
    // Play sound on keydown 
    document.addEventListener("keydown", (event) => {
      if (event.key === soundInfo.key) {
        playSound( sound );
      }
    });
    
    pianoContainer.appendChild(keyButton);
  });
  
  document.body.appendChild(pianoContainer);
}

function playSound(sound) {
  // reset the sound playback time and play the sound
  sound.currentTime = 0;
  sound.play();
}

createPiano(soundList, soundFolder);

