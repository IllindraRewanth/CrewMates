# Web Development Project 7 - *Crewmate Creator*

Submitted by: **Illindra Revanth**

This web app: **allows users to create and manage a personalized team of space crewmates by assigning attributes such as category, class, tool, and alignment. Each crewmate has their own info page, editable stats, and can be managed through a mission-ready command interface.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added crewmatese**
  - The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
  - The detail page contains extra information about the crewmate not included in the summary page
  - Users can navigate to to the edit form from the detail page

## Optional Features

The following **optional** features are implemented:

- [x] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [x] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [x] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley

## Additional Features

* [x] 🎮 Game-inspired UI with fade-in animations and hover transforms
* [x] 🌗 Dark mode toggle (Commander Mode)
* [x] 📊 XP Level bar based on numeric level input
* [x] ✨ Smooth page transitions and animated form load
* [x] 🎨 Minimalist beige/gray/black color theme
* [x] 🧠 Custom stats panel for trait distribution
* [x] ✅ Post-create success feedback with redirect
* [x] 🔁 Live database sync with Supabase (insert, update, delete, order)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/Hotragn/CrewMates/blob/main/Crewmatesapp/crewmate-creator/demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- Integrating Supabase `.update()` vs `.insert()` to prevent duplicate crewmates
- Ensuring the create and edit forms re-render properly on state change
- Making sure Supabase table structure matched required form fields
- Implementing animations without breaking layout consistency
- Styling for a game feel while staying minimal and responsive
