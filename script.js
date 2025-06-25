let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let bat = document.getElementById('bat');

window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        let scrollValue = window.scrollY;
        let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        let limitedScroll = Math.min(scrollValue, maxScroll);

        // Existing parallax moves
        text.style.transform = `translateY(${limitedScroll * 2.5}px)`;
        treeLeft.style.transform = `translateX(${limitedScroll * -1.5}px)`;
        treeRight.style.transform = `translateX(${limitedScroll * 1.5}px)`;

        // NEW: Scale bat based on scroll position
        let scaleFactor = 1 + limitedScroll / 1000; // Tweak growth speed here
        if (scaleFactor > 2) scaleFactor = 2; // Optional: max limit

        bat.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    });
});