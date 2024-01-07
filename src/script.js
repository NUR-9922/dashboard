/* This code is adding an event listener to an element with the ID "Hamburger-nav-icon". When that
element is clicked, the code inside the arrow function will be executed. */
document.getElementById("Hamburger-nav-icon").addEventListener("click", () => {
     document.getElementById("sidebar").classList.toggle("sidebar-right-0")
});

/* This code is selecting all elements with the class "sidebar-heading" and "sidebarHeadingLi" using
the `document.querySelectorAll()` method. It then iterates over each element using the `forEach()`
method. */
const sidebarHeading = document.querySelectorAll(".sidebar-heading");
const sidebarHeadingLi = document.querySelectorAll(".sidebarHeadingLi");

sidebarHeading.forEach((el, i) => {
    el.style.color = "#fff";
    el.style.paddingBottom = "0px";
    el.addEventListener('click', function (event) {
        // If the clicked heading is already active, reset to default
        if (el.style.color === "rgb(4, 201, 183)") {
            el.style.color = "#fff";
            sidebarHeadingLi[i].style.height = "0px";
            sidebarHeadingLi[i].style.paddingBottom = "0px";
        } else {
            // Reset all headings to default color and height
            sidebarHeading.forEach((heading, index) => {
                heading.style.color = "#fff";
                if (index !== i) {
                    sidebarHeadingLi[index].style.height = "0px";
                    sidebarHeadingLi[index].style.paddingBottom = "0px";
                }
            });

            // Set the clicked heading to active color and adjust height
            el.style.color = "#04c9b7";
            sidebarHeadingLi[i].style.height = "auto";
            sidebarHeadingLi[i].style.paddingBottom = "10px";
        }
    });
});


// Sample data for the pie charts
var totalUsersData = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [{
        data: [800, 434],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
    }]
};

var revenueData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
        data: [30000, 45000, 15000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

var pageViewsData = {
    labels: ['Page 1', 'Page 2', 'Page 3'],
    datasets: [{
        data: [150000, 250000, 167890],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384']
    }]
};

// Create pie charts
var totalUsersChart = new Chart(document.getElementById('totalUsersChart').getContext('2d'), {
    type: 'pie',
    data: totalUsersData
});

var revenueChart = new Chart(document.getElementById('revenueChart').getContext('2d'), {
    type: 'pie',
    data: revenueData
});

var pageViewsChart = new Chart(document.getElementById('pageViewsChart').getContext('2d'), {
    type: 'pie',
    data: pageViewsData
});

    // Chart.js initialization for User Engagement (Line Chart)
    var ctxUserEngagement = document.getElementById('userEngagementChart').getContext('2d');
    var userEngagementChart = new Chart(ctxUserEngagement, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your actual labels
            datasets: [{
                label: 'Engagement',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false,
                data: [65, 59, 80, 81, 56], // Replace with your actual data
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                }
            },
        }
    });

    // Chart.js initialization for Conversion Rates (Bar Chart)
    var ctxConversionRates = document.getElementById('conversionRatesChart').getContext('2d');
    var conversionRatesChart = new Chart(ctxConversionRates, {
        type: 'bar',
        data: {
            labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'], // Replace with your actual labels
            datasets: [{
                label: 'Conversion Rates',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56], // Replace with your actual data
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                }
            },
        }
    });

    // Chart.js initialization for Social Media Stats (Doughnut Chart)
    var ctxSocialMediaStats = document.getElementById('socialMediaStatsChart').getContext('2d');
    var socialMediaStatsChart = new Chart(ctxSocialMediaStats, {
        type: 'doughnut',
        data: {
            labels: ['Facebook', 'Twitter', 'Instagram'],
            datasets: [{
                data: [3000, 1500, 2000],
                backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 206, 86, 0.8)'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });


