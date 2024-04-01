const containerVideos = document.querySelector('.videos__container');

const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) =>
        videos.forEach((video) => {
            containerVideos.innerHTML += 
    })
)
