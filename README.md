This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Notes from a wee little lad:

- need to run npm install @supabase/ssr @supabase/supabase-js in order to create a client - (from: https://supabase.com/docs/guides/auth/server-side/creating-a-client)


to-do:
- page navigation & changing how many options show up per page
- double checking on safety of hitting database through this page - need to obscure this endpoint i doth think
- double check w/ eric that i organizing the structure of this situation well 
- filters !!! need to implement those
- need to implement add call to add new stuff to data base
- regex for the search (womp womp womppppp)
- would be cool to build a script to clear db and reset it
- create use hook for supabase
- definitely error handling
- filter drop downs - need 2 create them