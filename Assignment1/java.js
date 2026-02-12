const eventForm = document.getElementById('eventForm');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventCategory = document.getElementById('eventCategory');
const eventDescription = document.getElementById('eventDescription');
const eventContainer = document.getElementById('eventContainer');
const clearAllBtn = document.getElementById('clearAllBtn');
const addSampleBtn = document.getElementById('addSampleBtn');
const demoContent = document.getElementById('demoContent');

let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg thai dgjabds"
    },
    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "ahgs dsfchjh adg thai dgjabds"
    }
]

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => addEvent(event));
})
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
   
    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove()

    eventContainer.appendChild(createEventCard(eventData));

}
eventForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }
    addEvent(eventData);

})

eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".event-card");
    if (card && event.target.classList.contains("delete-btn")) {
        card.remove();
    }






    clearAllBtn.addEventListener("click", () => {
        eventContainer.innerHTML = "";
        demoContent.innerHTML = `
        <div id="empty-state">
            <h2>No events added yet!</h2>
            <p>Use the form above to add your first event.</p>
        </div>
    `
    })
})

eventContainer.addEventListener("click", (event) => {
    console.log("inside delete");
    const card = event.target.closest(".event-card");
    if (event.target.classList.contains("delete-btn")) {
        card.remove();
    }
})
    