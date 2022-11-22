const submitNewForm = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#crystalName').value.trim();
    const price = document.querySelector('#crystalPrice').value.trim();
    const description = document.querySelector('#crystalDescription').value.trim();
    const hardness = document.querySelector('#customRangeHardness').value.trim();
  
    if (name && description && price && hardness) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, price, description, hardness}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/crystal/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', submitNewForm);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', deleteButtonHandler);
  