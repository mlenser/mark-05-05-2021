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

## 5. Can you describe common security concerns to consider for a frontend developer?

## 6. How would you improve the Kraken API that you just used?
