/**
 * Sagittair Interactive Controller
 */

const SagittairApp = {
    email: "contact@sagittair-defense.com",
    
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        const copyBtn = document.getElementById("copy-email");

        if (copyBtn) {
            copyBtn.addEventListener("click", (e) => {
                e.preventDefault();
                this.copyToClipboard(this.email, copyBtn);
            });
        }
    },

    copyToClipboard(text, element) {
        navigator.clipboard.writeText(text)
            .then(() => {
                const originalText = element.innerText;
                element.innerText = "✅ Copied to Clipboard!";
                element.style.borderColor = "#4BB543";
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    element.innerText = originalText;
                    element.style.borderColor = "#1E90FF";
                }, 2000);
            })
            .catch(err => {
                console.error("Could not copy text: ", err);
                alert("Error copying email.");
            });
    }
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    SagittairApp.init();
});