# Pantry Tracker

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Firebase Configuration

This project uses Firebase for Firestore and Analytics. Ensure you have a `.env.local` file in the root of your project with the following environment variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-actual-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-actual-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-actual-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-actual-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-actual-measurement-id
```

Replace the placeholder values with your actual Firebase configuration.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to add the same environment variables to your Vercel project settings under the "Environment Variables" section.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project Setup and Deployment

I have successfully configured and deployed this Next.js project with Firebase Firestore and Firebase Analytics on Vercel. The setup includes proper initialization of Firebase services with environment variables stored securely.

Project deployed at: [https://ankur-baliga-pantry-tracker-orpin.vercel.app](https://ankur-baliga-pantry-tracker-orpin.vercel.app)
