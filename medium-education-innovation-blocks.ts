import type { VlogBodyBlock } from "@/data/vlog-types";

/** Картинки и GIF с Medium (miro.medium.com), порядок как в статье. */
const M = {
  teachers: "https://miro.medium.com/v2/resize:fit:1200/1*YgpA59KnhjV_dCHQZu4jwA.png",
  edhack: "https://miro.medium.com/v2/resize:fit:1200/1*n8eQB_m9LmELdiXgRHaM5Q.png",
  prototypeGif: "https://miro.medium.com/v2/resize:fit:1200/1*FqBJNhb0EjjHpXnQUlas5g.gif",
  coinsGif: "https://miro.medium.com/v2/resize:fit:1200/1*hCpb2vbxoPoFsDT5zzNRwQ.gif",
  gamifyGif: "https://miro.medium.com/v2/resize:fit:1200/1*kHfTwVaPrhyLluDRe8v6xw.gif",
} as const;

export const mediumEducationInnovationBlocks: VlogBodyBlock[] = [
  {
    type: "p",
    text: "It seems that nothing can provoke stronger emotions than changes in the education system. At times, it feels almost taboo to speak about it. Yet each of us has our own opinion, which we are likely to keep to ourselves, since the pedagogical levers of governance are beyond our control.",
  },
  {
    type: "figure",
    src: M.teachers,
    alt: "Sergei with Evi (art teacher) and Nelli (natural science teacher)",
    caption: "I'm in the middle — on my left is Evi, an art teacher, and on my right is Nelli, a natural science teacher; both teach in Estonian.",
  },
  { type: "h3", text: "Understanding a key challenge" },
  {
    type: "p",
    text: "I live in Estonia. Quite recently, the government passed a law to transition all schools to the Estonian language of instruction.",
  },
  {
    type: "p",
    text: "However, integration in schools has not been entirely smooth so far. Many teachers have undergone retraining but have struggled to adapt professional terminology to the new language of instruction.",
  },
  {
    type: "p",
    text: "During lessons, there is no time allocated to learning subject-specific terminology separately — for example, in mathematics or chemistry — because teaching professional terminology is not formally included in the teachers' responsibilities or the curriculum.",
  },
  {
    type: "p",
    text: "As a result, children sit in class and fail to understand a significant portion of the material. When they were learning Estonian, it did not include mathematical or natural science terminology, which now creates a serious gap in comprehension.",
  },
  { type: "h3", text: "What the government is doing now" },
  {
    type: "p",
    text: "Fortunately, this issue has not gone unnoticed. Numerous seminars are being held to address the problem, featuring open discussions and proposals. In addition, many hackathons focused on education are taking place, where not only teachers but also designers, programmers, and ordinary people with creative ideas can contribute.",
  },
  {
    type: "p",
    text: "I was invited to take part in a local hackathon — EdTech Hack 2025 — which aimed to find new innovative solutions to help our school system navigate this challenging period of integrating the Estonian language into education. In the long run, this will help foster greater mutual understanding and loyalty among people living here, regardless of nationality.",
  },
  {
    type: "figure",
    src: M.edhack,
    alt: "EdTech Hack 2025 banner",
    caption: "Edhack banner",
  },
  { type: "h3", text: "Speaking the language of the audience" },
  {
    type: "p",
    text: "We met only a couple of times online, and I quickly realized that working with teachers is not simple. Defining the product's target audience turned out to be far more constructive, and ethically important, than I initially expected.",
  },
  {
    type: "p",
    text: "The modern way to communicate with Gen Z is through game mechanics. They were born with tablets in their hands. Their social lives often take place in Roblox and Fortnite rather than on the street.",
  },
  {
    type: "p",
    text: "My idea was to introduce gamification through rewards for completed tasks. For example, when you learn a new word from the vocabulary list, you earn a small coin. Save up enough and you can buy a new hat for your avatar — or even purchase a Friday day off!",
  },
  { type: "h3", text: "A clash of generations" },
  {
    type: "p",
    text: "Convincing teachers that assigning value to tasks through the lens of digital currency is the right approach was a real challenge. The idea is that earning rewards for completed tasks helps students better understand their importance, increases engagement, and motivates them to repeat tasks in order to earn the maximum number of points and coins.",
  },
  {
    type: "p",
    text: "The hardest part for me was convincing my own team that I wasn't trying to introduce a distraction from learning or undermine the teacher's authority by attaching value to tasks through \"crystals\" or virtual currency. I constantly felt like some kind of capitalist villain trying to impose an economic model on school education.",
  },
  {
    type: "p",
    text: "On Thursday, the hackathon began, and we all immersed ourselves in rethinking the concept. It wasn't enough to simply add monetization — we also had to design the task itself around which this system would work. I have to say, my teammates came up with a truly brilliant tool for both teachers and students.",
  },
  { type: "h3", text: "So what did we end up with?" },
  {
    type: "p",
    text: "Imagine you have a topic from a textbook that you plan to present in tomorrow's lesson. You share this text with students in advance, but before doing so, you can analyze its complexity using a publicly available dictionary that shows how words correspond to language proficiency levels — the same levels used in language exams: A1, A2, B1, B2, C1.",
  },
  {
    type: "p",
    text: "In the GIF below, you can see how this works in practice.",
  },
  {
    type: "figure",
    src: M.prototypeGif,
    alt: "Screen recording: analyzing text vocabulary levels in the prototype",
    caption: "Prototype flow (GIF) — built with Lovable",
  },
  {
    type: "p",
    text: "Our prototype: https://vocab-wizardry-hub.lovable.app/",
  },
  {
    type: "p",
    text: "Next, you can remove certain words directly by clicking on them in the vocabulary list. Once the glossary is created and you are confident that it can be presented to students in a game-like format, you simply click the \"Create Quiz\" button.",
  },
  { type: "h3", text: "Student engagement!" },
  {
    type: "p",
    text: "The student has a dashboard with different denominations of virtual currency that we provide at the beginning. This currency can be spent on various actions — for example, to unlock unfamiliar words in the glossary.",
  },
  {
    type: "p",
    text: "The glossary itself works quite simply: it is divided into blocks, and each block contains words labeled with a category and a price for obtaining the translation. In this way, students spend their currency as they translate words, making the learning process interactive and engaging.",
  },
  {
    type: "figure",
    src: M.coinsGif,
    alt: "Spending in-game coins to unlock word translations",
    caption: "You have spent your coins to get translation",
  },
  {
    type: "p",
    text: "Once we have gone through all the material and learned the vocabulary, we can start playing the quiz. The quiz is designed in a very simple way: it shows a word in Estonian and offers four answer options in Russian. All you need to do is choose the correct word. The same approach is used in Duolingo.",
  },
  {
    type: "p",
    text: "Each word also displays its category and the reward you can earn. If the winnings are sufficient to make a purchase in the in-app store, a pop-up appears showing the available item. For example, you can buy a hat and immediately apply it to your avatar in your profile.",
  },
  {
    type: "figure",
    src: M.gamifyGif,
    alt: "Quiz and in-app store with avatar rewards",
    caption: "How gamification works!",
  },
  { type: "h3", text: "What did I realize at the hackathon?" },
  {
    type: "p",
    text: "We accomplished tremendous work — we created an incredible platform for the development of both teachers and students. We applied our knowledge, each of us contributing our deepest and most meaningful expertise. After all, we attend events like this to express ourselves and put our skills into practice.",
  },
  {
    type: "p",
    text: "We attended many workshops and spoke with mentors who guided us not only in design, but also in pedagogy and the ethics of teaching.",
  },
  {
    type: "p",
    text: "We were taught how to approach pitching correctly.",
  },
  {
    type: "p",
    text: "I realized a major flaw in our pitch only after everything was over. We needed to present the problem much more clearly and powerfully — supporting it with facts and visuals, and possibly even interviews with people directly affected by the issue. This gives an idea far greater impact and makes it much easier to understand and believe in.",
  },
  {
    type: "p",
    text: "If you've made it to the end, thank you for reading! Feel free to explore the prototype again — https://vocab-wizardry-hub.lovable.app/ — it's in Estonian.",
  },
];
