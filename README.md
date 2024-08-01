<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>
    <h1>Pantry Tracker</h1>
    <p>This is a <a href="https://nextjs.org/">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">create-next-app</a>.</p>

    <h2>Getting Started</h2>
    <p>First, run the development server:</p>
    <pre><code>npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
    </code></pre>
    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.</p>
    <p>You can start editing the page by modifying <code>app/page.js</code>. The page auto-updates as you edit the file.</p>
    <p>This project uses <a href="https://nextjs.org/docs/basic-features/font-optimization">next/font</a> to automatically optimize and load Inter, a custom Google Font.</p>

    <h2>Firebase Configuration</h2>
    <p>This project uses Firebase for Firestore and Analytics. Ensure you have a <code>.env.local</code> file in the root of your project with the following environment variables:</p>
    <pre><code>NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-actual-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-actual-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-actual-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-actual-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-actual-measurement-id
    </code></pre>
    <p>Replace the placeholder values with your actual Firebase configuration.</p>

    <h2>Deploy on Vercel</h2>
    <p>The easiest way to deploy your Next.js app is to use the <a href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&
