const moodMessages = {
  1: { text: "Today feels heavy.", face: "😔" },
  2: { text: "This may be a tender sort of day.", face: "😟" },
  3: { text: "Not your easiest day.", face: "😕" },
  4: { text: "A little unsettled, perhaps.", face: "🙂" },
  5: { text: "Somewhere in between.", face: "😌" },
  6: { text: "There is some steadiness here.", face: "😊" },
  7: { text: "Things feel reasonably good.", face: "😊" },
  8: { text: "There is a nice lift in the day.", face: "😄" },
  9: { text: "This seems like a bright patch.", face: "✨" },
  10: { text: "Someone seems to be having a very good day.", face: "🌞" }
};

const songPools = {
  comforting: {
    english: [
      "The Book of Love — Peter Gabriel",
      "Rainbow — Kacey Musgraves",
      "Let It Be — The Beatles",
      "Fix You — Coldplay",
      "Fields of Gold — Eva Cassidy",
      "Bridge Over Troubled Water — Simon & Garfunkel"
    ],
    hindi: [
      "Iktara — Kavita Seth and Amit Trivedi",
      "Phir Le Aya Dil — Arijit Singh",
      "Aashiyan — Shreya Ghoshal and Nikhil Paul George",
      "Khaabon Ke Parinday — Alyssa Mendonsa and Mohit Chauhan",
      "Yun Hi Chala Chal — Udit Narayan, Hariharan, and Kailash Kher",
      "Safarnama — Lucky Ali"
    ],
    marathi: [
      "Mann Udhan Varyache — Shankar Mahadevan",
      "Kevadyacha Paan Tu — Ajay-Atul",
      "Kadhi Tu — Hrishikesh Ranade",
      "Saavar Re Mana — Swapnil Bandodkar",
      "Tu Jithe Mi Tithe — Avadhoot Gupte",
      "Sari Sari Raat — Bela Shende"
    ]
  },
  calming: {
    english: [
      "Holocene — Bon Iver",
      "Bloom — The Paper Kites",
      "Come Away With Me — Norah Jones",
      "Better Together — Jack Johnson",
      "Songbird — Fleetwood Mac",
      "Banana Pancakes — Jack Johnson"
    ],
    hindi: [
      "Shaam — Amit Trivedi, Nikhil D'Souza, and Neuman Pinto",
      "Dil Dhadakne Do — Priyanka Chopra and Farhan Akhtar",
      "Aao Milo Chale — Shaan and Ustad Sultan Khan",
      "Ilahi — Arijit Singh",
      "Tu Bin Bataye — Madhushree and Naresh Iyer",
      "Kyon — Papon and Sunidhi Chauhan"
    ],
    marathi: [
      "Gaarva — Milind Ingle",
      "Hi Chaal Turu Turu — Jaywant Kulkarni",
      "Reshmachya Reghanni — Asha Bhosle",
      "Yad Lagla — Ajay Gogavale",
      "Jiv Rangala — Ajay Gogavale and Shreya Ghoshal",
      "Mala Ved Lagale — Swapnil Bandodkar"
    ]
  },
  hopeful: {
    english: [
      "Here Comes the Sun — The Beatles",
      "Dog Days Are Over — Florence + The Machine",
      "Pocketful of Sunshine — Natasha Bedingfield",
      "Lovely Day — Bill Withers",
      "Three Little Birds — Bob Marley & The Wailers",
      "You Get What You Give — New Radicals"
    ],
    hindi: [
      "Aazaadiyan — Amit Trivedi and Neuman Pinto",
      "Kar Har Maidaan Fateh — Sukhwinder Singh and Shreya Ghoshal",
      "Love You Zindagi — Amit Trivedi and Jasleen Royal",
      "Patakha Guddi — Nooran Sisters",
      "Zinda — Siddharth Mahadevan",
      "Lakshya — Shankar Mahadevan"
    ],
    marathi: [
      "Apsara Aali — Ajay-Atul",
      "Deva Tujhya Gabharyala — Adarsh Shinde",
      "Khel Mandala — Ajay Gogavale",
      "Zingaat — Ajay-Atul",
      "Wajle Ki Bara — Bela Shende",
      "Kombadi Palali — Vaishali Samant and Anand Shinde"
    ]
  },
  energetic: {
    english: [
      "Walking on Sunshine — Katrina and the Waves",
      "September — Earth, Wind & Fire",
      "Can't Stop the Feeling! — Justin Timberlake",
      "Shut Up and Dance — WALK THE MOON",
      "Valerie — Mark Ronson feat. Amy Winehouse",
      "Dancing Queen — ABBA"
    ],
    hindi: [
      "Gallan Goodiyaan — Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Shankar Mahadevan, and Sukhwinder Singh",
      "Badtameez Dil — Benny Dayal and Shefali Alvares",
      "London Thumakda — Labh Janjua, Sonu Kakkar, and Neha Kakkar",
      "Senorita — Farhan Akhtar, Hrithik Roshan, Abhay Deol, and Maria del Mar Fernandez",
      "Uff Teri Adaa — Shankar Mahadevan and Alyssa Mendonsa",
      "Nachde Ne Saare — Jasleen Royal, Harshdeep Kaur, and Siddharth Mahadevan"
    ],
    marathi: [
      "Zingaat — Ajay-Atul",
      "Aali Thumkat Naar — Ajay-Atul",
      "Morya Morya — Ajay-Atul",
      "Shantabai — Sanjay Londhe",
      "Wajle Ki Bara — Bela Shende",
      "Hi Poli Saajuk Tupatali — Reshma Sonawane"
    ]
  },
  reflective: {
    english: [
      "Landslide — Fleetwood Mac",
      "Vienna — Billy Joel",
      "Both Sides Now — Joni Mitchell",
      "Fast Car — Tracy Chapman",
      "The Night We Met — Lord Huron",
      "Rivers and Roads — The Head and the Heart"
    ],
    hindi: [
      "Kun Faya Kun — A.R. Rahman, Javed Ali, and Mohit Chauhan",
      "Agar Tum Saath Ho — Alka Yagnik and Arijit Singh",
      "Tujhse Naraz Nahin Zindagi — Lata Mangeshkar",
      "Kabira — Tochi Raina and Rekha Bhardwaj",
      "Zindagi Kaisi Hai Paheli — Manna Dey",
      "Chupke Se — Sadhana Sargam and Murtuza Khan"
    ],
    marathi: [
      "Kadhi Tu — Hrishikesh Ranade",
      "Mann Udhan Varyache — Shankar Mahadevan",
      "Gaarva — Milind Ingle",
      "Saavar Re Mana — Swapnil Bandodkar",
      "Kitida Navyane — Mandar Apte",
      "Sairat Zaala Ji — Chinmayee Sripada and Ajay Gogavale"
    ]
  },
  creative: {
    english: [
      "Sweet Disposition — The Temper Trap",
      "Put Your Records On — Corinne Bailey Rae",
      "Dreams — Fleetwood Mac",
      "Send Me On My Way — Rusted Root",
      "Home — Edward Sharpe & The Magnetic Zeros",
      "Riptide — Vance Joy"
    ],
    hindi: [
      "Ude Dil Befikre — Benny Dayal",
      "Aal Izz Well — Sonu Nigam, Shaan, and Swanand Kirkire",
      "Masakali — Mohit Chauhan",
      "Matargashti — Mohit Chauhan",
      "Dil Chahta Hai — Shankar Mahadevan",
      "Journey Song — Anupam Roy and Shreya Ghoshal"
    ],
    marathi: [
      "Tik Tik Vajate Dokyat — Sonu Nigam and Sayali Pankaj",
      "Mala Jau De — Urmila Dhangar",
      "Aika Dajiba — Vaishali Samant",
      "Ye Go Ye Ye Maina — Ajay-Atul",
      "Gomu Sangtina — Hemant Kumar and Asha Bhosle",
      "Galavar Khali — Swapnil Bandodkar"
    ]
  },
  driving: {
    english: [
      "Drive — Incubus",
      "Life is a Highway — Tom Cochrane",
      "Sweet Home Alabama — Lynyrd Skynyrd",
      "I'm Yours — Jason Mraz",
      "Go Your Own Way — Fleetwood Mac",
      "Send Me On My Way — Rusted Root"
    ],
    hindi: [
      "Ilahi — Arijit Singh",
      "Safarnama — Lucky Ali",
      "Dil Chahta Hai — Shankar Mahadevan",
      "Khwabon Ke Parindey — Alyssa Mendonsa and Mohit Chauhan",
      "Yun Hi Chala Chal — Udit Narayan, Hariharan, and Kailash Kher",
      "Patakha Guddi — Nooran Sisters"
    ],
    marathi: [
      "Gaarva — Milind Ingle",
      "Mann Udhan Varyache — Shankar Mahadevan",
      "Apsara Aali — Ajay-Atul",
      "Jiv Rangala — Ajay Gogavale and Shreya Ghoshal",
      "Kadhi Tu — Hrishikesh Ranade",
      "Yad Lagla — Ajay Gogavale"
    ]
  }
};

