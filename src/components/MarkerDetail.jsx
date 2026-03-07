import { useState } from "react"

export default function MarkerDetail({ marker }) {
  const [viewMode, setViewMode] = useState("quick")
  const [selectedSeason, setSelectedSeason] = useState("summer")

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

          <p>
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
          </p>
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