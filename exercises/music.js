//You have a playlist of songs. Use slice and join to answer three questions about the playlist.

const playlist = [
  'Blinding Lights',
  'Levitating',
  'Stay',
  'Peaches',
  'Good 4 U',
  'Montero',
  'Industry Baby',
]

//1. Slice out the first 3 songs and log them as a comma separated string

const firstList = playlist.slice(0, 3)
const commaList = firstList.join(', ')
console.log(commaList)

//2. Slice out the last 3 songs (starting at index 4) and log them as a string separated by " | "

const lastList = playlist.slice(4, 7)
const pipeList = lastList.join(' | ')
console.log(pipeList)

//3. Slice out the middle 3 songs (index 2 to 5) and log a sentence that says "Now playing: " followed by the song names joined with " -> "

const midList = playlist.slice(2, 5)
const arrowList = midList.join(' -> ')
console.log(`Now playing: ${arrowList}`)
