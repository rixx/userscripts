// ==UserScript==
// @name         Reddit Auto Translation Remover
// @namespace    https://rixx.de
// @match        https://*.reddit.com/*
// @version      1.0.0
// @description  Removes ?tl=… parameter from Reddit URLs and reloads the page
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png
// @grant        none
// @author       Tobias 'rixx' Kunze
// @homepageURL  https://github.com/rixx/userscripts
// @downloadURL  https://raw.githubusercontent.com/rixx/userscripts/refs/heads/main/src/reddit-auto-translation.js
// @run-at       document-start
// ==/UserScript==

(function() {
    const currentUrl = window.location.href;

    // Check if URL contains ?tl=de parameter
    if (currentUrl.includes('?tl=de')) {
        // Create URL object for easier manipulation
        const url = new URL(currentUrl);
        const bullshitTranslatedLanguage = url.searchParams.get('tl');

        if (bullshitTranslatedLanguage) {
            url.searchParams.delete('tl');
            const newUrl = url.toString();
            window.location.replace(newUrl);
        }
    }
})();
