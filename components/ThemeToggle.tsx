"use client";

export default function ThemeToggle() {
    const toggle = () => {
        const dark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", dark ? "dark" : "light");
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="min-h-11 border border-border px-4 text-sm cursor-pointer"
        >
            <span className="dark:hidden">Dark</span>
            <span className="hidden dark:inline">Light</span>
        </button>
    );
}