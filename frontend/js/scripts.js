document.getElementById('suggestion-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const budget = document.getElementById('budget').value;
    const usage = document.getElementById('usage').value;

    try {
        const response = await fetch('http://localhost:3000/api/suggestions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ budget, usage })
        });

        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('ram-specs').textContent = data.RAM;
            document.getElementById('ssd-specs').textContent = data.SSD;
            document.getElementById('motherboard-specs').textContent = data.Motherboard;
            document.getElementById('power-supply-specs').textContent = data.PowerSupply;
            document.getElementById('gpu-specs').textContent = data.GPU;
            document.getElementById('cpu-specs').textContent = data.CPU;
            document.getElementById('cpu-cooler-specs').textContent = data.CPUCooler;
        } else {
            console.error('Error fetching suggestions:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
