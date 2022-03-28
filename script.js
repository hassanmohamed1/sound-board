const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click",() => {

        StopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function StopSongs() {
    sounds.forEach(sound => {
        const songs = document.getElementById(sound)
        songs.pause()
        songs.currentTime = 0;
    })
}
