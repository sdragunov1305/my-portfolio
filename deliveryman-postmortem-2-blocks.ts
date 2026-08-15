import type { VlogBodyBlock } from "@/data/vlog-types";

/** Медиа с [LinkedIn Pulse — Postmortem Part 2](https://www.linkedin.com/pulse/adventures-deliveryman-postmortem-part-2-lessons-from-ne2kf/) (порядок как в статье). */
const M = {
  character:
    "https://media.licdn.com/dms/image/v2/D4D12AQFMYC4hAfGa_Q/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1737560316860?e=2147483647&v=beta&t=1fELqUrXsuzLE9lyix04sNK5dg3gTFNfdaJuXfCElIA",
  v1Poster:
    "https://media.licdn.com/dms/image/v2/D4D12AQHOo-rMjZon4g/videocover-high/videocover-high/0/1737560369348?e=2147483647&v=beta&t=bCqRKFUCrErAotzUjD--TXnpYXvVNKOh2GTHg5RjcpU",
  v1Mp4:
    "https://dms.licdn.com/playlist/vid/v2/D4D12AQHOo-rMjZon4g/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1737560369567?e=2147483647&v=beta&t=jVeBSDMTPoWJ_4OwA79hnPM1iDEXz9kKTY2qyraRy3E",
  v2Poster:
    "https://media.licdn.com/dms/image/v2/D4D12AQHqUXh_N3R33g/videocover-low/videocover-low/0/1737560441039?e=2147483647&v=beta&t=WNdUOZo9QsJC98D2U1zy1EZVUI23D52wNwQ7iYG6a-Y",
  v2Mp4:
    "https://dms.licdn.com/playlist/vid/v2/D4D12AQHqUXh_N3R33g/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1737560442783?e=2147483647&v=beta&t=eqBaGUtEJ--XqyrIZTZA8cJL9aaPSWsPzcpI5heaPBA",
  v3Poster:
    "https://media.licdn.com/dms/image/v2/D4D12AQFob9zafsMXUw/videocover-high/videocover-high/0/1737560609321?e=2147483647&v=beta&t=RCCdJMbolBykWoO2hk5FUo_njkT3XyRxKTjCFCue32A",
  v3Mp4:
    "https://dms.licdn.com/playlist/vid/v2/D4D12AQFob9zafsMXUw/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1737560611361?e=2147483647&v=beta&t=HydsKudA1jjHGueSB-ui_G59xqOVE-MRP-3C132LRJs",
  bikeSlots:
    "https://media.licdn.com/dms/image/v2/D4D12AQFUj31KD2AZrw/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1737560702955?e=2147483647&v=beta&t=0k8ssFmgdnXgbFXrx0DJMnn942R0YGP4DjqdvfL2PeU",
  timeline:
    "https://media.licdn.com/dms/image/v2/D4D12AQFTZO1WRneomQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1737560882386?e=2147483647&v=beta&t=Odkpj8j6ItOLzP6awlxlYYNxlNzDli3ozpArmb-Gn8o",
  oldCover:
    "https://media.licdn.com/dms/image/v2/D4D12AQFaLZb9O0W5UQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1737560829982?e=2147483647&v=beta&t=GS8SuGMgteXDd7VVljWJ67TVhza5h1iUtKv9mFAYBpE",
  competitors:
    "https://media.licdn.com/dms/image/v2/D4D12AQE9UyPr0SolgQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1737560945241?e=2147483647&v=beta&t=MqIwFbHkJMwSiz_PHHKuiYt2ou00CYBwbavgEhFRTYI",
  relatedRemakeCover:
    "https://media.licdn.com/dms/image/v2/D4D12AQH9dvrlAsWZ7w/article-cover_image-shrink_720_1280/B4DZVtqLf3GcAI-/0/1741301544757?e=2147483647&v=beta&t=wK-7sYWDt_aG7-MTrFCoGQO0_gT2kWseQ2FlKRwt0yQ",
  relatedPart1Cover:
    "https://media.licdn.com/dms/image/v2/D4D12AQGZlyhU6wGikA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1736753808895?e=2147483647&v=beta&t=gTBZldSLoff3a76gMqIS3997e3songegqaD8sJL5Idg",
} as const;

