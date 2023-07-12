The project involves building a Book Hub application using the concepts and techniques learned in the React course. It serves as an opportunity to apply your skills and knowledge in a concrete project. The goal is to create an app that fetches data from an internal server, displays the data, and incorporates various important features.

The core functionalities of the Book Hub app include:

Login Route: This feature allows users to log in with their username and password. It handles both valid and invalid login attempts, displays appropriate error messages, and navigates to the Home Route upon successful login. It also handles authentication and authorization by restricting access to certain routes for unauthenticated users and redirecting authenticated users to their requested routes.

Home Route: In this route, the app fetches data from the Top Rated Books API and displays a list of top-rated books. The data is obtained through an HTTP GET request with the jwt_token in the Cookies. While fetching the data, a loader is displayed. If the request fails, a failure view is shown, and users can retry the request. The Home Route also provides navigation to the Bookshelves Route and Book Details Route. The header includes functionalities such as navigating to the Home, Bookshelves, and Login Routes.

Bookshelves Route: This route fetches data from the Books API and displays a list of books. Users can filter the books based on bookshelf selection and search input. The app makes an HTTP GET request to the Books API with the jwt_token in the Cookies and the appropriate query parameters. A loader is displayed while fetching the data, and if the request fails, a failure view is shown. The Bookshelves Route also allows users to navigate to the Book Details Route and includes header functionalities similar to the Home Route.

Book Details Route: This route fetches data from the Book Details API based on the book's ID. It displays the details of the selected book and includes a loader while fetching the data. If the request fails, a failure view is shown, and users can retry the request. The header functionalities remain consistent with the Home Route.

Not Found Route: If users access a random path, they are redirected to the Not Found Route.

Additionally, the project includes two important features:

Light and Dark Mode: Users can switch between light and dark modes using a toggle switch. The app's color scheme and styling are updated accordingly.

Logout Confirmation: When users click the Logout button in the header, a confirmation dialogue appears, asking them to confirm or cancel the logout action. The app performs the logout only when the user confirms their decision.

By implementing these functionalities and features in my project, I will be able to showcase my skills in various areas. I will demonstrate my ability to fetch data from an internal server and display it appropriately. Additionally, I will utilize component lifecycle methods to ensure the smooth flow of data and optimize the app's performance.

Working with routing concepts will allow me to create different routes within the application, enabling seamless navigation between pages. I will also implement authentication and authorization to ensure that only authorized users can access certain parts of the app. This will enhance the security and privacy of the users' information.

To improve the user experience, I will make the app responsive, ensuring that it looks and functions well on different devices and screen sizes. Furthermore, I will incorporate a light and dark mode feature, allowing users to customize their viewing experience according to their preferences.

Lastly, I will include a logout confirmation feature to prevent accidental logouts. This will provide a smoother and more user-friendly interaction by adding an extra layer of confirmation.

By incorporating these functionalities and features into my project, I will showcase my proficiency in fetching data, using component lifecycle methods, implementing routing concepts, ensuring authentication and authorization, enhancing responsiveness, and providing customization options such as light and dark mode and logout confirmation.

Overall, this project will serve as a comprehensive demonstration of the skills I have acquired and allow me to apply them in a practical and meaningful way.
