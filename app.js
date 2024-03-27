function fetchSloka() {
    const chapter = document.getElementById('chapter').value;
    const verse = document.getElementById('verse').value;
    const apiUrl = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('sloka').innerText = data.slok;
            document.getElementById('translation').innerText =  data.tej.ht;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('sloka').innerText = 'Failed to fetch data';
            document.getElementById('translation').innerText = 'Failed to fetch translation';
        });
}












