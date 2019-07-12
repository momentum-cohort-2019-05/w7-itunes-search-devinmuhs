function q (sel) {
    return document.querySelector(sel)
  }

function qs (sel) {
    return document.querySelectorAll(sel)
  }


let results
let search = document.querySelector("#search-button")
let music = document.querySelector('#music-bar')
let audio = document.querySelector('#audio-controls')

function resultsNode (results) {
    const artistDiv = document.createElement('div')
    artistDiv.classList
    artistDiv.innerHTML = `
    <div class=artist-div>
    <img src="${results[i].artworkUrl100}">
    <h3>${results[i].artistName}</h3>
    <p class="track">${results[i].trackName}</p>
    <input class="playback" id="playback" type="button" src="${results[i].previewUrl}" value="Play" onclick="play('${results[i].previewUrl}')">
    </div>
    `
      return artistDiv   
}
search.addEventListener('click', () => {
    event.preventDefault()
    let searchTerm = q('#input').value
    let url = `https://itunes-api-proxy.glitch.me/search?term=${encodeURIComponent(searchTerm)}`
    console.log(url)
    const resultsDiv = q('#artist-results')
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        resultsDiv.innerHTML = ''
        results = data.results
        for (i = 0; i < results.length; i++) {
            resultsDiv.appendChild(resultsNode(results))
        }
    })
});
function play(source) {
    music.src = source
    audio.load()
    audio.play()
}



















{/* <p>Album: ${results[i].collectionName}</p> */}


// search.addEventListener('click', () => {
//     event.preventDefault()
//     // console.log(url)
//     let searchTerm = q('#input').value
//     let url = `https://itunes-api-proxy.glitch.me/search?term=${encodeURIComponent(searchTerm)}`
//     fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         results = data.results
//         for (i = 0; i < results.length; i++) {
//             music.src = results[i].previewUrl;
//             audio.load()
//             document.getElementById('artist').innerText += results[i].artistName;
//             document.getElementById('song').innerText += results[i].trackName;   
//             document.getElementById('album').innerText += results[i].collectionName;
//             document.getElementById('artwork').src = results[i].artworkUrl100;
//             console.log(results[i])
//         }
//     })
// });











// document.addEventListener('DOMContentLoaded', function () {
//     fetch(url)
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         results = data.results
//         console.log(results)
//       })
//   })