export const deliverymanPostmortem2Blocks: VlogBodyBlock[] = [
  {
    type: "p",
    text: "Creating a game is always a significant and responsible step, both for your life and for the lives of future players.",
  },
  {
    type: "p",
    text: "Especially if this isn’t your first indie project, you probably know how much it consumes your mind, leaving no rest day or night. And if you don’t finish it, you risk facing the disappointment and pain of unfulfilled expectations.",
  },
  {
    type: "h2",
    text: "That’s why it’s crucial to set a clear goal and relentlessly pursue it until it’s achieved.",
  },
  {
    type: "p",
    text: "My goal was to create a PC game. I now regret setting it that way: we did release the game, but I realized what that journey entailed much later. In my previous post, I shared how it all began. Looking back, I realize that was the easiest and even the most charming stage of development.",
  },
  {
    type: "p",
    text: "Here’s an example of a daily cycle. Let’s see how many deliveries you can complete — it’s not as easy as it seems unless you level up your skills!",
  },
  {
    type: "video",
    src: M.v1Mp4,
    poster: M.v1Poster,
    caption: "Gameplay clip — daily deliveries",
  },
  {
    type: "p",
    text: "The rules of the game are simple — deliver all parcels within 24 hours.",
  },
  {
    type: "p",
    text: "This is what the current character looks like in the game. I tried to capture a modern indie vibe while keeping the character’s innocence and charm.",
  },
  {
    type: "figure",
    src: M.character,
    alt: "Adventures of Deliveryman — courier character",
    caption: "Current character look",
  },
  {
    type: "h2",
    text: "Various incidents",
  },
  {
    type: "p",
    text: "By 2022, I had moved up the career ladder and became the art director at a small company, Not Bad Games, where we were working on the casual project Loop Hero. I created an animation in After Effects to showcase how I envision all the mechanics.",
  },
  {
    type: "video",
    src: M.v2Mp4,
    poster: M.v2Poster,
    caption: "After Effects animation — mechanics showcase (Loop Hero era)",
  },
  {
    type: "p",
    text: "This was my first experience working as an art director in a team of more than three people. Things were going well: I learned how to hire the right people, plan workloads within limited budgets, and maintain the project’s style. It was great to spend money efficiently on development, but unfortunately my indie project had no budget. The only thing that could be spent was my own time.",
  },
  {
    type: "p",
    text: "Work on Adventures of Deliveryman continued. We struggled with the laws of physics as best as we could. If you remember learning how to ride a bike, or teaching your kids to do so, you know how hard it is to maintain balance. Now, add jumps, collisions with walls, and knocking over pedestrians, and the falls become inevitable. This disrupted the gameplay and left players confused. Making bike riding strictly on rails would be a mockery of both the players and the cycling community. Even when simulating skids and tilts on turns, it looked and felt clunky.",
  },
  {
    type: "h2",
    text: "The inner workings",
  },
  {
    type: "p",
    text: "Now, I know how to properly set up scenes so that we don’t get in each other’s way. By splitting the locations into prefabs, we were able to work on each element separately and commit only our changes. The key rule is to never update the entire scene at once.",
  },
  {
    type: "video",
    src: M.v3Mp4,
    poster: M.v3Poster,
    caption: "Gameplay recording",
  },
  {
    type: "h2",
    text: "Stages of awakening through development :)",
  },
  {
    type: "p",
    text: "At first, we used Transform, Translate — when the bike moves along rails. This is a Unity method where an object simply moves along a coordinate system, as if you’re playing with a toy and guiding it across a surface. For example, when colliding with NPCs, they didn’t react, and we programmatically slowed down the bike.",
  },
  {
    type: "p",
    text: "Next, we tried Rigidbody. Here, the bike starts interacting with the surface, allowing us to apply movement force and inertia, and even give the bike a little push to keep it moving forward. This made the bike handling more realistic. It became possible to feel objects and stop upon colliding with them. Now, we could start implementing realistic jumps by adjusting gravity. We also added an “air stabilizer” to help the character return to the correct position while airborne.",
  },
  {
    type: "p",
    text: "Later, when we decided to add bike customization and the ability to improve it, we implemented numerous changes to characteristics like speed, sliding, turning speed, and braking. This allowed us to create various bike builds, making the ride more fun and interesting.",
  },
  {
    type: "figure",
    src: M.bikeSlots,
    alt: "Bike loadout — five upgrade slots",
    caption: "You can choose only five slots for your bike, which also affects your character’s stats.",
  },
  {
    type: "p",
    text: "These three stages took us almost a year, as initially we didn’t know exactly what we wanted. We were coming up with the design based on our current ideas and desires.",
  },
  {
    type: "h2",
    text: "How I got laid off and went to Portugal",
  },
  {
    type: "p",
    text: "At some point, our investors could no longer invest, and the whole team was laid off. Everything was fair — we received severance, and it seemed like the money would last for a year. That same winter, without hesitation, I bought a ticket to Portugal because I just couldn’t stand the cold in Tallinn in January anymore.",
  },
  {
    type: "p",
    text: "After the layoff, I went through a major creative block. To warm up, I decided to move to Portugal for the winter. I continued working on the game and searching for investors or a publisher. For that, I started putting together a pitch deck.",
  },
  {
    type: "figure",
    src: M.oldCover,
    alt: "Old game cover",
    caption: "Old cover",
  },
  {
    type: "figure",
    src: M.competitors,
    alt: "Competitor references slide",
    caption: "The competitors we chose",
  },
  {
    type: "figure",
    src: M.timeline,
    alt: "Production timeline",
    caption: "Timeline (actually we made it faster :)",
  },
  {
    type: "h2",
    text: "What I experienced during the workation",
  },
  {
    type: "ol",
    items: [
      "Creative block after the layoff: losing stability really hit my motivation, but it became an important lesson.",
      "Writing the pitch: this was a new experience; the process turned out to be much more complex than I expected.",
      "Trip to DevGAMM in Gdansk: I leveled up as a developer there and gained insight into what my project was missing.",
      "Regret over time spent negotiating with publishers: I regret that time — I could have created many more game assets instead of writing pitches.",
    ],
  },
  {
    type: "p",
    text: "After going through all these painful stages, we still couldn’t agree with any publisher on development budgets. So we made a very important decision: we decided to self-publish. At first this seemed like an easy task, but it turned out to be much harder. There were a lot of documents to read and sign, and we had to pay a 100-euro fee to register the product on Steam.",
  },
  {
    type: "h2",
    text: "Mistakes you should never make",
  },
  {
    type: "p",
    text: "We started publishing the game, but we didn’t follow any clear guidelines. We released the initial description and art, uploaded the Early Access version on Steam, and set the price at 16 euros. Looking back, I can confidently say I earned 100 euros during this time. Sales started improving, though.",
  },
  {
    type: "figure",
    src: M.relatedRemakeCover,
    alt: "LinkedIn article — remaking a mobile game for PC",
    caption: "Also on LinkedIn: remaking an old mobile game for PC",
  },
  {
    type: "figure",
    src: M.relatedPart1Cover,
    alt: "LinkedIn article — Adventures of Deliveryman postmortem part 1",
    caption: "Postmortem part 1 — The Beginning",
  },
];
