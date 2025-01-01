 'use client';
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";  // Import useParams from next/navigation
import CommentSection from "@/components/CommentSec";
import AuthorCard from "@/components/AuthorCard";

// Sample posts data
const posts = [
    {
        id: '1',
        title: "The Iconic Statue of Liberty at Sunrise",
        imageURL: "/images/slide1.jpg",
        description: "The Statue of Liberty, standing tall as a symbol of freedom and hope, takes on a magical quality when viewed at sunrise. As the first light of day casts a warm golden glow over the waters of New York Harbor, the statue's silhouette becomes even more majestic against the backdrop of a tranquil sky. Early risers can enjoy a peaceful experience, away from the usual crowds, capturing stunning views of Lady Liberty in her full grandeur. Whether seen from a boat cruise or from Liberty Island itself, witnessing the Statue of Liberty at sunrise offers a unique, serene perspective on one of the worlds most famous landmarks, making it a must-see experience for any traveler to New York City"
    },
    {
        id: "2",
        title: "Times Square: The Heartbeat of NYC",
        description: "Times Square, often referred to as The Cross-roads of the World,embodies the energy and vibrancy of New York City. With its bright neon lights, towering digital billboards, and bustling crowds, its a sensory overload that perfectly captures the essence of the city. This iconic intersection is where the city never sleeps, offering entertainment, shopping, and dining around the clock. Whether youre taking in a Broadway show, snapping photos of the dazzling lights, or just soaking in the electric atmosphere, Times Square pulses with life. A visit to this vibrant hub is an essential part of any New York City adventure, showcasing the citys dynamic spirit and unmatched excitement.",
        imageURL: "/images/slide2.jpg"
    },
    {
         id: "3",
         title: "Stunning Views from the Empire State Building", 
         description: "The Empire State Building offers one of the most breathtaking panoramic views of New York City. Standing at 1,454 feet, it provides visitors with a bird’s-eye view of iconic landmarks such as Central Park, Times Square, and the Statue of Liberty. Whether you visit during the day to see the city unfold beneath you or at night when the skyline sparkles with lights, the experience is unforgettable. The observation deck, located on the 86th floor, allows for stunning 360-degree views, making it the perfect spot for photography or simply soaking in the majesty of the city. A trip to the Empire State Building is a must for anyone looking to experience New York from a whole new perspective.",
         imageURL: "/images/slide3.jpg"
     },
     {
        id: "4",
        title: "Exploring the Streets of Chinatown",
        description: "Chinatown in New York City is a vibrant and lively neighborhood, offering a unique cultural experience that immerses visitors in a blend of history, tradition, and modern hustle. As you walk through its bustling streets, you’ll be surrounded by colorful markets, fragrant food stalls, and an array of shops selling everything from exotic spices to handmade goods. The neighborhood’s authentic restaurants serve up delicious dim sum, dumplings, and other Chinese delicacies, making it a food lover’s paradise. Exploring the narrow alleys and hidden gems reveals an old-world charm, from traditional herbal medicine shops to ornate temples. Chinatown offers a sensory journey unlike any other, where the sights, sounds, and flavors of China come alive in the heart of New York City.",
         imageURL: "/images/slide4.jpg"
           },
            {
              id: "5",
              title: "A Serene Stroll Through Central Park",
              description: "Central Park is a tranquil oasis amidst the hustle and bustle of New York City, offering a perfect escape for nature lovers and city explorers alike. With over 840 acres of green space, winding paths, and peaceful lakes, the park provides a serene environment for a leisurely stroll. Whether you’re enjoying the beauty of the Cherry Hill blooms in spring, the vibrant foliage in autumn, or simply relaxing by the Bethesda Terrace, there’s something magical about the park in every season. Watch street performers, spot wildlife, or take a peaceful boat ride on the lake—Central Park offers an unparalleled balance of nature and city life. It’s a perfect destination for a quiet escape, offering moments of calm in the heart of the city.",
              imageURL: "/images/slide5.jpg"
            },
            {
              id: "6",
              title: "Tasting NYC Street Food: Hot Dogs & Pretzels",
              description: "No visit to New York City is complete without indulging in its famous street food, particularly the iconic hot dogs and pretzels. These quick, flavorful snacks are a staple of the city’s culinary scene, available from food carts scattered across every corner. A classic NYC hot dog, served with mustard, sauerkraut, or onions, offers the perfect savory bite while exploring the city’s streets. Equally tempting is the soft, warm pretzel, with its salty crust and chewy interior, perfect for a midday snack. Whether you’re strolling through Central Park, watching the hustle of Times Square, or simply enjoying the city’s energy, tasting these quintessential street foods is a must-do experience for any traveler in New York.",
              imageURL: "/images/slide6.jpg"
            },
            {
              id: "7",
              title: "Art & History at the Met Museum",
              description: "The Metropolitan Museum of Art, or the Met, is one of the world’s largest and most renowned museums, offering a captivating journey through art and history. With an expansive collection spanning over 5,000 years of culture, visitors can explore masterpieces from ancient Egypt, European paintings, Asian art, and more. Highlights include iconic works by artists like Van Gogh, Rembrandt, and ancient treasures such as the Egyptian Temple of Dendur. The museum’s grand architecture, coupled with its diverse exhibits, provides an enriching experience for art lovers and history enthusiasts alike. Whether you’re marveling at Renaissance art or learning about ancient civilizations, the Met is a must-visit destination for anyone looking to immerse themselves in culture and history.",
              imageURL: "/images/slide7.jpg"
            },
            {
              id: "8",
              title: "Brooklyn Bridge: A Walk with a View",
              description: "Walking across the Brooklyn Bridge is one of New York City's most iconic experiences, offering stunning views of both the Manhattan and Brooklyn skylines. This architectural marvel, completed in 1883, spans the East River and connects the boroughs of Manhattan and Brooklyn. As you walk along the bridge’s elevated pedestrian walkway, you’ll be treated to panoramic views of the Statue of Liberty, the Empire State Building, and the bustling streets below. Whether you're visiting during the day for clear views or at sunset for a breathtaking display of city lights, the Brooklyn Bridge offers a unique perspective of New York City’s beauty and history.",
              imageURL: "/images/slide8.jpg"
            },
            {
              id: "9",
              title: "Broadway Lights: A Night at the Theater",
              description: "A night at Broadway is an unforgettable experience that immerses you in the heart of New York City's vibrant theater scene. Known for its world-class performances and dazzling productions, Broadway offers a wide range of shows, from timeless musicals to cutting-edge dramas. The bright lights and historic theaters lining the streets of the Theater District create an electric atmosphere that draws millions of theatergoers each year. Whether you're watching a classic like The Lion King or a new hit, the energy of Broadway will captivate you from start to finish, making it a must-do experience for anyone visiting New York City.",
              imageURL: "/images/slide9.jpg"
            },
            {
              id: "10",
              title: "The Trendy Streets of SoHo",
              description: "SoHo, short for South of Houston Street, is one of New York City's most fashionable neighborhoods, known for its cobblestone streets, cast-iron buildings, and vibrant arts scene. This trendy district is a hub for shopping, with high-end boutiques, designer stores, and unique galleries lining the streets. It's also a hotspot for food lovers, offering a wide array of chic cafes, trendy restaurants, and artisanal food shops. Whether you're strolling through its stylish streets, exploring local art exhibitions, or enjoying the neighborhood's bustling vibe, SoHo embodies the creative energy and modern style of New York City, making it a must-visit for anyone seeking to experience the city's cutting-edge culture.",
              imageURL: "/images/slide10.jpg"
            },
            {
              id: "11",
              title: "Luxury Shopping on Fifth Avenue",
              description: "Fifth Avenue is synonymous with luxury shopping, offering some of the world’s most prestigious stores and designer boutiques. Stretching from Washington Square Park to Central Park, this iconic street is a shopper’s paradise, featuring brands like Gucci, Louis Vuitton, Tiffany & Co., and Saks Fifth Avenue. Whether you’re browsing the latest fashion collections, admiring window displays, or indulging in high-end accessories, Fifth Avenue provides an unparalleled shopping experience. Beyond its world-class stores, the avenue is also home to cultural landmarks like the Museum of Modern Art, making it the perfect blend of style and sophistication for any visitor to New York City.",
              imageURL: "/images/slide11.jpg"
            },
            {
              id: "12",
              title: "Vibrant Nightlife: Rooftop Bars Overlooking the City",
              description: "New York City’s rooftop bars offer some of the best views in the world, paired with a lively atmosphere and creative cocktails. Perched above the city’s skyline, these bars provide a unique perspective of iconic landmarks like the Empire State Building, One World Trade Center, and the Brooklyn Bridge, especially as the city lights twinkle below. Whether you're enjoying a sunset cocktail or dancing under the stars, the vibrant nightlife in NYC's rooftop bars is a must for anyone looking to experience the city's electric energy. From chic lounges to trendy hangouts, these spots offer a memorable way to enjoy the city's nightlife with stunning views.",
              imageURL: "/images/slide12.jpg"
            }
];

export default function Post() {
    const { id } = useParams();  // Use useParams to access the dynamic route parameter
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        if (id) {
            // Find the post based on the dynamic `id`
            const foundPost = posts.find((p) => p.id === id);
            setPost(foundPost); // Set the post in state when it's found
        }
    }, [id]); // Trigger effect when `id` changes

    // If no post is found, show a "not found" message
    if (!post) {
        return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
    }

    // Render description paragraphs
    const renderPara = (description: string) => {
        return description.split("\n").map((para, index) => (
            <p key={index} className="mt-4 text-justify p-10 leading-relaxed">
                {para.trim()}
            </p>
        ));
    };

    return (
        <div className="bg-slate-100">
            <h1 className="text-4xl text-center ml-10 mt-5 font-bold">{post.title}</h1>
            <img src={post.imageURL} alt={post.title} 
            className="rounded-md sm:w-[45%] sm:ml-56  lg:ml-96 ml-10 mt-4" />
            <div className="mt-6">{renderPara(post.description)}</div>
            <CommentSection postId={post.id} />
            <AuthorCard />
        </div>
    );
}
