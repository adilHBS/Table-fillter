const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('pakistanTable');
    const rows = table.getElementsByTagName('tr');

    searchInput.addEventListener('keyup', function() {
      const filter = searchInput.value.toLowerCase();

      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
          if (cells[j]) {
            const text = cells[j].textContent.toLowerCase();
            if (text.includes(filter)) {
              match = true;
              break;
            }
          }
        }

        rows[i].style.display = match ? '' : 'none';
      }
    });