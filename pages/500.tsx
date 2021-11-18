// pages/500.tsx
import React from 'react'
export default function E500({ error }: {error: Error}) {
    return <h1>500 - {error.message}</h1>;
}