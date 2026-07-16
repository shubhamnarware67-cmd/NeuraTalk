// ==============================
// NETFLIX CLONE - DATA FILE
// Author: Shubham Narware
// ==============================

const CATALOG = {
  heroList: [
    {
      id: "s1", title: "Stranger Things",
      desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      match: 98, year: 2024, rated: "16+", seasons: "4 Seasons"
    },
    {
      id: "m1", title: "Extraction 2",
      desc: "Tasked with extracting a family who is at the mercy of a ruthless Georgian gangster, Tyler Rake must navigate through a series of deadly obstacles.",
      backdrop: "https://image.tmdb.org/t/p/original/rjnFXHhaXOFCkfxmUAsxpDVXqLj.jpg",
      match: 91, year: 2023, rated: "18+", seasons: "2h 3m"
    },
    {
      id: "s5", title: "Wednesday",
      desc: "Wednesday Addams navigates her years as a student at Nevermore Academy, attempting to master her psychic ability and thwart a killing spree.",
      backdrop: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      match: 95, year: 2024, rated: "13+", seasons: "2 Seasons"
    }
  ],

  rows: [
    {
      title: "Trending Now",
      items: ["s1","m1","s2","m2","s3","m3","s4","m4","s5","m5","s6","m6"]
    },
    {
      title: "Shubham's Top Picks for You",
      items: ["s2","m3","s5","m1","s6","m5","s3","m2"]
    },
    {
      title: "New Releases",
      items: ["m4","s3","m2","s6","m6","s4","m3","s1"]
    },
    {
      title: "Action & Adventure",
      items: ["m1","m2","m4","m6","s2","s4"]
    },
    {
      title: "Because you watched Stranger Things",
      items: ["s2","s3","s4","s5","s6","m3"]
    },
    {
      title: "Award-Winning Dramas",
      items: ["s3","s5","m5","s6","m6","s2"]
    },
    {
      title: "Comedies",
      items: ["m5","s4","m2","s2","m6","s6"]
    }
  ],

  // full details map
  details: {
    s1: {
      title: "Stranger Things",
      poster: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      match: 98, year: 2024, rated: "16+", seasons: "4 Seasons",
      desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour",
      genres: "Sci-Fi, Horror, Drama",
      tags: "Scary, Suspenseful, Exciting",
      episodes: [
        {n:1, title:"Chapter One: The Vanishing", time:"49m", desc:"A young boy disappears without a trace, sending shockwaves through his small hometown."},
        {n:2, title:"Chapter Two: The Weirdo on Maple Street", time:"55m", desc:"A strange girl with unusual powers appears near the site of the boy's disappearance."},
        {n:3, title:"Chapter Three: Holly, Jolly", time:"51m", desc:"An unlikely alliance forms as the search for answers intensifies."}
      ]
    },
    m1: {
      title: "Extraction 2",
      poster: "https://image.tmdb.org/t/p/w500/rjnFXHhaXOFCkfxmUAsxpDVXqLj.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/rjnFXHhaXOFCkfxmUAsxpDVXqLj.jpg",
      match: 91, year: 2023, rated: "18+", seasons: "2h 3m",
      desc: "Tasked with extracting a family who is at the mercy of a ruthless Georgian gangster, Tyler Rake must navigate through a series of deadly obstacles.",
      cast: "Chris Hemsworth, Golshifteh Farahani, Adam Bessa",
      genres: "Action, Thriller",
      tags: "Intense, Violent, Gritty",
      episodes: []
    },
    s2: {
      title: "Money Heist",
      poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      match: 96, year: 2021, rated: "16+", seasons: "5 Parts",
      desc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      cast: "Álvaro Morte, Úrsula Corberó, Itziar Ituño, Pedro Alonso",
      genres: "Crime, Drama, Thriller",
      tags: "Suspenseful, Twisty, Exciting",
      episodes: [
        {n:1, title:"Part 1: Chapter 1", time:"46m", desc:"A criminal mastermind known as the Professor recruits eight thieves for an ambitious heist."},
        {n:2, title:"Part 1: Chapter 2", time:"48m", desc:"The gang is in position, but everything hinges on the hostages behaving as expected."}
      ]
    },
    m2: {
      title: "RRR",
      poster: "https://image.tmdb.org/t/p/w500/ny4tYaXGyKV3JCJyDdWYAI71l1O.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/ny4tYaXGyKV3JCJyDdWYAI71l1O.jpg",
      match: 94, year: 2022, rated: "13+", seasons: "3h 7m",
      desc: "A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
      cast: "N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt",
      genres: "Action, Drama, History",
      tags: "Epic, Emotional, Powerful",
      episodes: []
    },
    s3: {
      title: "The Crown",
      poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg",
      match: 92, year: 2023, rated: "16+", seasons: "6 Seasons",
      desc: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
      cast: "Imelda Staunton, Dominic West, Elizabeth Debicki",
      genres: "Drama, History, Biography",
      tags: "Emotional, Sophisticated, Slow-burn",
      episodes: [
        {n:1, title:"Persona Non Grata", time:"58m", desc:"As Britain votes in a new government, a family tragedy causes friction between the sisters."}
      ]
    },
    m3: {
      title: "Glass Onion",
      poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      match: 89, year: 2022, rated: "13+", seasons: "2h 19m",
      desc: "Famed Southern detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
      cast: "Daniel Craig, Edward Norton, Janelle Monáe, Kate Hudson",
      genres: "Mystery, Comedy, Crime",
      tags: "Witty, Clever, Suspenseful",
      episodes: []
    },
    s4: {
      title: "The Witcher",
      poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      match: 88, year: 2023, rated: "18+", seasons: "3 Seasons",
      desc: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      cast: "Henry Cavill, Anya Chalotra, Freya Allan",
      genres: "Fantasy, Action, Adventure",
      tags: "Dark, Violent, Epic",
      episodes: [
        {n:1, title:"Shaerrawedd", time:"58m", desc:"Elves face a grim reckoning. Geralt fights for a chance at a better future."}
      ]
    },
    m4: {
      title: "Don't Look Up",
      poster: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseb2GmttSFDCT.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/th4E1yqsE8DGpAseb2GmttSFDCT.jpg",
      match: 85, year: 2021, rated: "16+", seasons: "2h 18m",
      desc: "Two low-level astronomers must go on a media tour to warn mankind of an approaching comet that will destroy planet Earth.",
      cast: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
      genres: "Comedy, Drama, Sci-Fi",
      tags: "Satirical, Dark Comedy, Thought-provoking",
      episodes: []
    },
    s5: {
      title: "Wednesday",
      poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      match: 95, year: 2024, rated: "13+", seasons: "2 Seasons",
      desc: "Wednesday Addams navigates her years as a student at Nevermore Academy, attempting to master her psychic ability and thwart a killing spree.",
      cast: "Jenna Ortega, Gwendoline Christie, Emma Myers",
      genres: "Comedy, Horror, Mystery",
      tags: "Dark Comedy, Quirky, Suspenseful",
      episodes: [
        {n:1, title:"Wednesday's Child Is Full of Woe", time:"49m", desc:"After she's expelled from yet another school, Wednesday enrolls at Nevermore Academy."}
      ]
    },
    m5: {
      title: "Murder Mystery 2",
      poster: "https://image.tmdb.org/t/p/w500/wR6ND1H5FeIMHM4LzE1TmxOUD2A.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/wR6ND1H5FeIMHM4LzE1TmxOUD2A.jpg",
      match: 78, year: 2023, rated: "13+", seasons: "1h 30m",
      desc: "Now full-time detectives, Nick and Audrey Spitz find themselves at the center of an international abduction after their friend, the Maharaja, is kidnapped.",
      cast: "Adam Sandler, Jennifer Aniston, Mark Strong",
      genres: "Comedy, Mystery, Action",
      tags: "Goofy, Light-hearted, Fun",
      episodes: []
    },
    s6: {
      title: "Squid Game",
      poster: "https://image.tmdb.org/t/p/w500/dDlEmu3M2r3fSjxrKGjRUZUFQyB.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/dDlEmu3M2r3fSjxrKGjRUZUFQyB.jpg",
      match: 99, year: 2024, rated: "18+", seasons: "2 Seasons",
      desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games with deadly high stakes. A tempting but dangerous prize awaits.",
      cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun, Jung Ho-yeon",
      genres: "Thriller, Drama, Survival",
      tags: "Violent, Suspenseful, Shocking",
      episodes: [
        {n:1, title:"Red Light, Green Light", time:"60m", desc:"Hundreds of players accept a strange invitation to compete for a tempting cash prize."}
      ]
    },
    m6: {
      title: "The Gray Man",
      poster: "https://image.tmdb.org/t/p/w500/8cXbitsS6VLoJb2BEHsHM19c8DU.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/8cXbitsS6VLoJb2BEHsHM19c8DU.jpg",
      match: 84, year: 2022, rated: "16+", seasons: "2h 9m",
      desc: "When the CIA's most skilled operative uncovers agency secrets, he becomes the target of an international manhunt by assassins.",
      cast: "Ryan Gosling, Chris Evans, Ana de Armas",
      genres: "Action, Thriller",
      tags: "Fast-paced, Slick, Explosive",
      episodes: []
    }
  }
};
