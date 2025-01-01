import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post : {
    id: string;
    title: string;
    description: string;
    date: string;
    imageURL: string;
  };
  isDarkBg: boolean;
}

export default function BlogCard({ post, isDarkBg }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBg ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image 
      className="ml-12"
      src={post.imageURL} 
      alt={post.title} 
      height={300}
     width={300} />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBg ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published On: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full text-center h-10 pt-2 text-white bg-blue-600 rounded hover:bg-blue-400 ${
            isDarkBg ? "bg-black hover:bg-red-500" : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
