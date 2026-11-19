
function searchProperties() {
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    const budget = document.getElementById('budget').value;

    alert(
        'Search criteria:\n' +
        'Location: ' + (location || 'Any') + '\n' +
        'Property: ' + (type || 'Any') + '\n' +
        'Budget: ' + (budget || 'Any')
    );
}
