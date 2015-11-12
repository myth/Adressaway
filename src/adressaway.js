/*
    Author: mythern
    
    Copyright (C) 2014, MIT License
    http://www.opensource.org/licenses/mit-license.php

    Adressaway is provided free of charge, to any person obtaining a copy
    of this software and associated documentation files, to deal in the Software
    without restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies of the software,
    and to permit persons to whom the software is furnished todo so, subject to the
    following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial parts of the software, including credits to the original
    author.
*/

var debug = true;

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        details.requestHeaders.push(
            {
                name: "User-Agent",
                value: "Googlebot/2.1 (+http://www.googlebot.com/bot.html)"
            }
        )
        return {
            requestHeaders: details.requestHeaders
        }
    },
    {
        urls: ["*://*.adressa.no/*", "*://*.rbnett.no/*", "*://*.smp.no/*"]
    },
    ["blocking", "requestHeaders"]
)
