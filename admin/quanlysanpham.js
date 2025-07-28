const showFormBtn = document.getElementById('showFormBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const productTableBody = document.querySelector('.product_table tbody');

showFormBtn.onclick = () => addProductForm.style.display = 'block';
cancelBtn.onclick = () => addProductForm.style.display = 'none';

addProductForm.onsubmit = function(e) {
    e.preventDefault();
    // Lấy dữ liệu từ form
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const quantity = document.getElementById('productQuantity').value;
    const image = document.getElementById('productImage').value;

    // Tạo dòng mới
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td><img src="${image}" alt="" style="width:60px;height:auto;"></td>
        <td>
            <button class="deleteBtn">Xóa</button>
        </td>
    `;
    productTableBody.appendChild(tr);

    // Reset form và ẩn
    addProductForm.reset();
    addProductForm.style.display = 'none';
};

// Xóa sản phẩm
productTableBody.onclick = function(e) {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.closest('tr').remove();
    }
};