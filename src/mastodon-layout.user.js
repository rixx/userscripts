// ==UserScript==
// @name         Mastodon Tweaks for chaos.social
// @namespace    https://rixx.de
// @match        https://chaos.social/*
// @version      1.0.9
// @description  Classy Mastodon look for chaos.social.
// @icon         https://raw.githubusercontent.com/chaossocial/custom/refs/heads/master/images/logo.svg
// @grant        none
// @author       Tobias 'rixx' Kunze
// @homepageURL  https://github.com/rixx/dotfiles
// @downloadURL  https://raw.githubusercontent.com/rixx/userscripts/refs/heads/main/src/mastodon-layout.user.js
// ==/UserScript==

// Mastodon changed its behaviour wrt layouts: If you set the advanced web interface to
// be preferred, the simple one will still be used for incoming links, and there is not
// even a link back to your preferred version.
// https://github.com/mastodon/mastodon/issues/27092

// If the URL path starts with "@", change it to /deck/@…
// This doesn't handle search, hashtags etc, but it usually won't need to, as
// 95% of the problem is following incoming links to posts.

if (window.location.pathname.startsWith("/@")) {
    window.location.pathname = "/deck/" + window.location.pathname.substr(1);
}

// Add stylesheet to make Mastodon look more bearable, particularly in column layout

