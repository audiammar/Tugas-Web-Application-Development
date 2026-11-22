// Data array sumber
const items = [
  { name: "Content Security Policy (CSP)", category: "Web Security" },
  { name: "Cross-Site Scripting Prevention", category: "Web Security" },
  { name: "PostgreSQL & PL/pgSQL", category: "Database" },
  { name: "DOM Manipulation API", category: "Frontend" },
  { name: "JSON Web Token (JWT)", category: "Authentication" },
  { name: "RESTful API Architecture", category: "Backend" },
  { name: "HTTPS & TLS Encryption", category: "Network Security" },
  { name: "Input Sanitization & Escaping", category: "Web Security" }
];

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");

// Fungsi render ulang DOM secara aman tanpa innerHTML
function renderItems(filteredData, keyword = "") {
  // Membersihkan elemen anak sebelumnya tanpa innerHTML
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }

  // Jika hasil filter kosong
  if (filteredData.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = `Tidak ada hasil yang cocok untuk "${keyword}".`;
    resultList.appendChild(emptyItem);
    return;
  }

  // Membuat elemen DOM baru untuk setiap item menggunakan createElement & textContent
  filteredData.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item-card";

    const titleSpan = document.createElement("span");
    titleSpan.className = "item-title";
    titleSpan.textContent = item.name;

    const categorySpan = document.createElement("span");
    categorySpan.className = "item-category";
    categorySpan.textContent = item.category;

    li.appendChild(titleSpan);
    li.appendChild(categorySpan);
    resultList.appendChild(li);
  });
}

// Event listener real-time saat pengguna mengetik
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  const filtered = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  renderItems(filtered, event.target.value);
});

// Render awal seluruh data saat halaman pertama kali dimuat
renderItems(items);