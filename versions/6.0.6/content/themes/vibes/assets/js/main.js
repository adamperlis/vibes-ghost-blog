/* Mobile menu burger toggle */
(function () {
    const navigation = document.querySelector('.gh-navigation');
    const burger = navigation.querySelector('.gh-burger');
    if (!burger) return;

    burger.addEventListener('click', function () {
        if (!navigation.classList.contains('is-open')) {
            navigation.classList.add('is-open');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            navigation.classList.remove('is-open');
            document.documentElement.style.overflowY = null;
        }
    });
})();

/* Add lightbox to gallery images */
(function () {
    lightbox(
        '.kg-image-card > .kg-image[width][height], .kg-gallery-image > img'
    );
})();

/* Responsive video in post content */
(function () {
    const sources = [
        '.gh-content iframe[src*="youtube.com"]',
        '.gh-content iframe[src*="youtube-nocookie.com"]',
        '.gh-content iframe[src*="player.vimeo.com"]',
        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.gh-content object',
        '.gh-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
(function () {
    dropdown();
})();

/* Infinite scroll pagination */
(function () {
    if (!document.body.classList.contains('home-template') && !document.body.classList.contains('post-template')) {
        pagination();
    }
})();

/* Responsive HTML table */
(function () {
    const tables = document.querySelectorAll('.gh-content > table:not(.gist table)');
    
    tables.forEach(function (table) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gh-table';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
})();

/* Search functionality */
(function () {
    const searchContainer = document.querySelector('.gh-search-container[data-ghost-search]');
    if (!searchContainer) return;

    searchContainer.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Try to trigger Ghost's native search
        const searchTrigger = document.querySelector('[data-ghost-search]');
        if (searchTrigger && searchTrigger.click) {
            searchTrigger.click();
        }
        
        // Also try the alternative Ghost search trigger
        const altSearchTrigger = document.querySelector('.gh-search');
        if (altSearchTrigger && altSearchTrigger.click) {
            altSearchTrigger.click();
        }
        
        // Dispatch custom event for Ghost search
        const searchEvent = new CustomEvent('search:open');
        document.dispatchEvent(searchEvent);
    });
})();

/* Mobile hamburger menu functionality */
(function () {
    const hamburgerBtn = document.querySelector('.vibes-hamburger-btn');
    const mobileMenu = document.querySelector('.vibes-mobile-menu');
    
    if (!hamburgerBtn || !mobileMenu) return;

    hamburgerBtn.addEventListener('click', function () {
        const isOpen = hamburgerBtn.classList.contains('is-open');
        
        if (isOpen) {
            // Close menu
            hamburgerBtn.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            document.documentElement.style.overflowY = null;
        } else {
            // Open menu
            hamburgerBtn.classList.add('is-open');
            mobileMenu.classList.add('is-open');
            document.documentElement.style.overflowY = 'hidden';
        }
    });

    // Close menu when clicking on overlay
    mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) {
            hamburgerBtn.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            document.documentElement.style.overflowY = null;
        }
    });

    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.vibes-mobile-menu-link');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburgerBtn.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            document.documentElement.style.overflowY = null;
        });
    });
})();