const css = `
:root {
  --color-links: #6bc1ff;
  --color-links-button: color-mix(in hsl, var(--color-links), black 30%);
  --color-background: #282c37;
  --color-background-light: #393f4f;
  --color-text-mid: #9baec8;
  --color-text-muted: color-mix(in hsl, var(--color-text-mid), black 30%);
  --color-background-lighter: #4a5266;

  --background-color: var(--color-background);
  --background-border-color: var(--color-background-light);
}


html {
  scrollbar-color: var(--color-text-muted) var(--color-background-light);
}

.admin-wrapper .content {
  background-color: var(--color-background-light);
}

.layout-multiple-columns .column,
.layout-multiple-columns .drawer {
  flex: 1 1 auto;
}

.about__section:nth-of-type(4),
.about__section:nth-of-type(5),
.compose-form .spoiler-input__border,
.navigation-panel__logo,
.notification-group__actions > .button {
  display: none;
}

.account__domain-pill,
.account__header__bio .account__header__fields a,
.account-role,
.admin-wrapper .sidebar ul .simple-navigation-active-leaf a,
.column-back-button,
.column-header.active .column-header__icon,
.column-header__back-button,
.drawer__header a,
.edit-indicator__content a.unhandled-link,
.filters .filter-subset a.selected,
.hashtag-bar a,
.icon-button.active,
.notification-bar-action,
.notification-ungrouped--direct .notification-ungrouped__header,
.notification-ungrouped--direct .status__prepend,
.reply-indicator__content a.unhandled-link,
.status__content a,
.status__content a.unhandled-link,
.status__wrapper-direct .notification-ungrouped__header,
.status__wrapper-direct .status__prepend,
.timeline-hint a {
  &,
  &:hover, &:active, &:focus {
    color: var(--color-links);
  }
}

a.status-card:active,
a.status-card:focus,
a.status-card:hover {
  .status-card__author,
  .status-card__description,
  .status-card__host,
  .status-card__title{
    color: var(--color-links);
  }
}

.account-role {
  border-color: var(--color-links);
}

.status-card__title {
  font-size: 18px;
  line-height: 22px;
}

.column > .scrollable,
.column-subheading,
.compose-form .autosuggest-textarea__textarea,
.compose-form__highlightable,
.compose-form .spoiler-input__input,
.search__popout,
#tabs-bar__portal {
  background: var(--color-background);
}

.compose-form__warning,
.account__section-headline,
.column .column-header,
.column .notification__filter-bar,
.drawer__header,
.drawer__inner,
.drawer__inner__mastodon {
  background-color: var(--color-background-light);
}

.column .column-header {
  border-bottom: 1px solid var(--color-background-lighter);
  box-shadow: 0 1px 2px rgba(255, 255, 255, 0.07);
}


.edit-indicator__content a,
.reply-indicator__content a,
.status__content a {
  color: white;
}

.account .account__display-name,
.account__header__bio .account__header__fields dt,
.account__header__bio .account__header__fields dd,
.account__header__extra__links a,
.account__header__tabs__name h1 small,
.account__section-headline a,
.account__section-headline button,
.admin-wrapper .sidebar ul a,
.character-counter,
.column-header .column-header__back-button,
.column-header__button,
.column-link,
.column-subheading,
.compose-form .dropdown-button
.compose-form .icon-button,
.compose-form__actions .icon-button,
.detailed-status__display-name,
.detailed-status__meta .animated-number,
.drawer__header a.drawer__tab svg,
.dropdown-button,
.dropdown-button__label,
.filters .filter-subset a,
.getting-started__trends h4 a,
.icon-button,
.inline-name-tag, .name-tag, a.inline-name-tag, a.name-tag,
.link-button,
.link-footer p a,
.link-footer p,
.notification-group__main__header__label,
.notification__filter-bar a,
.notification__filter-bar button,
.reply-indicator__content,
.report-card__summary__item__assigned,
.report-card__summary__item__assigned:hover,
.report-card__summary__item__reported-by,
.report-card__summary__item__reported-by:hover,
.report-card__summary__item__content a,
.report-card__summary__item__content a:hover,
.report-card__profile__stats,
.search__icon .icon,
.search__input,
.search__popout h4,
.search__popout .icon-button,
.search__popout__menu__item,
.status__prepend a,
.status-card,
.timeline-hint,
.trends__item__name a,
.trends__item__name,
:link {
  color: var(--color-text-mid);
}

.autosuggest-account .display-name__account,
.compose-form__actions .icon-button.disabled,
.detailed-status__meta a,
.detailed-status__meta,
.notification-group--follow .notification-group__icon,
.notification-group--follow-request .notification-group__icon,
.notification-group__embedded-status .reply-indicator__attachments,
.notification-group__embedded-status__account,
.notification-group__main__additional-content,
.notification-ungrouped__header,
.reply-indicator__attachments,
.status__display-name,
.status__prepend,
.status__relative-time {
  color: var(--color-text-muted);
}

.compose-form__actions .icon-button,
.column-header__button,
.icon-button {
  &:active, &:focus, &:hover {
    color: var(--color-links);
  }
}
.icon-button.star-icon {
  &:active, &:focus, &:hover,
  &.active, &.active:active, &.active:focus, &.active:hover {
    svg {
      color: #ca8f04;
    }
  }
}

.content-warning,
.compose-form .spoiler-input .autosuggest-input {
  background-color: var(--color-background);
  border-color: var(--color-background-lighter);
}
.content-warning:after,
.content-warning:before {
  content: unset;
}

.content-warning {
  color: white;
  position: relative;
  p {
    margin-bottom: 0;
    text-indent: 70px;
  }
  button.link-button {
    display: flex;
    align-items: flex-start;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    span {
      visibility: hidden;
      width: 70px;
      height: 20px;
      margin-top: 7px;
      margin-left: 12px;
      display: block;
      overflow: hidden;
      text-align: left;
      &:before {
        content: "▸ Subject:";
        display: block;
        visibility: visible;
      }
    }
  }
}
.compose-form .autosuggest-textarea__textarea,
.compose-form .spoiler-input__input {
  color: #ebeff4;
  font-size: 16px;
}

.autosuggest-textarea__suggestions__item.selected,
.button,
.compose-form__actions .icon-button.active,
.dropdown-button.active,
.privacy-dropdown__option.active,
.privacy-dropdown__option:focus,
.search__popout__menu__item:hover,
.simple_form .block-button,
.simple_form .button,
.simple_form button {
  background-color: var(--color-links-button);
  color: white;
  &:hover {
    background-color: color-mix(in hsl, var(--color-links-button), black 10%);
  }
}
.dropdown-button {
  border-color: var(--color-text-mid);
}

.notification-group--unread::before,
.notification-ungrouped--unread::before {
  border-color: var(--color-links-button);
}
.notification-ungrouped {
  padding: 16px;
}

.compose-form__highlightable {
  border: 1px solid var(--color-background-lighter);
}

.reply-indicator {
  border: 1px solid var(--color-background-lighter);
  border-radius: 4px;
  padding: 8px;
}


.account__section-headline a,
.account__section-headline button,
.notification__filter-bar a,
.notification__filter-bar button {
  padding: 10px 0;
}
.account__section-headline a.active::before,
.account__section-headline button.active::before,
.notification__filter-bar a.active::before,
.notification__filter-bar button.active::before {
  background: var(--color-text-mid);
}
.icon {
  height: 20px;
  width: 20px;
}

.filters .filter-subset a {
  border-bottom-color: var(--color-background-light);
}
.filters .filter-subset a.selected {
  border-bottom-color: var(--color-links);
}

.trends__item__sparkline path:first-child {
  fill: var(--color-background-light) !important;
}
.trends__item__sparkline path:last-child {
  stroke: var(--color-text-mid) !important;
}
`

const addStyle = (css) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.append(style);
}
addStyle(css);
