document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("calendar");

    // Simulated list of upcoming events
    const events = [
        {
            date: "2023-10-20",
            title: "Memorial Golf Day",
            info: "Spweto Country Club 20th Oct 23",
            btn: "<button type='button' class='btn' data-bs-toggle='modal' data-bs-target='#octoberModal'>Read More</button>"
        },

        {
            date: "2024-01-01",
            title: "New Year",
            btn: "<button type='button' class='btn' data-bs-toggle='modal' data-bs-target='#januaryModal'>Read More</button>"
        }
    ];

    // Display upcoming events
    events.forEach(event => {
        const eventDate = new Date(event.date);
        const currentDate = new Date();

        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `<strong>${event.title}</strong><br>${event.date}<br>${event.info}<br>${event.btn}`;
        calendarContainer.appendChild(eventElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("training-calendar");

    // Simulated list of upcoming events
    const events = [
        {
            date: "2023-08-20",
            title: "Womens Day Training"
        },
        {
            date: "2023-09-05",
            title: "Spring Day Training",
            //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem, laudantium at soluta quiaenim blanditiis eveniet voluptate, beatae earum provident iste possimus tempore quas, nesciunt eumrepellendus fugi",
            btn: "<button class='btn'><a>Read More</a></button>"
        },
        {
            date: "2023-10-20",
            title: "Breast Cancer Awareness Training",
            //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem, laudantium at soluta quiaenim blanditiis eveniet voluptate, beatae earum provident iste possimus tempore quas, nesciunt eumrepellendus fugi",
            btn: "<button class='btn'><a>Read More</a></button>"
        },
        {
            date: "2023-12-05",
            title: "Christmas Match Training",
            //info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem, laudantium at soluta quiaenim blanditiis eveniet voluptate, beatae earum provident iste possimus tempore quas, nesciunt eumrepellendus fugi",
            btn: "<button class='btn'><a>Read More</a></button>"
        },

        {
            date: "2024-01-01",
            title: "New Year Training",
            // info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem, laudantium at soluta quiaenim blanditiis eveniet voluptate, beatae earum provident iste possimus tempore quas, nesciunt eumrepellendus fugi",

            btn: "<button class='btn'><a>Read More</a></button>"
        }
        // Add more events here
    ];

    // Display upcoming events
    events.forEach(event => {
        const eventDate = new Date(event.date);
        const currentDate = new Date();

        if (eventDate > currentDate) {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.innerHTML = `<strong>${event.title}</strong><br>${event.date}<br>${event.info}<br>${event.btn}`;
            calendarContainer.appendChild(eventElement);
        }
    });
});