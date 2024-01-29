# E-Commerce Web Application

Welcome to our E-Commerce web application! 🛍️ This project, built with React.js, is a result of the hands-on learning experience from the prestigious Platzi React.js course. The application offers a delightful and interactive shopping experience for users, featuring a modern and attractive design.

## Features

- **User-friendly Interface**: Enjoy a seamless and intuitive interface designed to enhance the shopping journey.
- **Product Catalog**: Explore a diverse catalog of products with detailed information and images.
- **Shopping Cart**: Easily add products to your cart and manage your selections effortlessly.
- **Checkout Process**: Navigate through a smooth checkout process for a hassle-free shopping experience.
- **User Accounts**: Create and manage your account, providing a personalized experience.
- **Order History**: Access your order history to track and review past purchases.

## Design Philosophy

Our design philosophy revolves around creating a visually appealing and engaging platform. We prioritize user experience, ensuring that every interaction feels natural and enjoyable. The clean and modern design contributes to a positive and memorable shopping experience.

## Documentation

Explore the detailed documentation for this project, generated using JsDoc, at [https://docs-rg7swyfto-felipyan19.vercel.app/](https://docs-rg7swyfto-felipyan19.vercel.app/).

## Getting Started

To start exploring our E-Commerce platform, follow these simple steps:

1. Clone the repository: `git clone https://github.com/your-username/e-commerce.git`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

Feel free to dive into the codebase, explore the components, and enhance the project based on your needs.

Happy shopping! 🚀

### Table of Contents

*   [Card][1]
    *   [Parameters][2]
*   [showProduct][3]
    *   [Parameters][4]
*   [addProductsToCart][5]
    *   [Parameters][6]
*   [renderIcon][7]
    *   [Parameters][8]
*   [CheckoutSideMenu][9]
*   [handleDelete][10]
    *   [Parameters][11]
*   [handleCheckout][12]
*   [Layout][13]
    *   [Parameters][14]
*   [Navbar][15]
*   [handleSignOut][16]
*   [renderView][17]
*   [renderView][18]
*   [OrderCard][19]
    *   [Parameters][20]
*   [OrdersCard][21]
    *   [Parameters][22]
*   [ProductDetail][23]
*   [initializeLocalStorage][24]
*   [ShoppingCartProvider][25]
    *   [Parameters][26]
*   [filteredItemsByTitle][27]
    *   [Parameters][28]
*   [filteredItemsByCategory][29]
    *   [Parameters][30]
*   [filterBy][31]
    *   [Parameters][32]
*   [AppRoutes][33]
*   [App][34]
*   [Home][35]
*   [MyAccount][36]
*   [editAccount][37]
    *   [Parameters][38]
*   [renderUserInfo][39]
*   [renderEditUserInfo][40]
*   [MyOrder][41]
*   [MyOrders][42]
*   [NotFound][43]
*   [SignIn][44]
*   [handleSignIn][45]
*   [createAnAccount][46]
*   [renderLogIn][47]
*   [renderCreateUserInfo][48]
*   [totalPrice][49]
    *   [Parameters][50]

## Card

Generates the function comment for the given function body.

### Parameters

*   `prop` **[object][51]** the prop object passed to the Card component

Returns **JSX.Element** the JSX element representing the Card component

## showProduct

Shows the product by opening the product detail and setting the product to show.

### Parameters

*   `productDetail` **type** the details of the product to be shown

Returns **type** undefined

## addProductsToCart

Adds products to cart.

### Parameters

*   `event` **[Event][52]** The event object.
*   `product` **Product** The product to be added to the cart.

## renderIcon

Renders an icon based on the provided ID.

### Parameters

*   `id` **[number][53]** The ID of the icon to render.

Returns **JSX.Element** The rendered icon as a JSX element.

## CheckoutSideMenu

Generates the side menu for the checkout process.

Returns **JSX.Element** The side menu component.

## handleDelete

Deletes a product from the cart based on the provided ID.

### Parameters

*   `id` **[number][53]** The ID of the product to be deleted.

Returns **[undefined][54]** This function does not return a value.

## handleCheckout

Handles the checkout process.

Returns **[undefined][54]** No return value.

## Layout

Renders a layout component.

### Parameters

*   `props` **[Object][51]** The properties passed to the layout component.

    *   `props.children` **ReactNode** The child components to be rendered inside the layout.

Returns **ReactNode** The rendered layout component.

## Navbar

Renders the navigation bar component.

Returns **JSX.Element** The JSX element representing the navigation bar.

## handleSignOut

Handles the sign out process.

Returns **[undefined][54]** This function does not return any value.

## renderView

Renders the view based on the user's account status.

Returns **JSX.Element** The rendered view.

## renderView

Renders the view based on the filtered items in the context.

Returns **ReactElement** The rendered view.

## OrderCard

Renders an order card with the given props.

### Parameters

*   `props` **[Object][51]** The props for the order card.

    *   `props.id` **[string][55]** The ID of the order.
    *   `props.title` **[string][55]** The title of the order.
    *   `props.price` **[number][53]** The price of the order.
    *   `props.imgUrl` **[string][55]** The URL of the order image.
    *   `props.handleDelete` **[function][56]** The function to handle order deletion (optional).

Returns **JSX.Element** The rendered order card.

## OrdersCard

Renders an orders card component.

### Parameters

*   `props` **[Object][51]** The properties passed to the component.

    *   `props.dateOrder` **[string][55]** The date of the order.
    *   `props.totalPrice` **[number][53]** The total price of the order.
    *   `props.totalProducts` **[number][53]** The total number of products in the order.

Returns **JSX.Element** The rendered orders card component.

## ProductDetail

Renders the product detail component.

Returns **JSX.Element** The product detail component.

## initializeLocalStorage

Initializes the local storage by checking for the presence of 'account' and 'signOut' items.
If either item is not present, it sets the item with an empty object or boolean value respectively.

Returns **void** This function does not return anything.

## ShoppingCartProvider

Creates a ShoppingCartProvider component.

### Parameters

*   `children` **[Object][51]** The child components.

    *   `children.children` &#x20;

Returns **JSX.Element** The ShoppingCartProvider component.

## filteredItemsByTitle

Filters the items by title based on the search keyword.

### Parameters

*   `items` **[Array][57]** The array of items to be filtered.
*   `searchByTitle` **[string][55]** The search keyword for filtering by title.

Returns **[Array][57]** The filtered array of items.

## filteredItemsByCategory

Filter items by category.

### Parameters

*   `items` **[array][57]** The array of items to filter.
*   `searchByCategory` **[string][55]** The category to search by.

Returns **[array][57]** The filtered array of items.

## filterBy

Filters the items based on the specified search type.

### Parameters

*   `searchType` **[string][55]** The search type to filter the items. Possible values are: 'BY\_TITLE', 'BY\_CATEGORY', 'BY\_TITLE\_AND\_CATEGORY'.
*   `items` **[Array][57]** The array of items to be filtered.
*   `searchByTitle` **[string][55]** The title to search by when searchType is 'BY\_TITLE' or 'BY\_TITLE\_AND\_CATEGORY'.
*   `searchByCategory` **[string][55]** The category to search by when searchType is 'BY\_CATEGORY' or 'BY\_TITLE\_AND\_CATEGORY'.

Returns **[Array][57]** The filtered array of items based on the specified search type.

## AppRoutes

Generates the routes for the application based on the user's account and sign-in status.

Returns **JSX.Element** The routes for the application.

## App

Initializes the app and returns the root component.

Returns **React.Component** The root component of the app.

## Home

Renders the view based on the context data.

Returns **JSX.Element** The rendered view.

## MyAccount

Renders the user account information or the user account editing form based on the current view.

Returns **JSX.Element** The rendered user account information or editing form.

## editAccount

Edits the user account information.

### Parameters

*   `paramName` **type** description of parameter

Returns **type** description of return value

## renderUserInfo

Renders the user information component.

Returns **JSX.Element** The rendered user information component.

## renderEditUserInfo

Renders the form for editing user information.

Returns **JSX.Element** The JSX element representing the form.

## MyOrder

Renders the `MyOrder` component.

Returns **JSX.Element** The rendered component.

## MyOrders

Renders the MyOrders component.

Returns **JSX.Element** The rendered JSX.Element of MyOrders component.

## NotFound

Renders the NotFound component.

Returns **JSX.Element** The rendered NotFound component.

## SignIn

Sign in functionality for the application.

Returns **JSX.Element** The rendered component.

## handleSignIn

Handles the sign in process.

Returns **JSX.Element** The JSX element for redirecting to home page.

## createAnAccount

Creates an account using the provided form data.

Returns **[undefined][54]** No return value.

## renderLogIn

Renders the login component.

Returns **JSX.Element** The rendered login component.

## renderCreateUserInfo

Render the create user info form.

Returns **JSX.Element** The JSX element representing the form.

## totalPrice

Calculates the total price of the given products.

### Parameters

*   `products` **[Array][57]** The array of products to calculate the total price for.

Returns **[number][53]** The total price of the products.

[1]: #card

[2]: #parameters

[3]: #showproduct

[4]: #parameters-1

[5]: #addproductstocart

[6]: #parameters-2

[7]: #rendericon

[8]: #parameters-3

[9]: #checkoutsidemenu

[10]: #handledelete

[11]: #parameters-4

[12]: #handlecheckout

[13]: #layout

[14]: #parameters-5

[15]: #navbar

[16]: #handlesignout

[17]: #renderview

[18]: #renderview-1

[19]: #ordercard

[20]: #parameters-6

[21]: #orderscard

[22]: #parameters-7

[23]: #productdetail

[24]: #initializelocalstorage

[25]: #shoppingcartprovider

[26]: #parameters-8

[27]: #filtereditemsbytitle

[28]: #parameters-9

[29]: #filtereditemsbycategory

[30]: #parameters-10

[31]: #filterby

[32]: #parameters-11

[33]: #approutes

[34]: #app

[35]: #home

[36]: #myaccount

[37]: #editaccount

[38]: #parameters-12

[39]: #renderuserinfo

[40]: #renderedituserinfo

[41]: #myorder

[42]: #myorders

[43]: #notfound

[44]: #signin

[45]: #handlesignin

[46]: #createanaccount

[47]: #renderlogin

[48]: #rendercreateuserinfo

[49]: #totalprice

[50]: #parameters-13

[51]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[52]: https://developer.mozilla.org/docs/Web/API/Event

[53]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[54]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[55]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[56]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[57]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
