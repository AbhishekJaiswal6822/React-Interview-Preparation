``` 
<Link>: Static layout link. No active matching awareness, no isActive property access. Use for normal body buttons or page redirection elements.

<NavLink>: Dynamic navigation link. Full access to isActive parameter state. Use exclusively for headers, sidebars, and tab menus where structural highlighting matters.
```

"To build a clean, multi-page application layout in React Router v6, I decouple the architecture into three distinct operational layers: the layout shell, the configuration mapping, and the provider engine."

"Here is exactly how the data and components pipeline top-down:"

### 1. The View Layer (Layout & <Outlet />): 
I create a master master Layout component that acts as our structural frame. It contains our fixed, persistent components like the Header and Footer. Right in the middle of this file, I drop an <Outlet /> component, which is a dynamic placeholder slot provided by React Router. It tells the engine exactly where to inject and swap out our child pages—like Home, About, and Contact—based on the URL.

### 2. The Configuration Layer (createBrowserRouter): 
Next, I define our structural routing map using the createBrowserRouter utility. I set up our parent route at the root path ("/"), pass our Layout component as the main element, and then define an array of relative children routes underneath it to map out our sub-pages.

### 3. The Engine Layer (RouterProvider): 
Finally, at the absolute entry point of the app in main.jsx, I mount the <RouterProvider /> component. It wraps our root node and takes our compiled configuration object directly in as a router prop, broadcasting the global URL history and navigation tracking context down the entire component tree.

"By structuring the app this way using the modern object-based data router layout, we ensure seamless client-side navigation without any full browser page reloads, while unlocking advanced v6 performance features like background data loaders."

## Interview 
"Yes, exactly. <Outlet/> is a dynamic placeholder component provided by React Router DOM to handle component nesting.

At the top level, we design a master Layout component that holds our fixed, persistent elements like a Header and a Footer. Inside that layout file, we place the <Outlet/> component to act as a dynamic window where child pages swap out automatically based on the URL.

To map these paths, we use createBrowserRouter in our entry file to build our configuration table. Finally, to render everything, we wrap our application root with a <RouterProvider/>, which takes that compiled router object directly in as a prop to broadcast navigation context down the entire tree."
