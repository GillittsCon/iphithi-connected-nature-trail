import MarkerDetail from "./components/MarkerDetail"
import { getAllMarkers, getMarkerById } from "./utils/getMarkerById"

export default function App() {
  const markers = getAllMarkers()
  const params = new URLSearchParams(window.location.search)
  const markerId = params.get("marker")
  const selectedMarker = markerId ? getMarkerById(markerId) : null

  if (selectedMarker) {
    return <MarkerDetail marker={selectedMarker} />
  }

  return (
    <main>
      <h1>iPhithi Connected Nature Trail</h1>
      <p>A self-guided nature trail showing how restoration connects reserve, suburb,
  and garden. Tap a stop below to explore.</p>

    <section>
      <h2>Trail Links</h2>
      <ul className="trail-links-list">
        {markers.map((marker) => (
          <li key={marker.id}>
            <a className="trail-link-card" href={`?marker=${marker.id}`}>
              <span className="trail-link-title">{marker.title}</span>
              <span className="trail-link-hook">{marker.hook}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
    </main>
  )
}