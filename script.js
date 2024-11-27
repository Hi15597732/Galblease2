document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.querySelector('input[name="query"]').value;
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `query=${query}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('results').innerHTML = data;
    });
});
