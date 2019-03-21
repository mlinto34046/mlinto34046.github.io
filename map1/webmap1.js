let macyOddjob = L.map('macyMapp').setView([30.4474, -90.0362], 5)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(macyOddjob)
let mysteryHaus = L.marker([30.4474, -90.0362]).addTo(macyOddjob)
let museumPoly = L.polygon([
  [30.479094, -90.039538],
  [30.478792, -90.039021],
  [30.479276, -90.039158]
]).addTo(macyOddjob)
mysteryHaus.bindPopup('Abita Mystery House')
museumPoly.bindPopup('Abita Trailhead Museum')
