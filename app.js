const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

// Function to perform AJAX request
function searchHero() {
  const query = searchInput.value.trim();
  resultDiv.innerHTML = "<em>Loading...</em>";

  const safeQuery = encodeURIComponent(query);

  fetch(`superheroes.php?query=${safeQuery}`)
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then(data => {
      resultDiv.innerHTML = data;
    })
    .catch(error => {
      resultDiv.innerHTML = "<p style='color:red;'>Error fetching data.</p>";
      console.error(error);
    });
}

// Trigger search on button click
searchBtn.addEventListener("click", searchHero);

// Trigger search when pressing Enter
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchHero();
  }
});
