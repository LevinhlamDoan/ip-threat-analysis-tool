function analyzeIP() {
    const ipInput = document.getElementById('ipInput');
    const resultDiv = document.getElementById('result');
    const apikey = '86682e407074952258f3802a85e7bba4';
    const apiurl = `http://api.ipstack.com/${ipInput.value}?access_key=${apikey}`;

    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Threat level:</strong> ${data.threat}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}