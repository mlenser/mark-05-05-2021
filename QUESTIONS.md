# Questions

## 1. What would you add to your solution if you had more time?

1. Investigate if `setState` is not updating the values quick enough. It may be possible that data is not displaying correctly, but it is really difficult to know if that is the case as the sample URL does not get data from the same place. If this is the case you could use `useRef` to store the asks and bids and then adjust that all the way down, setting the value in the context at the end. It would require mutation in `adjustValues.ts` which I think is best to avoid unless that is the only way. I explored that as an option in the `mutate` branch (mainly on `DataWrapper` and `adjustValues`, but don’t think it is a good way forward). More information would be needed before proceeding.
2. Check components to see if we can prevent rerendering as there is a lot of data changing. This may be the cause of the app crashing locally, but it doesn’t crash in production, so I think it may be an issue with the local Gatsby server.
3. Find out how to solve the issue of styled-components generating hundreds of classes as the width of `barStyle` in `PriceSizeTotal` changes frequently. They recommend using `.attrs`, but there doesn’t seem to be a way to use a media query with that which is needed.
4. Automatically determine how many rows to show based on screen size. I could calculate the viewport height and divide by the size of a row to determine how many rows to show. Currently, this is hardcoded to 15 which is more mobile-friendly.
5. Add a skeleton loading state for the graph for the milliseconds before the websocket connects. The delay could be longer on slow devices.
6. Use a proper set of components from a design system, or create one.
7. Possibly replace Material UI with the design system used in an organization.
8. Add local storage for the `groupInterval` so it is saved for the user each time they visit.
9. Fix tooltips, so they work on mobile (Material UI issue).

## 2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

I would spend some time running some performance testing on my code that parses the data from the websockets. It likely wouldn’t be too impactful, but if it runs thousands of times a second then it could have a performance impact.

Beyond that, the site is static so once it is built the only data transferring is from the file server (CDN hopefully) to the client. That is very minimal. We should put it on a quality CDN like Fastly, Netlify, AWS, or other options like Azure.

With a CDN we can do edge-caching. If we don’t have edge-caching then we can add some cache logic to our server heavily favor cache.

Most of the data is client based via websockets and that hits the backend. So the backend should potentially add some limits when they start having load issues. Perhaps they could limit the update time once they detect memory is at 70% for example.

If we have issues with bots, then we could add other services in front of our server like cloudflare.

## 3. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you’ve used it.

### GatsbyJS image rendering

GatsbyJS’s image rendering is a huge leap forward in image performance. On build time it takes a normal image and generates a `webp` and `avif` version of each image (with a fallback to `png` or `jpg` for browsers that don’t support `webp` and `avif`). It also generates multiple versions of each file type. The file type results in a smaller image for the user as a JPG (lossy) image can be reduced from ~75 kB to ~43 kB with WebP and ~18 kB with AVIF (with results varying for each image). A smaller file size coupled with appropriate width/height dimensions for each breakpoint results in limited over-serving of image data to the user.

I think this feature is incredibly impactful as images consume a lot of data which results in poor performance and more energy costs (I read a blog a while back that estimated energy costs and C02 emissions from images on websites). Images are generally the first issue to tackle for user performance of a site - especially for mobile users or users with a slow connection.

https://www.gatsbyjs.com/plugins/gatsby-plugin-image discusses how to use this with GatsbyJS.

Super basic usage:

```
import { StaticImage } from "gatsby-plugin-image"

const Kitten = () => <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />;
```

### React context

React’s Context API allows a developer to access data across multiple components. It’s a bit older now, but I think it has a huge impact on how we develop. The need for Redux is significantly reduced as local contexts can be used for most common cases of handling application state across multiple components.

## 4. How would you track down a performance issue in production? Have you ever had to do this?

I have debugged performance problems many times - much more before switching to a static site.

How to debug and solve really depends on what the performance problem is. Is it users experiencing a slow initial load or a slow response to interactions or is the server being overwhelmed by the amount of users?

If it’s a slow initial load then I would start with a lighthouse audit to get an idea of the performance. With GatsbyJS or NodeJS (using static) most of the problems with this are already solved, but some optimizations like bundle chunking via loadable can be done. There are tools like webpack analyzer that can help here. If it’s a lot of data sent to the user then we can reduce/remove some large dependencies. If we’re using another technology then we can start caching more to achieve a better initial load time (this won’t solve it all, but could be a good step). The network tab of Chrome can help identify if any scripts are slow to respond.

If it’s a slow response to interactions then I would try to interact with the site using an emulator that slows down my browser. I could then detect which parts of the site are slow and attempt to triage from there. Maybe some script has a memory leak or maybe we can use memoization (essentially caching) to speed up some of our javascript functions.

If it’s the server being overwhelmed then we need to look at our CDN and backend to analyze where the bottleneck is. It can also be helpful to have external vendors complete a performance audit to better identify where issues may be - we’ve done that a few times.

## 5. Can you describe common security concerns to consider for a frontend developer?

- Cross-site scripting (XSS) attacks. An attacker can put malicious code into the web application that runs when another user accesses the site. Some problem areas where this can more easily occur:
  - Forms: solve by sanitizing any user-inputted data. Recaptcha can help here for bots.
  - Query parameters: solve by sanitizing any incoming data.
  - Using `innerHTML`: solve by never using this.
  - HTTP responses: We can modify the response headers to prevent XSS in any responses that shouldn’t contain HTML/JS.
  - Whitelist trusted content via a Content Security Policy (CSP)
  - Code dependencies: See below.
- Cross-site request forgery (CSRF) is when a user is tricked to submit a malicious request by a third party. Prevention:
  - Generate a CSRF token for each user and expect that token for any requests. This prevents other sites from pretending to be like our site as they wouldn’t have this token
  - Not having URLs for specific actions in URLs. This prevents seemingly innocent looking links in emails that cause an action to be taken that the user didn’t want to cause.
- Security vulnerabilities in code dependencies. Solve by updating dependencies regularly to ensure your application receives the latest security fixes. If it isn’t fixed then you can open an issue with the developers who made the dependency. Worst case you can replace/remove the dependency.
- Code dependencies could have malicious code. Solve by auditing code dependencies.
- DDOS attacks can occur when someone has many users hit your site at the same time in an attempt to overwhelm your server, causing the site to be unavailable. Static can help with the client here, but there are always limits. Recaptcha can help with any forms or other interactions. We can use some services like Cloudflare if this occurs regularly.

## 6. How would you improve the Kraken API that you just used?

Without extensive knowledge of the API and possible use cases it is hard to say definitively what could be improved. From my short time working with it, from a frontend developer perspective the following would be easier ways for me to handle the data:

- Instead of passing the raw updated values the following would be better:
  - An array of prices to remove (instead of providing a price and size 0). This could easily be iterated over by finding values by the price listed and removing them. I extract a list and iterate over it in `getNewValues` inside `adjustValues.ts`.
  - An array of values to adjust with a `price` and `size` to update to. This could be iterated over to find the items by `price` and adjust the `size`.
  - An array of values to add. Because I’m unsure if a value is new or changed I have to search through the values to see if they exist and then add the ones that don’t. If this was available, I could simply add these on without searching.
