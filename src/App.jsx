import { useState } from "react"
import MarkerDetail from "./components/MarkerDetail"
import { getAllMarkers, getMarkerById } from "./utils/getMarkerById"

export default function App() {
  const markers = getAllMarkers()
  const params = new URLSearchParams(window.location.search)
  const markerId = params.get("marker")
  const selectedMarker = markerId ? getMarkerById(markerId) : getMarkerById("welcome")
  const [selectedSeason, setSelectedSeason] = useState("summer")

  const seasonalHighlights = {
    spring: [
      {
        title: "Fresh wetland growth",
        text: "Spring is a good time to explore new wetland growth and look closely at the stream and boardwalk areas.",
        link: "?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
      {
        title: "Grassland waking up",
        text: "As the reserve warms up, the grassland begins shifting into a more active season for flowers, insects, and pollinators.",
        link: "?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
    ],
    summer: [
      {
        title: "Dragonflies & frog calls at the dam",
        text: "Warm sunny days are a good time to look for dragonflies near open water around the dam, and at dusk, relax and listen to a variety of frog calls.",
        link: "?marker=dam",
        linkLabel: "Start at the dam",
      },
      {
        title: "Gaudy Commodore butterfly",
        text: "In summer, the Gaudy Commodore shows warm orange and brown tones. This seasonal colour change is influenced by temperature, and the summer and winter forms can look so different that they seem like separate species. Click the Winter button to see its winter/dry season form.",
        imageSrc: "images/gaudy-commodore-summer.webp",
        imageAlt: "Gaudy Commodore butterfly in summer colours",
        link: "?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
      {
        title: "Wetland flowers along the stream",
        text: "Summer is a good season to walk the stream route and long boardwalk to notice flowering wetland plants.",
        link: "?marker=water-wetland",
        linkLabel: "Start at stream below the dam",
      },
    ],
    autumn: [
      {
        title: "Seed heads and late grassland colour",
        text: "Autumn is a good time to notice grassland seed heads and the changing structure of the reserve.",
        link: "?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
      {
        title: "Water’s slower seasonal shift",
        text: "The wetland still tells an important story in autumn, especially if you look at how water shapes life through the reserve.",
        link: "?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
    ],
    winter: [
      {
        title: "Gaudy Commodore butterfly",
        text: "In winter, the same butterfly often appears in cooler blue tones. The temperature-linked colour shift is so strong that the winter and summer forms can look like different species. Click the Summer button to see its summer/wet season form.",
        imageSrc: "images/gaudy-commodore-winter.webp",
        imageAlt: "Gaudy Commodore butterfly in winter colours",
        link: "?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
      {
        title: "Woodland structure and shelter",
        text: "Winter is a good time to notice the shape of corridors and how sheltered spaces help movement through the reserve.",
        link: "?marker=green-corridors",
        linkLabel: "Start at Green Corridors / Woodland",
      },
      {
        title: "Grassland form and resilience",
        text: "Without summer growth, winter makes it easier to notice grassland form, texture, and resilience.",
        link: "?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
    ],
  }

  const currentHighlights = seasonalHighlights[selectedSeason]

  if (selectedMarker) {
    return <MarkerDetail marker={selectedMarker} />
  }

  return (
    <main>
      <h1>iPhithi Connected Nature Trail</h1>
      <p>
        A self-guided nature trail showing how restoration connects reserve, suburb,
        and garden. Tap a stop below to explore.
      </p>

      <section>
        <h2>Explore the Trail</h2>
        <ul className="trail-links-list">
          {markers
            .filter((marker) => marker.id !== "welcome" && marker.id !== "dam")
            .map((marker) => (
            <li key={marker.id}>
              <a className="trail-link-card" href={`?marker=${marker.id}`}>
                <span className="trail-link-title">{marker.title}</span>
                <span className="trail-link-hook">{marker.hook}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Seasonal highlights</h2>
        <p>Choose a season to see what to look for and where to start.</p>

        <div className="season-buttons">
          <button
            type="button"
            className={selectedSeason === "spring" ? "toggle-button season-spring active" : "toggle-button season-spring"}
            onClick={() => setSelectedSeason("spring")}
          >
            Spring
          </button>
          <button
            type="button"
            className={selectedSeason === "summer" ? "toggle-button season-summer active" : "toggle-button season-summer"}
            onClick={() => setSelectedSeason("summer")}
          >
            Summer
          </button>
          <button
            type="button"
            className={selectedSeason === "autumn" ? "toggle-button season-autumn active" : "toggle-button season-autumn"}
            onClick={() => setSelectedSeason("autumn")}
          >
            Autumn
          </button>
          <button
            type="button"
            className={selectedSeason === "winter" ? "toggle-button season-winter active" : "toggle-button season-winter"}
            onClick={() => setSelectedSeason("winter")}
          >
            Winter
          </button>
        </div>

        <div className="seasonal-highlights">
          {currentHighlights.map((item) => (
          <section key={item.title} className="season-highlight-card">
            <h3>{item.title}</h3>

            {item.imageSrc && (
              <figure className="season-highlight-image">
                <img src={item.imageSrc} alt={item.imageAlt} />
              </figure>
            )}

            <p>{item.text}</p>
            <p>
              <a href={item.link}>
                <strong>{item.linkLabel}</strong>
              </a>
            </p>
          </section>
          ))}
        </div>
      </section>
    </main>
  )
}