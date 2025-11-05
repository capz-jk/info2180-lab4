document.getElementById("searchBtn").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "superheroes.php", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText); // show the <ul><li> list
        } else {
            alert("Error fetching superheroes.");
        }
    };

    xhr.onerror = function () {
        alert("Request failed.");
    };

    xhr.send();
});
