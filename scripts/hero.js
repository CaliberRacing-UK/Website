document.addEventListener('DOMContentLoaded', () => {
    // Update width of hero overlay to match widest child + padding
    function updateHeroOverlayWidth() {
        const heroContent = document.querySelector('.hero-content');
        const heroOverlay = document.querySelector('.hero-overlay');
        if (!heroContent || !heroOverlay) return;

        let maxWidth = 0;
        for (const child of heroContent.children) {
        const width = child.getBoundingClientRect().width;
        if (width > maxWidth) maxWidth = width;
        }
        heroOverlay.style.width = `${maxWidth + 20}px`; // 20px padding
    }

    window.addEventListener('resize', () => {
        updateHeroOverlayWidth();
    });

    window.addEventListener('load', () => {
        updateHeroOverlayWidth();
    });
});