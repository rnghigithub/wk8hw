function getData() {
    var movie = document.getElementById(`movie`).value;
    var container = document.getElementById(`container`);
    var url = `http://www.omdbapi.com/?i=tt3896198&apikey=2efd3d52=${movie}`;
    var xhttps = new XMLHttpRequest();       

    xhttps.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
          console.log(this.responseText);
          console.log(JSON.parse(this.responseText));
          const data = JSON.parse(this.responseText);
          document.getElementById('director').innerHTML = data.Director;
          document.getElementById('title').innerHTML = data.Title;
          document.getElementById('runtime').innerHTML = data.Runtime;
      }
    };   
    xhttps.open("GET", url, true);
    xhttps.send();
 
   }

    const button = document.getElementById('btn');
    button.addEventListener('click', () => {
       getData();
       document.getElementById('container').style.border = '2px solid #000';
    });
    
