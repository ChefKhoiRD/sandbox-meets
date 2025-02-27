# Your Practice Weekend Hackathon
## You have 48 Hours (Starting: 11 AM Friday) - (Ending: 11 AM Sunday)
## Prompt: Create an web app that serves as an addition to Sandbox

User Story: As a Sandbox applicant, I want a better, more convenient way to host and share my Sandbox meetup.

* My MVP: A website that allows Sandbox applicants to easily share and host spontaneous events.

  - It needs to have some kind of authentication
    * Ideally with something like access to Sandbox Education User Data
    * Possibly with school email verification (Possibly through Azure Entra ID, though this applies specifically to UVU students because I am not sure what authentication BYU, USU, etc. are using).
    
  - It needs to display events.
    * It needs to show things like: Date, Time, Location, Event Host, etc.
    * It should display events to users regardless of auth as a UX feature.
    * It should encourage users to log in. It should give users more inter-activity by signing in.

  - It should allow for authenticated users to create and host events
    * A form that allows users to create events to be stored in the back-end (Emergency: you could also store it front-end as JSON)

---
# My Review (February 17 2025)
  * Blockers
    - Partner's rabbit passed away, spent time greiving.
    - Valentines dinner date on Friday (2-14) evening

  * Issues
    - Spent too long working on authentication
    - Spent too long setting up the backend

### Where did I make a win
  * Pretty good random UI elements that would have done well on the presentation phase (Skeletons, Transitions effects, etc.).
  * Used 100% Tailwind for this, which definitely sped up development time.
  * For my first real run with Next.js, I feel more confident and understand why it's so widely adopted now.

### Losses
  * Deployment
    * Never got the chance to deploy, could have lost a number of hours.
    * Forgot the rule: Deploy early, deploy often.
  * Incorporated oAuth but something like Azure Entra ID would have allowed me to filter for @(uvu, byu, usu).edu emails.
  * Gave up on constant commits mid-way through, should have focused more on making sure I practiced for a hackathon.
  * Got too focused on adding front-end features rather than pushing out MVP
