//You have a watchlist of movies. Use push, pop, and indexOf to manage the list.

//Tasks:

const watchlist = ["Inception", "Interstellar", "The Dark Knight"];

//1. Add "Oppenheimer" and "Dunkirk" to the watchlist using push

watchlist.push('Oppenheimer', 'Dunkirk')
console.log(watchlist)

//2. You finished the last movie, remove it using pop and save it to a variable called watched. Log "Just finished watching: " and the movie name.

let watched = watchlist.pop()
console.log( `Just finished watching: ${watched}`)

//3. A friend asks if "Interstellar" is on your list , use indexOf to check and log either "Interstellar is on the list!" or "Interstellar is not on the list." based on the result

let result = watchlist.indexOf('Interstellar')

if (result !== -1){
console.log('Interstellar is on the list!')
} else {
  console.log('Interstellar is not on the list.')
}
