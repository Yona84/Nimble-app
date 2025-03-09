# Nimble App

git commit -m "first commit"

npm or yarn for package management

# Installation:

Clone the Repository:

git clone https://github.com/your-username/Nimble-app.git

cd nimble-app
Install Dependencies:

# using npm

npm install

# or using yarn

yarn
Running Locally

To start the development server:

# npm

npm run dev

# yarn

yarn dev
Your application will be running at http://localhost:3000.

To create a production build:

# npm

npm run build
npm run start

# yarn

yarn build
yarn start
Usage

# Main View

Product List: Displays products in a responsive grid.

Search Bar: Filters products by name (case-insensitive).

File Uploader: Allows you to upload a custom JSON file (with a products array) to replace the default product data.

Pagination: Displays 10 items per page; you can move between pages if there are more than 10 products.

# Product Details View

Details Page: Accessed by clicking “View Details” on a product card.

URL Sharing: The URL includes the product’s id, so you can share or bookmark the product details page directly.

Assumptions
Local JSON “API”: The app fetches data from products.json in the /public folder to simulate an API.

Single Data Source: You can replace the data by uploading a new JSON file, but the app does not merge data from multiple sources.

Recoil State: We store the list of products, the current search filter, and the current page in Recoil atoms.

# Additional Notes & Features

React Query: Handles fetching of the default products.json file and caching the results.

Tailwind CSS: Provides utility-first styling for quick, responsive design.

Framer Motion: Adds hover animations and fade-in transitions for a more polished user experience.

Material UI–Inspired Card Design: The product cards have a box shadow, rounded corners, and a hover effect reminiscent of Material UI’s

components: Reusable UI components (search bar, file uploader, pagination, etc.).

pages: Next.js pages for the main view (index.tsx) and product details ([id].tsx).

public: Contains static files, including the default products.json.

recoil: Holds the global Recoil state atoms and selectors.

types: TypeScript definitions for products and other data structures.

styles: Global CSS (including Tailwind setup).

tailwind.config.js: Tailwind configuration file.

package.json: Project dependencies and scripts.
