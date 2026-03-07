import { useState } from "react"

export default function MarkerDetail({ marker }) {
  const [viewMode, setViewMode] = useState("quick")
  const [selectedSeason, setSelectedSeason] = useState("summer")

  const seasonalHighlights = {
    spring: [
      {
        title: "Fresh wetland growth",
        text: "Spring is a good time to explore new wetland growth and look closely at the stream and boardwalk areas.",
        link: "./?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
      {
        title: "Grassland waking up",
        text: "As the reserve warms up, the grassland begins shifting into a more active season for flowers, insects, and pollinators.",
        link: "./?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
    ],
    summer: [
      {
        title: "Dragonflies at the dam",
        text: "Warm sunny days are a good time to look for dragonflies near open water around the dam.",
        link: "./?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
      {
        title: "Wetland flowers along the stream",
        text: "Summer is a good season to walk the stream route and long boardwalk to notice flowering wetland plants.",
        link: "./?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
      {
        title: "Grasses in flower",
        text: "Flowering grasses help show why grassland matters for pollinators, seed life, and the wider food web.",
        link: "./?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
    ],
    autumn: [
      {
        title: "Seed heads and late grassland colour",
        text: "Autumn is a good time to notice grassland seed heads and the changing structure of the reserve.",
        link: "./?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
      {
        title: "Water’s slower seasonal shift",
        text: "The wetland still tells an important story in autumn, especially if you look at how water shapes life through the reserve.",
        link: "./?marker=water-wetland",
        linkLabel: "Start at Water / Wetland",
      },
    ],
    winter: [
      {
        title: "Woodland structure and shelter",
        text: "Winter is a good time to notice the shape of corridors and how sheltered spaces help movement through the reserve.",
        link: "./?marker=green-corridors",
        linkLabel: "Start at Green Corridors / Woodland",
      },
      {
        title: "Grassland form and resilience",
        text: "Without summer growth, winter makes it easier to notice grassland form, texture, and resilience.",
        link: "./?marker=pollinators",
        linkLabel: "Start at Pollinators / Grassland",
      },
    ],
  }

  const currentHighlights = seasonalHighlights[selectedSeason]

  return (
    <main>
      <h1>{marker.title}</h1>
      <p>{marker.hook}</p>

      <figure>
        <img src={marker.beforeImage.src} alt={marker.beforeImage.alt} />
        <figcaption>{marker.beforeImage.caption}</figcaption>
      </figure>

      <p>{marker.transformationLine}</p>

      <section>
        <h2>What it supports now</h2>
        <p>{marker.whatItSupportsNow}</p>
      </section>

      {marker.id === "welcome" && (
        <section>
          <h2>Seasonal highlights</h2>
          <p>Choose a season to see what to look for and where to start.</p>

          <div className="season-buttons">
            <button
              type="button"
              className={selectedSeason === "spring" ? "toggle-button active" : "toggle-button"}
              onClick={() => setSelectedSeason("spring")}
            >
              Spring
            </button>
            <button
              type="button"
              className={selectedSeason === "summer" ? "toggle-button active" : "toggle-button"}
              onClick={() => setSelectedSeason("summer")}
            >
              Summer
            </button>
            <button
              type="button"
              className={selectedSeason === "autumn" ? "toggle-button active" : "toggle-button"}
              onClick={() => setSelectedSeason("autumn")}
            >
              Autumn
            </button>
            <button
              type="button"
              className={selectedSeason === "winter" ? "toggle-button active" : "toggle-button"}
              onClick={() => setSelectedSeason("winter")}
            >
              Winter
            </button>
          </div>

          <div className="seasonal-highlights">
            {currentHighlights.map((item) => (
              <section key={item.title} className="season-highlight-card">
                <h3>{item.title}</h3>
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
      )}

      <section>
        {marker.id === "welcome" && (
          <p className="toggle-helper">
            Tap Quick View for a fast read, or Go Deeper for a little more context.
          </p>
        )}

        <p>
          <button
            type="button"
            className={viewMode === "quick" ? "toggle-button active" : "toggle-button"}
            onClick={() => setViewMode("quick")}
          >
            Quick View
          </button>
          <button
            type="button"
            className={viewMode === "deeper" ? "toggle-button active" : "toggle-button"}
            onClick={() => setViewMode("deeper")}
          >
            Go Deeper
          </button>
        </p>

        {viewMode === "quick" ? (
          <>
            <h2>Quick View</h2>
            <p>{marker.quickView}</p>
          </>
        ) : (
          <>
            <h2>Go Deeper</h2>
            <p>{marker.goDeeper}</p>
          </>
        )}
      </section>

      <section>
        {marker.supportingImages.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption dangerouslySetInnerHTML={{ __html: image.caption }} />
          </figure>
        ))}
      </section>

      <section>
        <h2>Reserve → Suburb → Garden</h2>
        <p>{marker.reserveSuburbGarden}</p>
      </section>

      <section className="try-at-home-card">
        <h2>Try this at home</h2>
        <p>{marker.tryAtHome}</p>
      </section>

      <nav className="page-footer-links" aria-label="Page links">
        <a href="#top">Back to top</a>
        <a href="./?marker=welcome">Welcome</a>
        <a href="./?marker=trail-links">Trail Links</a>
      </nav>
    </main>
  )
}