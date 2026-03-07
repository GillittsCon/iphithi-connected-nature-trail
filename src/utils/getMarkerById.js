import markers from "../data/markers.json"

export function getMarkerById(markerId) {
  return markers.find((marker) => marker.id === markerId)
}

export function getAllMarkers() {
  return markers
}