This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Code Demos

## Requests to database or APIs

##### set up for the data base
**MongoDB Atlas Setup (Cloud):**

- Create a free account at MongoDB Atlas
- Create a cluster
- Create a database user
- Get your connection string 

**In your project**
- Add the connection string to the .env file (you need to create this file, but can copy the structure from `.example.env`) As this file contains all your API Keys and connections strings you don't want to share with others, the `.env` file is not shared via GitHub. 

**Local MongoDB Setup:**
Use this version if you don't want to set up a data base in the Atlas cloud (works as long as you don't deploy your code)

- Install MongoDB locally
- Start MongoDB service
- Use `mongodb://localhost:27017/nameofYourDatabase` as a connection string


### Data base requests
The project structure is as follows. 

The requests to databases are made in the files `route.js` in the `/src/api/todos` folder! It contains a GET and a POST request.

The database demoed here is a mongoDB on a Atlas Cloud. 

#### GET: 
Response is a json with this strucure:

``` json
{
    "_id": "672889ee5c6caf238e39dad0",
    "text": "test 1",
    "status": "open",
    "__v": 0,
    "createdAt": "2025-07-17T08:28:09.105Z"
  }
```
#### POST
The post request will save a new entry in the data base

the request body looks like this
```json
 {  
   "task": "test 1",
    "status": "open" 
 }
```
The `id` is added in the route using UUID and mongoose also generates an `_id` field for each entry.

The fields `task` and `status` are validated using the package `validator`

The React Component `TodoList.js` displays the data from the database and also contains the form to input a new todo. Loading the component, a GET requset is sent to fetch the already exisitng data. A click on the `Add Todo` button triggers a POST resuest to the server and inserts the data to the database.

### Api calls
#### Server side
(no dynamic changes after data is loaded once)
An example of this is in the `/serversideComponentWithFetch/page.js`

#### Client side via api 
(use this for dynamic reload of data (when you need any React hooks such as `useState` or `useEffect` in the component) )

The request handlers for requests to APIs are in the file `route.js` in the `api/users` folder. 

It contains a GET request to random-users. The request is triggered by a function in the component  `users/page.js`. The data from this request is dislayed in the same component. 



``` plaintext
my-nextjs-app/
├── public/                # Static assets (images, icons, etc.)
├── src/                   # Your application source code
│   ├── app/               # App Router root (replaces pages/)
│   │   ├── layout.tsx     # Global layout (HTML shell)
│   │   ├── page.tsx       # Homepage route (/)
│   │   ├── about/         
│   │   │   └── page.tsx   # Route for /about
│   │   ├── api/           # API routes
│   │   │   ├── hello/
│   │   │   │   └── route.ts 
│   │   │   └── users/
│   │   │       └── route.ts # request handler for a GET request to the API
│   │   └── dashboard/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/        # Reusable UI components
│   │   └── Navbar.tsx
│   ├── lib/               # Utilities, data fetching, helpers
│   │   └── fetchUsers.ts
│   ├── styles/            # Global CSS or Tailwind config
│   │   └── globals.css
│   └── types/             # TypeScript types/interfaces
│       └── user.ts
├── .env.local             # Environment variables
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config (if using TS)
└── package.json

```