import React from "react";
import Navbar from "@/components/Navbar";
import AuthorCard from "@/components/AuthorCard";
import Mega from "@/components/Mega";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Mega />
      <Features />
      <AuthorCard />
      <Footer />
    </div>
  );
}
