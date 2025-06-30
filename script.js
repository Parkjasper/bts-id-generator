
document.getElementById('idForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('cardName').textContent = document.getElementById('name').value;
  document.getElementById('cardCity').textContent = document.getElementById('city').value;
  document.getElementById('cardSince').textContent = document.getElementById('since').value;
  document.getElementById('cardBias').textContent = document.getElementById('bias').value;
  document.getElementById('cardQuote').textContent = document.getElementById('quote').value;
  document.getElementById('cardArmyID').textContent = document.getElementById('armyid').value;
  document.getElementById('cardExpiry').textContent = document.getElementById('expiry').value;

  const photo = document.getElementById('photo').files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('cardPhoto').src = e.target.result;
    document.getElementById('cardContainer').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'inline-block';
  };
  reader.readAsDataURL(photo);
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  html2canvas(document.getElementById('idCard')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ARMY_ID_Card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
