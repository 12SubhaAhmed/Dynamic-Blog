import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const post = [
    {
      id: "1",
      title: "The Iconic Statue of Liberty at Sunrise",
      description:
        "Focusing on the Statue of Liberty, one of the most famous landmarks in the U.S.",
      date: "2024-11-30",
      imageURL: "/images/slide1.jpg",
    },
    {
      id: "2",
      title: "Times Square: The Heartbeat of NYC",
      description:
        "Showcasing the vibrant, neon-lit Times Square, a symbol of NYC's energy.",
      date: "2024-11-30",
      imageURL: "/images/slide2.jpg",
    },
    {
      id: "3",
      title: "Stunning Views from the Empire State Building",
      description:
        "Covering the experience of visiting the Empire State Building and enjoying panoramic views of the city.",
      date: "2024-11-30",
      imageURL: "/images/slide3.jpg",
    },
    {
      id: "4",
      title: "Exploring the Streets of Chinatown",
      description:
        "A deeper look at NYCs Chinatown, its culture, food, and atmosphere.",
      date: "2024-11-30",
      imageURL: "/images/slide4.jpg",
    },
    {
      id: "5",
      title: "A Serene Stroll Through Central Park",
      description:
        "Describing the peaceful escape that Central Park offers in the heart of Manhattan.",
      date: "2024-11-30",
      imageURL: "/images/slide5.jpg",
    },
    {
      id: "6",
      title: "Tasting NYC Street Food: Hot Dogs & Pretzels",
      description:
        "Highlighting the famous street food of NYC, from hot dogs to pretzels.",
      date: "2024-11-30",
      imageURL: "/images/slide6.jpg",
    },
    {
      id: "7",
      title: "Art & History at the Met Museum",
      description: "Exploring the world-renowned Metropolitan Museum of Art.",
      date: "2024-11-30",
      imageURL: "/images/slide7.jpg",
    },
    {
      id: "8",
      title: "Brooklyn Bridge: A Walk with a View",
      description:
        "Focusing on the iconic Brooklyn Bridge and the breathtaking views from it.",
      date: "2024-11-30",
      imageURL: "/images/slide8.jpg",
    },
    {
      id: "9",
      title: "Broadway Lights: A Night at the Theater",
      description:
        "Discussing NYCs famous Broadway shows and the vibrant theater scene.",
      date: "2024-11-30",
      imageURL: "/images/slide9.jpg",
    },
    {
      id: "10",
      title: "The Trendy Streets of SoHo",
      description: "A look at the trendy and artistic neighborhood of SoHo.",
      date: "2024-11-30",
      imageURL: "/images/slide10.jpg",
    },
    {
      id: "11",
      title: "Luxury Shopping on Fifth Avenue",
      description:
        "Detailing the upscale shopping experience along Fifth Avenue.",
      date: "2024-11-30",
      imageURL: "/images/slide11.jpg",
    },
    {
      id: "12",
      title: "Vibrant Nightlife: Rooftop Bars Overlooking the City",
      description: "Exploring the citys rooftop bars and nightlife scene.",
      date: "2024-11-30",
      imageURL: "/images/slide12.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold text-center my-8 text-red-400 animate-color-change">
        The Traveling Soul: Discovering Hidden Gems Across the Globe
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBg={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
