const showUserFormBtn = document.getElementById('showUserFormBtn');
const addUserForm = document.getElementById('addUserForm');
const cancelUserBtn = document.getElementById('cancelUserBtn');
const userTableBody = document.querySelector('.user_table tbody');

showUserFormBtn.onclick = () => addUserForm.style.display = 'block';
cancelUserBtn.onclick = () => addUserForm.style.display = 'none';

addUserForm.onsubmit = function(e) {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const phone = document.getElementById('userPhone').value;
    const address = document.getElementById('userAddress').value;
    const status = document.getElementById('userStatus').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${address}</td>
        <td>${status}</td>
        <td><button class="deleteUserBtn">Xóa</button></td>
    `;
    userTableBody.appendChild(tr);

    addUserForm.reset();
    addUserForm.style.display = 'none';
};

userTableBody.onclick = function(e) {
    if (e.target.classList.contains('deleteUserBtn')) {
        e.target.closest('tr').remove();
    }
};