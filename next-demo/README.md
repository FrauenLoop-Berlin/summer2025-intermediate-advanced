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

The project structure is as follows. 
### Data base requests
The requests to databases are made in the files `route.js` in the `api/database` folder! It contains a GET and a POST request (with validation)
The database demoed here is a mongoDB on a Atlas Cloud and uses mongoose ODM for validation and connection 


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