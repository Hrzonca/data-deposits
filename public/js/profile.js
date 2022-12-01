
var hardnessEl = document.getElementById('passAmountSlider')
var hardnessNumBox = document.getElementById('passAmountNumber')
var common = document.getElementById('btncheck1')
var uncommon = document.getElementById('btncheck2')
var rare = document.getElementById('btncheck3')
function syncCharacterAmount(event) {
  var value = event.target.value
  hardnessNumBox.value = value
  hardnessEl.value = value
}

var category_id;

hardnessNumBox.addEventListener('input', syncCharacterAmount)
hardnessEl.addEventListener('input', syncCharacterAmount)
const submitNewForm = async (event) => {
    var hardness = hardnessEl.value
    if (common.checked) category_id = 1
    if (uncommon.checked) category_id = 2
    if (rare.checked) category_id = 3
    const name = document.querySelector('#crystalName').value.trim();
    const price = document.querySelector('#crystalPrice').value.trim();
    const description = document.querySelector('#crystalDescription').value.trim();

    if ( name && description && price && hardness && category_id) {
      const response = await fetch(`/api/crystals`, {
        method: 'POST',
        body: JSON.stringify({name, description, price, hardness, category_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create crystal');
      }
    }
    event.preventDefault();

  };
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/crystals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete crystal');
      }
    }
  };
  
  document
    .querySelector('.new-Crystal')
    .addEventListener('click', submitNewForm);
  
  document
    .querySelector('.crystal-list')
    .addEventListener('click', deleteButtonHandler);
  
