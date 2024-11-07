// Function to handle event details page dynamic data (if needed)
function getEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    if (!eventId) {
        alert("Event not found!");
        return;
    }

    // Event data
    const eventDetails = {
        1: {
            name: "Annual Coding Hackathon",
            date: "25th December 2024",
            location: "KIET College Campus, Main Auditorium",
            description: "The Annual Coding Hackathon is a 24-hour coding event where participants (individuals or teams) are tasked with solving real-world programming problems. It is a competitive event aimed at testing participants' coding skills in multiple domains such as algorithms, data structures, web development, and machine learning.",
            judges: "Dr. John Doe (Google), Prof. Jane Smith (KIET), Sarah Brown (Freelance Data Scientist)",
            registerLink: "#",
            prizes: "1st Prize: ₹50,000 + Internship Opportunity at Google, 2nd Prize: ₹25,000 + Internship at KIET, 3rd Prize: ₹15,000 + Certificate of Achievement"
        },
        2: {
            name: "Web Development Bootcamp",
            date: "10th January 2025",
            location: "KIET College Campus, Room 204 (Computer Science Lab)",
            description: "The Web Development Bootcamp is a hands-on workshop designed to teach participants the basics of web development. It will cover everything from HTML and CSS to JavaScript and modern front-end frameworks like React.",
            judges: "John Doe (Full-stack Developer, XYZ Technologies), Emily White (Front-end Developer, KIET College)",
            registerLink: "#",
            prizes: "Certificate of Completion, Job Placement Assistance Program, Free Access to Online Web Dev Resources"
        },
        3: {
            name: "Cloud Computing Seminar",
            date: "20th November 2024",
            location: "KIET College Auditorium",
            description: "The Cloud Computing Seminar brings together experts to discuss the latest developments in cloud technology. Attendees will gain insights into cloud infrastructure, cloud service models (IaaS, PaaS, SaaS), and how organizations are leveraging cloud computing to drive innovation.",
            judges: "Dr. Richard Lee (CloudTech Solutions), Prof. Sarah Johnson (KIET), Michael James (AWS)",
            registerLink: "#",
            prizes: "Free for KIET Students, ₹500 for External Participants"
        }
    };

    // Retrieve the event details using eventId
    const event = eventDetails[eventId];
    if (event) {
        document.getElementById('event-title').textContent = event.name;
        document.getElementById('event-date').textContent = `Date: ${event.date}`;
        document.getElementById('event-location').textContent = `Location: ${event.location}`;
        document.getElementById('event-description').textContent = `About: ${event.description}`;
        document.getElementById('event-judges').textContent = `Judges/Speakers: ${event.judges}`;
        document.getElementById('event-prizes').textContent = `Prizes: ${event.prizes}`;
        document.getElementById('register-button').setAttribute('href', event.registerLink);
    } else {
        alert("Event not found!");
    }
}

// Initialize event details page when it loads
if (window.location.pathname.includes("event-detail.html")) {
    getEventDetails();
}
