document.addEventListener('DOMContentLoaded', () => {
    // Set derived colors based on --primary variable
    function setColors() {
        const root = document.documentElement;
        const primary = getComputedStyle(root).getPropertyValue('--primary').trim();

        const parts = primary.replace(/rgba?\(|\)/g, '').split(',');
        if (parts.length < 3) return;

        const r = +parts[0];
        const g = +parts[1];
        const b = +parts[2];
        const a = parts[3] !== undefined ? +parts[3] : 1;

        root.style.setProperty('--primary-dark', `rgba(${Math.round(r * 2)}, ${Math.round(g * 2)}, ${Math.round(b * 2)}, ${a})`);
        root.style.setProperty('--primary-dark', `rgba(${Math.round(r * 0.5)}, ${Math.round(g * 0.5)}, ${Math.round(b * 0.5)}, ${a})`);
        root.style.setProperty('--primary-transparent', `rgba(${r}, ${g}, ${b}, 0.5)`);
    }

    window.addEventListener('load', () => {
        setColors();
    });
});