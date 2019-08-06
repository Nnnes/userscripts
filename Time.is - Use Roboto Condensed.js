// ==UserScript==
// @name         Use Roboto Condensed on Time.is
// @namespace    https://nnnes.net/
// @version      1.0
// @description  Changes Time.is "Thin sans-serif" clock font to Roboto Condensed
// @author       Nnnes
// @license      MIT
// @match        *://time.is/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.getComputedStyle(document.getElementById('twd')).getPropertyValue('font-family').startsWith("HelveticaNeue-UltraLight")) {
        var rc = document.createElement("style");
        rc.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300&display=swap');"
        document.head.appendChild(rc);
        document.getElementById("twd").style.fontFamily = "Roboto Condensed";
    }
})();