const activities = {
  veryLow: [
    "Listen to three songs with your eyes closed.",
    "Take a warm shower and let it count as the task.",
    "Sit somewhere with tea or coffee without using the phone.",
    "Do absolutely nothing for ten minutes.",
    "Write three sentences about what is bothering you.",
    "Stretch slowly for five minutes."
  ],
  low: [
    "Doodle without trying to make anything perfect.",
    "Sketch something visible from the window.",
    "Make a tiny pencil drawing on any scrap of paper.",
    "Read a few pages of something enjoyable.",
    "Reorganize one tiny corner of the room.",
    "Message someone trusted with one honest sentence."
  ],
  calm: [
    "Sit quietly in the car after reaching home.",
    "Make a short playlist for the rest of the evening.",
    "Photograph interesting shadows or objects.",
    "Cook something simple and familiar.",
    "Watch the sunset if the timing is kind.",
    "Spend a few minutes somewhere with trees."
  ],
  creative: [
    "Draw something deliberately badly for fun.",
    "Make a tiny watercolor or pencil drawing.",
    "Sketch your coffee cup, keys, or stethoscope without judging it.",
    "Choose three colors and make small marks until the page feels less empty.",
    "Make a playlist named after today's weather.",
    "Photograph five ordinary objects as if they are part of a still life."
  ],
  outdoor: [
    "Take a short walk without turning it into exercise.",
    "Spend ten minutes somewhere with trees.",
    "Watch the light change outside for one song.",
    "Explore a new nearby road during daylight if it feels appropriate.",
    "Stand outside and take five slow breaths before going back in."
  ],
  driving: [
    "Take a peaceful drive on a familiar route.",
    "Sit quietly in the car for one song before going inside.",
    "Drive somewhere close for tea or coffee and come back gently.",
    "Choose a familiar route, low volume music, and no urgent destination.",
    "Explore a nearby road during daylight if your energy is good."
  ],
  energetic: [
    "Dance privately to one favorite song.",
    "Dance while nobody is watching, even if it is only shoulders and hands.",
    "Take a brisk walk and let your mind arrive later.",
    "Cook something with music on.",
    "Do ten minutes of stretching or light exercise.",
    "Begin a small creative project and stop before it becomes work."
  ],
  connection: [
    "Call or message someone trusted.",
    "Send one kind message without needing a long conversation.",
    "Ask someone if they can share a quiet cup of tea later.",
    "Let one person know today has been a bit much."
  ]
};

