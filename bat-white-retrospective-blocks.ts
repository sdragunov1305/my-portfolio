import type { VlogBodyBlock } from "@/data/vlog-types";

/** Медиа с itch.io devlog — тот же материал, что в LinkedIn Pulse. */
const I = {
  trophyA: "https://img.itch.zone/aW1nLzIwNTIzMjUyLnBuZw==/original/1WjP4d.png",
  trophyB: "https://img.itch.zone/aW1nLzIwNDc5MzUxLnBuZw==/original/%2FKcjXX.png",
  styleWip: "https://img.itch.zone/aW1nLzIwNTIzMzQzLmpwZw==/original/j4ZTQw.jpg",
  firstBuildGif: "https://img.itch.zone/aW1nLzIwNTIzMjEzLmdpZg==/original/tefNEu.gif",
  mainMenuV1: "https://img.itch.zone/aW1nLzIwNTIzMzQwLnBuZw==/original/WulnO5.png",
  wipGifA: "https://img.itch.zone/aW1nLzIwNTIzMjIxLmdpZg==/original/ibTpFW.gif",
  wipGifB: "https://img.itch.zone/aW1nLzIwNTIzMjI1LmdpZg==/original/PNU1tp.gif",
  lilith: "https://img.itch.zone/aW1nLzIwNTIzMzM2LnBuZw==/original/Za1ILx.png",
  shotA: "https://img.itch.zone/aW1nLzIwNTIzMzMwLnBuZw==/original/WtuEoR.png",
  shotB: "https://img.itch.zone/aW1nLzIwNTIzMzA5LnBuZw==/original/rJE3Ap.png",
} as const;

