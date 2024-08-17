const url = 'https://cataas.com/cat';
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
};

const btn = document.getElementById('newBtn');
const image = document.querySelector('img');

const fetchAPI = async ()=>{
    try {
        const response = await fetch(url, options);
        image.src = response.url;
    } catch (error) {
        console.error(error);
    }
}
btn.addEventListener('click', fetchAPI);

