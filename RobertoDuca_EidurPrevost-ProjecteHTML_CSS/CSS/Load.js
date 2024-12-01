// Select Elements
const loadingBar = document.querySelector('.loading-bar');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

let progress = 0;

// Simulate Loading Progress
function simulateLoading() {
    const interval = setInterval(() => {
        progress += 10; // Increment progress by 10%
        loadingBar.style.width = `${progress}%`; // Update width

        console.log(`Progress: ${progress}%`); // Debugging: Check progress value in console

        if (progress >= 100) {
            clearInterval(interval); // Stop interval when 100% is reached
            transitionToMainContent();
        }
    }, 300); // Adjust interval speed (300ms)
}

// Transition to Main Content
function transitionToMainContent() {
    loadingScreen.style.opacity = '0'; // Fade out the loading screen
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Remove loading screen from view
        mainContent.style.display = 'block'; // Show main content
        document.body.style.overflow = 'auto'; // Enable scrolling
    }, 500); // Match fade-out transition time
}

// Start Loading
simulateLoading();
