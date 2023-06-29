    // Función para cargar los productos al cargar la página
    $(document).ready(function() {
        loadProducts();
      });
  
      // Función para cargar los productos desde la API
      function loadProducts() {
        $.get('/api/products', function(products) {
          $('#productList').empty();
  
          products.forEach(function(product) {
            const listItem = $('<li>');
            const productName = $('<div>').text(product.name);
            const deleteButton = $('<button>').text('Eliminar').addClass('delete-button').click(() => deleteProduct(product.id));
            const editButton = $('<button>').text('Editar').addClass('edit-button').click(() => editProduct(product.id));

            listItem.append(productName, deleteButton, editButton);

            $('#productList').append(listItem);
          });
        });
      }
  
      function editProduct(id) {
        const product = { id: id, name: '' }; // Objeto de producto vacío con el ID correspondiente
  
        $.get('/api/products/' + id, function(data) {
          product.name = data.name; // Obtener el nombre del producto existente
        
          // Crear un formulario de edición con el nombre actual del producto
          const editForm = $('<form>').addClass('edit-form');
          const productNameInput = $('<input>').attr({
            type: 'text',
            id: 'editProductName',
            value: product.name
          }).addClass('edit-input');
          const updateButton = $('<button>').attr('type', 'button').text('Actualizar').addClass('update-button').click(function() {
            product.name = $('#editProductName').val();
            updateProduct(product);
          });
          editForm.append(productNameInput);
          editForm.append(updateButton);
        
          // Reemplazar el elemento de la lista con el formulario de edición
          const listItem = $('li:contains("' + product.name + '")');
          listItem.html(editForm);
        });
      }
  
      // Función para agregar un producto a través del formulario
      $('#productForm').submit(function(event) {
        event.preventDefault();
  
        const productName = $('#productName').val();
  
        $.post('/api/products', { name: productName }, function(product) {
          $('#productName').val('');
          loadProducts();
        });
      });
  
      function updateProduct(product) {
        $.ajax({
          url: '/api/products/' + product.id,
          type: 'PUT',
          data: product,
          success: function(updatedProduct) {
            loadProducts();
          }
        });
      }
  
      // Función para eliminar un producto
      function deleteProduct(id) {
        console.log(id)
        $.ajax({
          url: '/api/products/' + id,
          type: 'DELETE',
          success: function(product) {
            loadProducts();
          }
        });
      }