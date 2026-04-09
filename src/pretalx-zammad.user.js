// ==UserScript==
// @name         pretalx Zammad Context Refresh
// @namespace    https://rixx.de
// @match        https://support.rixx.de/*
// @version      1.1.0
// @description  Add customer context link to Zammad tickets from pretalx
// @grant        none
// @author       Tobias 'rixx' Kunze
// @homepageURL  https://github.com/rixx/userscripts
// @downloadURL  https://raw.githubusercontent.com/rixx/userscripts/refs/heads/main/src/pretalx-zammad.user.js
// ==/UserScript==

const PRETALX_URL = "https://pretalx.com/orga/p/zammad/refresh/"

const getTicketId = () => {
    const match = window.location.hash.match(/#ticket\/zoom\/(\d+)/)
    return match ? match[1] : null
}

const createLink = (ticketId) => {
    const link = document.createElement("a")
    link.className = "pretalx-context-link"
    link.href = `${PRETALX_URL}?ticket_id=${ticketId}`
    link.target = "_blank"
    link.rel = "noopener"
    link.style.cssText = "display: inline-block; margin: 8px 0; padding: 6px 12px; background: #3aa57c; color: white; border-radius: 4px; text-decoration: none; font-size: 12px;"
    link.textContent = "\u21bb pretalx context"
    link.title = "Add pretalx customer context note (opens in new tab)"
    return link
}

const addLinkToTicket = () => {
    const ticketId = getTicketId()
    if (!ticketId) return

    const attributeBar = document.querySelector(".attributeBar-inner")
    if (!attributeBar) return

    if (attributeBar.querySelector(".pretalx-context-link")) return

    attributeBar.prepend(createLink(ticketId))
}

// Watch for URL/hash changes (Zammad is a SPA)
window.addEventListener("hashchange", () => setTimeout(addLinkToTicket, 1000))

setTimeout(addLinkToTicket, 500)
const observer = new MutationObserver(() => {
    if (getTicketId()) addLinkToTicket()
})
observer.observe(document.body, { childList: true, subtree: true })
