import React from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";


export default function HomePage() {
    return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <Card title="First Card" content="This is the content of the first card." />
      <Card title="Second Card" content="Here is some more content for the second card." />
      <Card title="Third Card" content="And finally, the third card content goes here." />
    </main>
  );
}
