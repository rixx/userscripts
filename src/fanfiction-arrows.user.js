// ==UserScript==
// @name         fanfiction.net Arrow Navigation
// @namespace    https://rixx.de
// @match        https://www.fanfiction.net/*
// @match        https://fanfiction.net/*
// @version      1.0.0
// @description  Adds arrow key navigation to fanfiction.net works
// @icon         https://www.fanfiction.net/static/icons3/ff-icon-192.png
// @grant        none
// @author       Tobias 'rixx' Kunze
// @homepageURL  https://github.com/rixx/dotfiles
// @downloadURL  https://raw.githubusercontent.com/rixx/userscripts/refs/heads/main/src/fanfiction-arrows.user.js
// ==/UserScript==

// Add global keybinds for arrow-right and arrow-left

document.addEventListener('keydown', (event) => {
    // Only trigger if the user is not typing in a text box or text area or pressing a modifier key
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
        return
    }
    if (event.key === 'ArrowRight') {
        document.querySelector('.lc-wrapper + span button:last-of-type').click()
    }
    if (event.key === 'ArrowLeft') {
        document.querySelector('.lc-wrapper + span button:first-of-type').click()
    }
})

document.querySelector("#storytext").style.maxWidth = "60em"
