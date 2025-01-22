<script>
    document.addEventListener("DOMContentLoaded", () => {
        const heading = document.querySelector(".animated-heading");
        const words = heading.querySelectorAll("span");

        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = "1";
                word.style.transform = "translateY(0)";
            }, index * 200); // Adjust timing (200ms) as needed
        });
    });
</script>
