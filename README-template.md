
# The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

## My process


  1.[x] Set up the React + vite app
  2.[x] Header
  2. Countries list with 
    2.1 [x] get the results from REST Countries API (https://restcountries.com)
      - the flag
      - the country name
      - population
      - region
      - capital
    2.2 [x] create the card component that enter the list with 
      - the flag
      - the country name
      - population
      - region
      - capital
    2.3 [x] display the results of the API in the card components
  3. [] Country details
    3.1  [x] When a user clicks on a country, it retrieves the following info :
      - The flag
      - Native name
      - Population -> we already have this info. Should we request it again in the api or use the previous query
      - Region 
      - Sub Region 
      - Capital
      - Top Level Domain
      - Currencies (select all languages when multiple)
      - Languages (select all languages when multiple)
      - Border Countries select (all languages when multiple)
    3.2 [x]  Display the endpoint retrieved in a dedicated page called "CountryDetail"
    3.3 [x] Users can click on the countries in Border countries and arrive on the new country detail page
    3.4 [x] Users can click on "Go back" and find the countries list again.
    3.5 [x] Create CSS page to get a clean UI

  4. [x] Search by country
  5. [x] Filter countries by region
  6. [] Dark mode
      6.1 [x] Add section "icon + text dark mode" in the header 
      6.2 [x] Adapt the dark mode on the Header according @style-guide.md
      6.3 [] Adapt the dark mode on the Countries List according @style-guide.md
            - search bar
            - filter
            - country card
      6.4 [] Adapt the dark mode on the country detail page according to @style-guide.md

  7. Responsive design

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite]