export const batWhiteRetrospectiveBlocks: VlogBodyBlock[] = [
  {
    type: "p",
    text: "I still can't believe this happened! Dmitry, Alexander, and I took first place at a local Gamecamp jam with 190 participants and about 50 teams.",
  },
  { type: "h3", text: "What is TalTech GameCamp Jam?" },
  {
    type: "p",
    text: "TalTech GameCamp's GameJam is a 48-hour competition in which you create a game from scratch. The price? Endless coffee, pizza, and wraps.",
  },
  {
    type: "figure",
    src: I.trophyA,
    alt: "Game jam trophy",
    caption: "This is how the trophy looks.",
  },
  {
    type: "figure",
    src: I.trophyB,
    alt: "GameCamp celebration photo",
    caption: "GameCamp",
  },
  {
    type: "h2",
    text: 'This time, the theme was "Opposites." We gave ourselves three hours to brainstorm ideas and agreed that, whatever happened, we\'d start working at 6:00 PM.',
  },
  {
    type: "p",
    text: "There were lots of different ideas, but the light and shadow concept stuck with us the most. We started experimenting and figuring out the style.",
  },
  { type: "h3", text: "Core Mechanics: Light & Shadow" },
  {
    type: "p",
    text: "One of the key mechanics was the ability to move objects between light and shadow—they would completely disappear when exposed to light. This simple rule created a unique puzzle element, where players had to carefully manipulate objects to control visibility and movement.",
  },
  {
    type: "p",
    text: "To implement this, I used a basic outline script that works with Unity's standard shader. (It's free on the Unity Asset Store: Quick Outline.)",
  },
  {
    type: "figure",
    src: I.styleWip,
    alt: "Early light and shadow style experiments",
    caption: "Experimenting with the look",
  },
  {
    type: "figure",
    src: I.firstBuildGif,
    alt: "First playable build of Bat in White",
    caption: "The first version of the game was ready — early gameplay (GIF).",
  },
  { type: "h3", text: "The Struggle with the Main Screen" },
  {
    type: "p",
    text: "Then I started working on the Main Screen. I refined the concept, but something felt off—it didn't reflect the essence of the game and didn't fit the overall aesthetic.",
  },
  {
    type: "p",
    text: "Another problem was that the game itself was 1-bit, but the main menu was getting more and more detailed. Since the game was in 3D, I decided we needed to show that on the Main Screen.",
  },
  {
    type: "figure",
    src: I.mainMenuV1,
    alt: "First version of the main menu",
    caption: "1st version of main screen",
  },
  {
    type: "figure",
    src: I.wipGifA,
    alt: "Work in progress on the main screen",
    caption: "Iteration (GIF)",
  },
  {
    type: "figure",
    src: I.wipGifB,
    alt: "Further main screen iteration",
    caption: "Toward the interactive title (GIF)",
  },
  {
    type: "p",
    text: 'Then I thought: "Why not just make the first level the main screen?" So that\'s what we did.',
  },
  {
    type: "p",
    text: "I separated all the objects, set up materials in Unity according to the concept, and made the volumes black so they blended well with the shadows. The letters stayed white with a black outline from the script. I added a few extra components and Dima's script for moving objects. Then I put pixelation on the camera through post-processing, and boom—we had the perfect interactive Main Screen.",
  },
  { type: "h3", text: "Music & Sound Effects" },
  {
    type: "p",
    text: "That evening, I messaged my friend Alexander, who has been helping me with soundtracks for 15 years. Turns out, he was sick, but even then, he still helped us—he made music and some really cool SFX. Too bad we didn't have time to integrate everything.",
  },
  {
    type: "p",
    text: "At that point, Day 1 was over. At around midnight, we headed home and even managed to get some sleep.",
  },
  { type: "h3", text: "Gameplay Changes" },
  {
    type: "p",
    text: "In the first version, the bat moved on its own, staying in the shadows. We thought this would add some randomness, but it made level design a nightmare — the bat constantly went in the wrong direction.",
  },
  {
    type: "p",
    text: "So, in the morning, we switched to keyboard controls. Now the player had to move objects with the mouse and fly the bat with the keyboard.",
  },
  { type: "h3", text: "Character Design: From Nosferatu to Lilith" },
  {
    type: "p",
    text: "That morning, I wanted to take a break, so I went out for coffee with my girlfriend. While there, I was brainstorming a narrative character—someone who could interact with the player and explain the mechanics. Since I always carry a tablet for pixel art, I started drawing.",
  },
  {
    type: "p",
    text: "At first, I sketched Nosferatu, but it looked too dark and serious. My girlfriend suggested drawing a girl instead. I listened to her and redesigned Nosferatu into an anime-style girl.",
  },
  {
    type: "p",
    text: "This just proves how important it is to show your game early and get feedback. That's when I finally felt like everything was coming together—we had our own unique style!",
  },
  {
    type: "figure",
    src: I.lilith,
    alt: "Lilith character design",
    caption: "Lilith design",
  },
  {
    type: "figure",
    src: I.shotA,
    alt: "Bat in White in-game screenshot",
    caption: "In-game",
  },
  {
    type: "figure",
    src: I.shotB,
    alt: "Bat in White scene",
    caption: "Light, shadow, and bats",
  },
  { type: "h3", text: "Meet Lilith!" },
  {
    type: "p",
    text: "That's how Lilith was born — a girl who helps bats find their way through the darkness to their coffin.",
  },
  {
    type: "p",
    text: "And yeah, we won! I've never won a competition before, so this was an insane moment for me.",
  },
  { type: "h3", text: "What This Game Jam Taught Me" },
  {
    type: "p",
    text: "This game jam showed that even under tight deadlines, you can create something cool if you follow a few simple rules. (Important: These tips are for game jams only—not for full development!)",
  },
  {
    type: "ol",
    items: [
      "Let your friends and family know you're about to disappear for two days. Don't try to be in two places at once—your thoughts should be 100% on the game.",
      "Turn small talk into problem-solving. There's too much work, and two heads are better than one. (Example: Lilith's illustration came from a quick discussion.) If you get distracted, it'll take a while to get back into the zone.",
      "Always discuss ideas first. Don't work on something alone and then show it later—talk about it with the team before you start. Otherwise, you risk wasting time on something that doesn't fit.",
      "Don't reject ideas right away. If an idea is bad, the person who suggested it will realize it themselves. If you criticize it too soon, they'll start defending it, and you'll just waste time arguing.",
      "If you remove something, tell the team. Everyone needs to be on the same page.",
      "Try to sleep the first night. You won't get much rest on the second one.",
      "No alcohol! It'll destroy your flow.",
    ],
  },
  { type: "h3", text: "Play the Game!" },
  {
    type: "p",
    text: "You can play and rate our game on itch.io: fat-snail-games.itch.io/bat-in-white — I'd love to chat with other game devs and share ideas. Thanks for reading — I hope this retrospective was useful!",
  },
];