const reflections = [
  "You do not have to solve the entire week tonight.",
  "Being tired and being unhappy are not always the same thing.",
  "Sometimes the useful question is not why am I feeling this, but what would make the next hour 5% easier?",
  "You are allowed to have an ordinary day.",
  "Rest is not something that has to be earned.",
  "A difficult feeling can be real without being permanent.",
  "The day can be unfinished and still deserve gentleness.",
  "You can take yourself seriously without becoming stern with yourself.",
  "Not every feeling needs a full investigation before it is allowed to pass.",
  "Small comforts count most on days when large solutions feel far away."
];

const kittenSuggestions = [
  "Official kitten advice: drink some water before declaring war on the universe.",
  "Today's kitten prescription: one song, one deep breath, zero unnecessary decisions for five minutes.",
  "A cat would probably sit in the sunlight and ignore half its problems. There may be a lesson there.",
  "Stretch. Cats have somehow built an entire reputation around doing this.",
  "Consider blinking slowly at the day until it becomes less dramatic.",
  "If the plan is too much, reduce it to one paw-sized step."
];

const form = document.querySelector("#mood-form");
const slider = document.querySelector("#mood-slider");
const moodOutput = document.querySelector("#mood-output");
const moodMessage = document.querySelector("#mood-message");
const moodFace = document.querySelector("#mood-face");
const results = document.querySelector("#results");
const musicList = document.querySelector("#music-list");
const activityList = document.querySelector("#activity-list");
const reflectionText = document.querySelector("#reflection-text");
const kittenText = document.querySelector("#kitten-text");
const safetyNote = document.querySelector("#safety-note");
let lastAnswers = null;

if (document.body.dataset.page === "checkin") {
  restoreMood();
  updateMoodDisplay();
  slider.addEventListener("input", updateMoodDisplay);
  form.addEventListener("submit", handleSubmit);
  document.querySelector("#reset-checkin").addEventListener("click", resetCheckin);
  document.querySelector("#clear-storage").addEventListener("click", clearStoredInformation);
  document.querySelectorAll("[data-variation]").forEach((button) => {
    button.addEventListener("click", () => regenerate(button.dataset.variation));
  });
}

function updateMoodDisplay(shouldStore = true) {
  const mood = Number(slider.value);
  moodOutput.value = mood;
  moodOutput.textContent = mood;
  moodMessage.textContent = moodMessages[mood].text;
  moodFace.textContent = moodMessages[mood].face;
  if (shouldStore) {
    localStorage.setItem("kittensParadiseLastMood", String(mood));
  }
}

