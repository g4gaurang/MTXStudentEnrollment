# Lessons

* A Pages workflow committed only to a feature branch cannot be manually dispatched through the default-branch workflow list. When a live preview is part of delivery, include the active feature branch in the initial push trigger or verify a default-branch deployment before reporting the Pages target.
* Distinguish a configured Pages target from a deployed site. Test the public URL and report it as live only after it returns the built application.
