
var hardness = document.getElementById('passAmountSlider')
var hardnessNumBox = document.getElementById('passAmountNumber')
var common = document.getElementById('btncheck1')
var uncommon = document.getElementById('btncheck2')
var rare = document.getElementById('btncheck3')

function syncCharacterAmount(event) {
  var value = event.target.value
  hardnessNumBox.value = value
  hardness.value = value
}
var isCommon = common.checked
var isUncommon = uncommon.checked
var isRare = rare.checked
hardnessNumBox.addEventListener('input', syncCharacterAmount)
hardness.addEventListener('input', syncCharacterAmount)
const submitNewForm = async (event) => {
    event.preventDefault();
    if (includeUppercase) category_id = 1
    if (includeSymbols) category_id = 2
    if (includeNumbers) category_id = 3
    const name = document.querySelector('#crystalName').value.trim();
    const price = document.querySelector('#crystalPrice').value.trim();
    const description = document.querySelector('#crystalDescription').value.trim();
  
    if ( category_id && name && description && price && hardness) {
      const response = await fetch(`/api/crystals`, {
        method: 'POST',
        body: JSON.stringify({ category_id, name, price, description, hardness}),
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
    .querySelector('.new-project-form')
    .addEventListener('submit', submitNewForm);
  
  document
    .querySelector('.crystal-list')
    .addEventListener('click', deleteButtonHandler);
  
