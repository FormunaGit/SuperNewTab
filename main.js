const infoDialog = document.getElementById("#info")

$("#searchbar").on('keypress',function(e) {
    if(e.which == 13) {
        const inputString = $("#searchbar").val(); 
        window.location.href = "https://whoogle.tux.pizza/search?q=" + inputString;
    }
});