function restoreMood() {
  const savedMood = Number(localStorage.getItem("kittensParadiseLastMood"));
  if (savedMood >= 1 && savedMood <= 10) {
    slider.value = savedMood;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  lastAnswers = getAnswers();
  renderRecommendations(lastAnswers);
  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getAnswers() {
  const data = new FormData(form);
  return {
    mood: Number(data.get("mood") || slider.value),
    feeling: data.get("feeling") || "unknown",
    need: data.get("need") || "comfort",
    energy: data.get("energy") || "little",
    place: data.get("place") || "either",
    time: data.get("time") || "15"
  };
}

function regenerate(variation) {
  if (!lastAnswers) {
    lastAnswers = getAnswers();
  }

  const adjusted = { ...lastAnswers };
  if (variation === "calmer") {
    adjusted.need = "quiet";
    adjusted.energy = adjusted.energy === "plenty" ? "moderate" : adjusted.energy;
    adjusted.mood = Math.max(1, adjusted.mood - 1);
  }
  if (variation === "energetic") {
    adjusted.need = "movement";
    adjusted.energy = adjusted.energy === "almost-none" ? "little" : "plenty";
    adjusted.mood = Math.min(10, adjusted.mood + 1);
  }
  if (variation === "surprise") {
    adjusted.need = randomFrom(["comfort", "creativity", "movement", "space", "connection"]);
  }

  renderRecommendations(adjusted);
}

function renderRecommendations(answers) {
  const moodCategory = chooseMoodCategory(answers);
  const selectedSongs = buildSongSet(moodCategory);
  const selectedActivities = buildActivities(answers);

  fillList(musicList, selectedSongs);
  fillList(activityList, selectedActivities);
  reflectionText.textContent = randomFrom(reflections);
  kittenText.textContent = randomFrom(kittenSuggestions);

  safetyNote.classList.toggle("hidden", !needsSafetyNote(answers));
  document.querySelectorAll(".result-card").forEach((card) => {
    card.classList.remove("fade-in");
    window.requestAnimationFrame(() => card.classList.add("fade-in"));
  });
}

function chooseMoodCategory({ mood, feeling, need }) {
  if (need === "creativity") return "creative";
  if (feeling === "restless" || need === "movement") return "energetic";
  if (need === "space") return "driving";
  if (feeling === "lonely") return "reflective";
  if (feeling === "stressed" || feeling === "anxious" || need === "quiet") return "calming";
  if (mood <= 3) return "comforting";
  if (mood >= 8 || feeling === "happy" || feeling === "energetic") return "energetic";
  if (mood >= 6) return "hopeful";
  return "calming";
}

function buildSongSet(category) {
  const pool = songPools[category] || songPools.calming;
  return [
    ...pickUnique(pool.english, 2),
    ...pickUnique(pool.hindi, 2),
    ...pickUnique(pool.marathi, 2)
  ];
}

function buildActivities(answers) {
  let pool = [];

  if (answers.energy === "almost-none") pool = pool.concat(activities.veryLow);
  if (answers.energy === "little") pool = pool.concat(activities.veryLow, activities.low);
  if (answers.energy === "moderate") pool = pool.concat(activities.low, activities.calm, activities.creative);
  if (answers.energy === "plenty") pool = pool.concat(activities.energetic, activities.creative);
  if (answers.need === "creativity") pool = pool.concat(activities.creative);
  if (answers.need === "movement") pool = pool.concat(activities.energetic);
  if (answers.need === "connection") pool = pool.concat(activities.connection);
  if (answers.place === "outside") pool = pool.concat(activities.outdoor);
  if (answers.place === "indoors") pool = pool.concat(activities.calm, activities.creative);
  if (answers.need === "space" || answers.feeling === "restless") pool = pool.concat(activities.driving);

  if (answers.time === "5") {
    pool = pool.filter((activity) => !activity.toLowerCase().includes("hour") && !activity.toLowerCase().includes("project"));
  }

  return pickUnique(pool.length ? pool : activities.calm, randomFrom([3, 4, 5]));
}

function fillList(listElement, items) {
  listElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function pickUnique(source, count) {
  const available = [...new Set(source)];
  const picked = [];
  while (available.length && picked.length < count) {
    const index = Math.floor(Math.random() * available.length);
    picked.push(available.splice(index, 1)[0]);
  }
  return picked;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function needsSafetyNote({ mood, feeling }) {
  return mood === 1 && ["sad", "lonely", "anxious", "unknown"].includes(feeling);
}

function resetCheckin() {
  form.reset();
  slider.value = localStorage.getItem("kittensParadiseLastMood") || "5";
  lastAnswers = null;
  updateMoodDisplay();
  results.classList.add("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearStoredInformation() {
  localStorage.removeItem("kittensParadiseLastMood");
  slider.value = "5";
  updateMoodDisplay(false);
}
