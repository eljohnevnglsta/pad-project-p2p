const suggestions = [
    { name: "CMSC 12", link: "course_page.html" },
    { name: "CMSC 123", link: "course_page.html" },
    { name: "CMSC 125", link: "course_page.html" },
    { name: "CMSC 124", link: "course_page.html" },
    { name: "CMSC 130", link: "course_page.html" },
    { name: "SAS 1", link: "course_page.html" },
    { name: "HK 12", link: "course_page.html" },
    { name: "COMM 10", link: "course_page.html" },
    { name: "Maria Mercedes", link: "profs_page.html" },
    { name: "Luis Manzano", link: "profs_page.html" },
    { name: "Juan Dela Cruz", link: "profs_page.html" }
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const suggestionsList = document.getElementById('suggestions-list');

// Event listener for input changes
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = ''; // Clear the list before adding new suggestions

    if (query) {
        const filteredSuggestions = suggestions.filter(item => 
            item.name.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion.name;

            // Set the clicked suggestion to redirect to the link
            li.addEventListener('click', function () {
                window.location.href = suggestion.link; // Redirect to the link
            });

            suggestionsList.appendChild(li);
        });
    }
    
    // Show or hide the suggestions container based on results
    suggestionsContainer.style.display = filteredSuggestions.length ? 'block' : 'none';
});

// Hide suggestions when clicked outside the input
document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-container')) {
        suggestionsContainer.style.display = 'none';
    }
});
