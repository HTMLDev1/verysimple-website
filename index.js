document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let query = document.getElementById('query').value;
    fetchResults(query);
});

function fetchResults(query) {
    // Simulate fetching results from a backend
    let results = [
        { title: "Example Domain" url: "https://example.com", snippet: "This domain is for use in illustrative examples in documents."},
        { title: "Another Example", url: "https://example.com", snippet: "This is another example of a search result snippet."},
    ]
}