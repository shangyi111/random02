getData();

async function getData(){
	const options = {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify()
	};
	const response = await fetch('/api',options);
	const res = await response.json();
	const button = document.getElementById('submit');
	button.addEventListener('click', async event=>{
		const root = document.createElement('p');
		const time = document.createElement('div');
		const content = document.createElement('div');
		document.body.append(root);
		root.append(time,content);
		time.textContent =res.time; 
		content.textContent = res.content;

	});
}
