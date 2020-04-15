function getData() {
    var movie = document.getElementById(`movie`).value;
    var container = document.getElementById(`container`);
    var url = `https://www.omdbapi.com/?apikey=YOURAPIKEY&t=${movie}`;
    var xhttps = new XMLHttpRequest();       
}


xhttps.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));

        const data = JSON.parse(this.responseText);

    }
};