export default function handler(req, res) {
  const { id } = req.query;

  switch (id) {
    case "ironman":
      res.status(200).json({
        character: {
          id: 346,
          name: "Iron Man",
          slug: "346-iron-man",
          powerstats: {
            intelligence: 100,
            strength: 85,
            speed: 58,
            durability: 85,
            power: 100,
            combat: 64,
          },
          appearance: {
            gender: "Male",
            race: "Human",
            height: ["6'6", "198 cm"],
            weight: ["425 lb", "191 kg"],
            eyeColor: "Blue",
            hairColor: "Black",
          },
          biography: {
            fullName: "Tony Stark",
            alterEgos: "No alter egos found.",
            aliases: [
              "Iron Knight",
              "Hogan Potts",
              "Spare Parts Man",
              "Cobalt Man II",
              "Crimson Dynamo",
              "Ironman",
            ],
            placeOfBirth: "Long Island, New York",
            firstAppearance: "Tales of Suspence #39 (March, 1963)",
            publisher: "Marvel Comics",
            alignment: "good",
          },
          work: {
            occupation:
              "Inventor, Industrialist; former United States Secretary of Defense",
            base: "Seattle, Washington",
          },
          connections: {
            groupAffiliation:
              "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
            relatives:
              "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/346-iron-man.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/346-iron-man.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/346-iron-man.jpg",
          },
        },
      });
      break;

    case "gladiator":
      res.status(200).json({
        character: {
          id: 285,
          name: "Gladiator",
          slug: "285-gladiator",
          powerstats: {
            intelligence: 50,
            strength: 100,
            speed: 100,
            durability: 100,
            power: 77,
            combat: 70,
          },
          appearance: {
            gender: "Male",
            race: "Strontian",
            height: ["6'6", "198 cm"],
            weight: ["595 lb", "268 kg"],
            eyeColor: "Blue",
            hairColor: "Blue",
          },
          biography: {
            fullName: "Kallark",
            alterEgos: "No alter egos found.",
            aliases: ["Majestor", "Praetor", "Captain Universe"],
            placeOfBirth: "-",
            firstAppearance: "X-Men Vol 1 #107 October, 1977",
            publisher: "Marvel Comics",
            alignment: "neutral",
          },
          work: {
            occupation:
              "Majestor of the Shi'ar Empire; Former Praetor of the Imperial Guard; possibly former Herald of Galactus",
            base: "Chandilar, Shi'ar Galaxy; mobile throughout the Shi'ar Empire and surrounding galaxies.",
          },
          connections: {
            groupAffiliation:
              "Galactic Council, Annihilators; formerly Imperial Guard; possibly Heralds of Galactus",
            relatives:
              "Kubark (Kid Gladiator) (son), Xenith (The Strontian) (cousin)",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/285-gladiator.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/285-gladiator.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/285-gladiator.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/285-gladiator.jpg",
          },
        },
      });
      break;

    case "goku":
      res.status(200).json({
        character: {
          id: 289,
          name: "Goku",
          slug: "289-goku",
          powerstats: {
            intelligence: 56,
            strength: 100,
            speed: 75,
            durability: 90,
            power: 100,
            combat: 100,
          },
          appearance: {
            gender: "Male",
            race: "Saiyan",
            height: ["5'9", "175 cm"],
            weight: ["137 lb", "62 kg"],
            eyeColor: "-",
            hairColor: "-",
          },
          biography: {
            fullName: "Kakarot",
            alterEgos: "No alter egos found.",
            aliases: [
              "Ultimate Defender",
              "Sayain Monkey",
              "Super Sayain",
              "Z-Fighter",
              "Son-Goku",
              "Lower-Class Sayain",
              "Goku Son",
            ],
            placeOfBirth: "-",
            firstAppearance: "Dragon Ball #1",
            publisher: "Shueisha",
            alignment: "good",
          },
          work: {
            occupation: "-",
            base: "-",
          },
          connections: {
            groupAffiliation: "Saiyajin, Son family, Z-Fighters",
            relatives: "-",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/289-goku.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/289-goku.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/289-goku.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/289-goku.jpg",
          },
        },
      });
      break;

    case "aquaman":
      res.status(200).json({
        character: {
          id: 38,
          name: "Aquaman",
          slug: "38-aquaman",
          powerstats: {
            intelligence: 81,
            strength: 85,
            speed: 79,
            durability: 80,
            power: 100,
            combat: 80,
          },
          appearance: {
            gender: "Male",
            race: "Atlantean",
            height: ["6'1", "185 cm"],
            weight: ["325 lb", "146 kg"],
            eyeColor: "Blue",
            hairColor: "Blond",
          },
          biography: {
            fullName: "Orin",
            alterEgos: "No alter egos found.",
            aliases: [
              "Dweller in the Depths",
              "Swimmer",
              "Waterbearer",
              "Mental Man",
              "Aquaboy",
              "Water Wraith",
            ],
            placeOfBirth: "Atlantis",
            firstAppearance: "More Fun Comics #73 (November, 1941)",
            publisher: "DC Comics",
            alignment: "good",
          },
          work: {
            occupation: "Protector of the Seas and Oceans, King of Poseidonis",
            base: "Atlantean Royal Palace; Poseidonis, Atlantis",
          },
          connections: {
            groupAffiliation:
              "Justice League, Aquaman Family, Atlantean Royal Family; formerly Black Lantern Corps, Justice League International, Justice League Detroit, U.N.",
            relatives:
              "Koryak (son), Arthur Curry, Jr. (son), A.J. (son), Orm Marius (half-brother), Debbie Perkins (half-sister), Drin (adopted brother), Atlanna (mother), Atlan (father), Atlena (aunt), Porm (adopted mother), Tom Curry (adopted father), Mera (wife), Hila (sister-in-law), Haumond (uncle), Kraken (uncle), Honsu (grandfather), Lorelei (grandmother), Manu (ancestor), Nala (ancestor), Fatima (ancestor), Kalunga (ancestor), Gana (ancestor), Fiona (ancestor), Regin (ancestor), Kordax (ancestor), Bazil (ancestor), Cora (ancestor), Illya (ancestor), Dardanus (ancestor), Alloroc (ancestor), Cole (ancestor), Narmea (ancestor), Orin (ancestor), Loma (ancestor), Shalako (ancestor), Thorvall (ancestor)",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/38-aquaman.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/38-aquaman.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/38-aquaman.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/38-aquaman.jpg",
          },
        },
      });
      break;

    case "odin":
      res.status(200).json({
        character: {
          id: 498,
          name: "Odin",
          slug: "498-odin",
          powerstats: {
            intelligence: 100,
            strength: 83,
            speed: 67,
            durability: 95,
            power: 100,
            combat: 90,
          },
          appearance: {
            gender: "Male",
            race: "God / Eternal",
            height: ["6'9", "206 cm"],
            weight: ["650 lb", "293 kg"],
            eyeColor: "Blue",
            hairColor: "White",
          },
          biography: {
            fullName: "Odin Borson",
            alterEgos: "No alter egos found.",
            aliases: [
              "All-Father,Sky-Father",
              "Atum-Re",
              "Woden",
              "Wotan",
              "Oden",
              "Orrin",
              "Harbard",
              "King of Asgard",
            ],
            placeOfBirth: "Asgard",
            firstAppearance: "Journey into Mystery #85",
            publisher: "Marvel Comics",
            alignment: "good",
          },
          work: {
            occupation:
              "Deity, Monarch of Asgard, Asgardian God of the Sky, Wind, Wisdom, Crafts, Time, and the Dead, Warrior",
            base: "City of Asgard, Asgard",
          },
          connections: {
            groupAffiliation: "Asgardians, Council of Godheads",
            relatives:
              "Buri (Tiwaz) (paternal grandfather), Bolthorn (maternal grandfather), Bor Burison (father, deceased), Bestla (mother), Mimir Burison (paternal uncle), Njord (paternal uncle), Vili, Ve, Cul (brothers), Frigga (wife), Freyr (father-in-law), Gullveig (sister-in-law), Thor (son by Jord), Vidar (son by Grid), Balder (son by Frigga), Tyr, Hermod (allegedly sons by Frigga), Angela (daughter by Frigga), Laussa (daughter by Frigga and Surtur), Loki (foster son), Hoder (nephew), Skadi (niece)",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/498-odin.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/498-odin.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/498-odin.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/498-odin.jpg",
          },
        },
      });
      break;

    case "wonder-woman":
      res.status(200).json({
        character: {
          id: 720,
          name: "Wonder Woman",
          slug: "720-wonder-woman",
          powerstats: {
            intelligence: 88,
            strength: 100,
            speed: 79,
            durability: 100,
            power: 100,
            combat: 100,
          },
          appearance: {
            gender: "Female",
            race: "Amazon",
            height: ["6'0", "183 cm"],
            weight: ["165 lb", "74 kg"],
            eyeColor: "Blue",
            hairColor: "Black",
          },
          biography: {
            fullName: "Diana Prince",
            alterEgos: "No alter egos found.",
            aliases: [
              "Princess Diana",
              "Princess of the Amazons",
              "Goddess of Truth",
              " Wondy",
              "Wonder Girl",
              "The Amazon Princess",
            ],
            placeOfBirth: "Themyscira",
            firstAppearance: "All-Star Comics #8 (December, 1941)",
            publisher: "DC Comics",
            alignment: "good",
          },
          work: {
            occupation:
              "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
            base: "-",
          },
          connections: {
            groupAffiliation:
              "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
            relatives:
              "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)",
          },
          images: {
            xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/720-wonder-woman.jpg",
            sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg",
            md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/720-wonder-woman.jpg",
            lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/720-wonder-woman.jpg",
          },
        },
      });

    default:
      res.status(404).json({
        error: "Character not found",
      });
      break;
  }
}
