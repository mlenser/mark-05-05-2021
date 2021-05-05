# Questions

## 1. What would you add to your solution if you had more time?

1. Use a proper set of components from a design system, or create one.
2. Possibly replace Material UI with the design system used in an organization.
3. Add local storage for the `groupInterval` so it is saved for the user each time they visit.
4. Fix tooltips so they work on mobile (Material UI issue).

## 2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

I would spend some time running some performance testing on my code that parses the data from the websockets. It likely wouldn't be too impactful, but if it runs thousands of times a second then it could have a performance impact.

Beyond that, the site is static so once it is built the only data transferring is from the file server (CDN hopefully) to the client. That is very minimal. We should put it on a quality CDN like Fastly, Netlify, AWS, or other options like Azure.

With a CDN we can do edge-caching. If we don't have edge-caching then we can add some cache logic to our server heavily favor cache.

Most of the data is client based via websockets and that hits the backend. So the backend should potentially add some limits when they start having load issues. Perhaps they could limit the update time once they detect memory is at 70% for example.

If we have issues with bots we could add other services in front like cloudflare.

## 3. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

## 4. How would you track down a performance issue in production? Have you ever had to do this?

I have debugged performance problems many times - much more before switching to a static site.

How to debug and solve really depends on what the performance problem is. Is it users experiencing a slow initial load or a slow response to interactions or is the server being overwhelmed by the amount of users?

If it's a slow initial load then I would start with a lighthouse audit to get an idea of the performance. With GatsbyJS or NodeJS (using static) most of the problems with this are already solved, but some optimizations like bundle chunking via loadable can be done. There are tools like webpack analyzer that can help here. If it's a lot of data sent to the user then we can reduce/remove some large dependencies. If we're using another technology then we can start caching more to achieve a better initial load time (this won't solve it all, but could be a good step). The network tab of Chrome can help identify if any scripts are slow to respond.

If it's a slow response to interactions then I would try to interact with the site using an emulator that slows down my browser. I could then detect which parts of the site are slow and attempt to triage from there. Maybe some script has a memory leak or maybe we can use memoization (essentially caching) to speed up some of our javascript functions.

If it's the server being overwhelmed then we need to look at our CDN and backend to analyze where the bottleneck is. It can also be helpful to have external vendors complete a performance audit to better identify where issues may be - we've done that a few times.

## 5. Can you describe common security concerns to consider for a frontend developer?

- Cross-site scripting (XSS) attacks. An attacker can put malicious code into the web application that runs when another user accesses the site. Some problem areas where this can more easily occur:
  - Forms: solve by sanitizing any user-inputted data. Recaptcha can help here for bots.
  - Query parameters: solve by sanitizing any incoming data.
  - Using `innerHTML`: solve by never using this.
  - HTTP responses: We can modify the response headers to prevent XSS in any responses that shouldn't contain HTML/JS.
  - Whitelist trusted content via a Content Security Policy (CSP)
  - Code dependencies: See below.
- Cross-site request forgery (CSRF) is when a user is tricked to submit a malicious request by a third party. Prevention:
  - Generate a CSRF token for each user and expect that token for any requests. This prevents other sites from pretending to be like our site as they wouldn't have this token
  - Not having URLs for specific actions in URLs. This prevents seemingly innocent looking links in emails that cause an action to be taken that the user didn't want to cause.
- Security vulnerabilities in code dependencies. Solve by updating dependencies regularly to ensure your application receives the latest security fixes. If it isn't fixed then you can open an issue with the developers who made the dependency. Worst case you can replace/remove the dependency.
- Code dependencies could have malicious code. Solve by auditing code dependencies.
- DDOS attacks can occur when someone has many users hit your site at the same time in an attempt to overwhelm your server, causing the site to be unavailable. Static can help with the client here, but there are always limits. Recaptcha can help with any forms or other interactions. We can use some services like Cloudflare if this occurs regularly.

## 6. How would you improve the Kraken API that you just used?
