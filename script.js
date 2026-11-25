alert("Welcome to Music Status Checker!");

const updateBanner = (message, color) => {
    document.getElementById("banner").innerHTML = message;
    document.getElementById("banner").style.backgroundColor = color;
};

const checkMusic = () => {
    return new Promise((resolve, reject) => {

        updateBanner("Checking Music...", "orange");

        setTimeout(() => {

            let status = Math.random() > 0.5;

            if (status) {
                resolve("Music is Playing 🎵");
            }
            else {
                reject("Music is Offline ❌");
            }

        }, 2000);

    });
};

const checkMusicStatus = () => {

    checkMusic()
        .then((message) => {
            updateBanner(message, "green");
        })
        .catch((message) => {
            updateBanner(message, "red");
        });

};