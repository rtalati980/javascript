function createYouTubeBox(videoUrl) {
    const box = document.createElement("div");
    box.className = "box";

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = "https://www.youtube.com/embed/"+videoUrl;
    iframe.setAttribute("allowfullscreen", "");

    box.appendChild(iframe);

    return box;
}

function generateCustomBoxes() {
    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = "";

    const videoUrlInput = document.getElementById("videoUrlInput");
    const boxCountInput = document.getElementById("boxCountInput");

    const videoUrl = videoUrlInput.value;
    const boxCount = parseInt(boxCountInput.value, 10);

    for (let i = 0; i < boxCount; i++) {
        const box = createYouTubeBox(videoUrl);
        boxContainer.appendChild(box);
    }
}
