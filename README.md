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

---

## ⭐DO NOT FORGET TO STAR THIS REPO⭐

---

If you want to learn how to create it please follow below tutorial👇:
➡ Tutorial Link 💚 Code with "Code With Antonio" Youtube Channel: [Fullstack Trello Clone: Next.js 14, Server Actions, React, Prisma, Stripe, Tailwind, MySQL](https://www.youtube.com/watch?v=pRybm9lXW2c)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Before deploying on Vercel, you need to set up environment variables. Create `.env` file on root and add the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_.....
CLERK_SECRET_KEY=sk_test_.....
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL="mysql://......"

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=1HZADiYXByA-......
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
