GitHub Time Tracking
====================

Add time tracking to the GitHub Issue Tracker (Issues 2.0) and Huboard.com with [Harvest](http://www.getharvest.com/?r=fa37b8).

![GitHub Time Tracking](https://raw.github.com/klokantech/github-time-tracking/master/img/github-time-tracking-440x280.jpg)

Usage
-----
1. Register the [free Harvest account](http://try.hrv.st/66lx).
2. Install the [Google Chrome Extension](https://chrome.google.com/webstore/detail/github-time-tracking/fgkmkpoadhhloghmnnbodkoikmffafoe) or [Firefox Add-On](https://addons.mozilla.org/en-us/firefox/addon/github-time-tracking/)
3. Whenever you visit the issues page on GitHub a new button appears next to the #ticket-number
4. With one click you can start to track the time. The dialog also shows the sum of time already spent by you on this ticket.
5. Harvest provides great [project reports](http://www.getharvest.com/features/reports?r=fa37b8) - with links back to the GitHub tickets.
6. You can track a contract progress based on the estimated time/costs limits, which is very helpful. The system can also send people reminder to fill the time sheets online.
7. It is also possible to directly create [nice looking invoices](http://www.getharvest.com/features/invoicing?r=fa37b8) and estimates or track late payments.

Development
-----------

Code is available in GitHub. Once you download / clone the code to your computer you can alter the functionality and create your own variants of this extension.

Firefox Add-on:

    $ cfx xpi

Chrome Extension:

    $ zip -r github-time-tracking.zip manifest.json data img lib
