fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
    "method": 'GET',
	"headers": {
	    'X-RapidAPI-Key':'3fe70cfedemsh64750c629c06cfcp155050jsn6228778c3e73',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data=> {
    const list = data.d;
    
    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2><li>`
        document.querySelector('.movies').innerHTML += movie;
    })
})
.catch (err=> {
    console.error(err);
});
