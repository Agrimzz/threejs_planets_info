export const planetsInfo = [
  {
    id: 1,
    name: "Mercury",
    details: [
      { label: "Type", value: "Terrestrial" },
      { label: "Diameter (km)", value: 4879 },
      { label: "Distance from Sun (km)", value: 57910000 },
      { label: "Moons", value: 0 },
      { label: "Day Length (hours)", value: 4222.6 },
      { label: "Orbital Period (days)", value: 88 },
    ],
    surface_temperature_celsius: {
      min: -173,
      max: 427,
    },
    facts: [
      "Smallest planet in the Solar System",
      "Has no atmosphere to retain heat",
    ],
  },
  {
    id: 2,
    name: "Venus",
    details: [
      { label: "Type", value: "Terrestrial" },
      { label: "Diameter (km)", value: 12104 },
      { label: "Distance from Sun (km)", value: 108200000 },
      { label: "Moons", value: 0 },
      { label: "Day Length (hours)", value: 2802 },
      { label: "Orbital Period (days)", value: 225 },
    ],
    surface_temperature_celsius: {
      min: 462,
      max: 462,
    },
    facts: [
      "Hottest planet in the Solar System due to a thick atmosphere",
      "Rotates in the opposite direction to most planets",
    ],
  },
  {
    id: 3,
    name: "Earth",
    details: [
      { label: "Type", value: "Terrestrial" },
      { label: "Diameter (km)", value: 12742 },
      { label: "Distance from Sun (km)", value: 149600000 },
      { label: "Moons", value: 1 },
      { label: "Day Length (hours)", value: 24 },
      { label: "Orbital Period (days)", value: 365.25 },
    ],
    surface_temperature_celsius: {
      min: -88,
      max: 58,
    },
    facts: [
      "Only planet known to support life",
      "70% of its surface is covered by water",
    ],
  },
  {
    id: 4,
    name: "Mars",
    details: [
      { label: "Type", value: "Terrestrial" },
      { label: "Diameter (km)", value: 6779 },
      { label: "Distance from Sun (km)", value: 227900000 },
      { label: "Moons", value: 2 },
      { label: "Day Length (hours)", value: 24.6 },
      { label: "Orbital Period (days)", value: 687 },
    ],
    surface_temperature_celsius: {
      min: -125,
      max: 20,
    },
    facts: [
      "Known as the 'Red Planet' due to iron oxide on its surface",
      "Has the largest volcano in the Solar System, Olympus Mons",
    ],
  },
  {
    id: 5,
    name: "Jupiter",
    details: [
      { label: "Type", value: "Gas Giant" },
      { label: "Diameter (km)", value: 139820 },
      { label: "Distance from Sun (km)", value: 778500000 },
      { label: "Moons", value: 79 },
      { label: "Day Length (hours)", value: 9.9 },
      { label: "Orbital Period (days)", value: 4333 },
    ],
    surface_temperature_celsius: {
      min: -145,
      max: -108,
    },
    facts: [
      "Largest planet in the Solar System",
      "Has a Great Red Spot, a giant storm larger than Earth",
    ],
  },
  {
    id: 6,
    name: "Saturn",
    details: [
      { label: "Type", value: "Gas Giant" },
      { label: "Diameter (km)", value: 116460 },
      { label: "Distance from Sun (km)", value: 1433000000 },
      { label: "Moons", value: 83 },
      { label: "Day Length (hours)", value: 10.7 },
      { label: "Orbital Period (days)", value: 10759 },
    ],
    surface_temperature_celsius: {
      min: -178,
      max: -139,
    },
    facts: [
      "Famous for its stunning ring system",
      "Has more than 80 moons, including Titan, which has a thick atmosphere",
    ],
  },
  {
    id: 7,
    name: "Uranus",
    details: [
      { label: "Type", value: "Ice Giant" },
      { label: "Diameter (km)", value: 50724 },
      { label: "Distance from Sun (km)", value: 2871000000 },
      { label: "Moons", value: 27 },
      { label: "Day Length (hours)", value: 17.2 },
      { label: "Orbital Period (days)", value: 30687 },
    ],
    surface_temperature_celsius: {
      min: -224,
      max: -216,
    },
    facts: [
      "Rotates on its side, making its axis almost parallel to the Sun",
      "Has a faint ring system and 27 known moons",
    ],
  },
  {
    id: 8,
    name: "Neptune",
    details: [
      { label: "Type", value: "Ice Giant" },
      { label: "Diameter (km)", value: 49244 },
      { label: "Distance from Sun (km)", value: 4495000000 },
      { label: "Moons", value: 14 },
      { label: "Day Length (hours)", value: 16.1 },
      { label: "Orbital Period (days)", value: 60190 },
    ],
    surface_temperature_celsius: {
      min: -218,
      max: -200,
    },
    facts: [
      "Has the fastest winds in the Solar System, reaching 2,100 km/h",
      "Its moon Triton has geysers that erupt nitrogen",
    ],
  },
]
