var urls = [
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DXa9wYJr1oMFq"
]

var myFrame = document.getElementById("random");

function selectRandomUrl(myFrame) {
    while(true) {
        var index = Math.floor(Math.random() * urls.length);
        if(myFrame.src == urls[index]) {
            continue;
        }
        console.log(urls[index]);
        console.log(myFrame.src);

        myFrame.src = urls[index];
        console.log(myFrame.src);
        break;
    }
}

function codeAddress()
{
    selectRandomUrl(myFrame);
}
