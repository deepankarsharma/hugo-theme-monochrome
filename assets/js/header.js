window.addEventListener("DOMContentLoaded", function () {
    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    dark_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.theme = 'dark';
    });

    light_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.theme = 'light';
    });

    var rssBtnElement = document.getElementById('rss_btn');
    
    if (rssBtnElement) {
        rssBtnElement.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action if the element is already a link
            
            // Open the RSS feed URL
            window.open('/index.xml', '_blank');
        });
        
        // Add cursor style to indicate it's clickable
        //rssBtnElement.style.cursor = 'pointer';
        
        // Optional: Add title attribute for tooltip
        rssBtnElement.setAttribute('title', 'Open RSS Feed');
    } else {
        console.warn('Element with id "rss_btn" not found');
    }
});
