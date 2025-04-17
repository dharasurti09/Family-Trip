import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tripDates = {
  start: "May 18, 2025",
  end: "May 24, 2025"
};

const locations = [
  {
    name: "Niagara Falls, New York",
    hotel: "Hotel NY Falls Inn",
    hotelInfo: "Located near the falls, includes breakfast, family-friendly.",
    attractions: [
      { name: "Maid of the Mist", info: "Boat ride to the base of the falls." },
      { name: "Observation Tower", info: "Panoramic views of the falls." }
    ],
    cost: "$500",
    image: "/images/niagara-ny.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.383153684056!2d-79.06627038452461!3d43.08152837914402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34431c51d473d%3A0x43f7c41e3399c5b0!2sNiagara%20Falls%2C%20NY!5e0!3m2!1sen!2sus!4v1615584211830!5m2!1sen!2sus"
  },
  {
    name: "Niagara Falls, Canada",
    hotel: "Fallsview Hotel",
    hotelInfo: "Rooms with a view of the falls, spa and dining included.",
    attractions: [
      { name: "Journey Behind the Falls", info: "Walk through tunnels behind the falls." },
      { name: "Skylon Tower", info: "Observation deck and revolving restaurant." }
    ],
    cost: "$600",
    image: "/images/niagara-canada.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.792504099035!2d-79.08494328452437!3d43.089557579143424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3443e5f7a27a7%3A0x9b4a88f2d3452aa4!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1615584339214!5m2!1sen!2sus"
  },
  {
    name: "Toronto",
    hotel: "Toronto City Hotel",
    hotelInfo: "Centrally located, includes access to gym and pool.",
    attractions: [
      { name: "CN Tower", info: "Iconic landmark with skywalk experience." },
      { name: "Royal Ontario Museum", info: "Natural history and world cultures museum." }
    ],
    cost: "$700",
    image: "/images/toronto.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.717163003837!2d-79.38393468450759!3d43.65348127912148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3f79a1a41%3A0xb45b4f45e4528423!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1615584472044!5m2!1sen!2sus"
  }
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="p-6 space-y-10 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/waterfall-background.jpg')" }}
    >
      <section className="text-center text-white drop-shadow-lg">
        <h1 className="text-5xl font-bold mb-2">Family Trip</h1>
        <p className="text-lg">Dates: {tripDates.start} - {tripDates.end}</p>
      </section>

      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {locations.map((location, index) => (
          <Card
            key={index}
            className="transition-transform transform hover:scale-105 cursor-pointer bg-white bg-opacity-90 shadow-lg"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <CardContent className="p-4">
              <img
                src={location.image}
                alt={location.name}
                className="rounded-xl mb-3 w-full h-40 object-cover"
              />
              <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
              <p className="text-sm mb-1"><strong>Hotel:</strong> {location.hotel}</p>
              <p className="text-sm mb-1">
                <strong>Attractions:</strong> {location.attractions.map(a => a.name).join(", ")}
              </p>
              <p className="text-sm mb-2"><strong>Estimated Cost:</strong> {location.cost}</p>
              {activeIndex === index && (
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-700"><strong>Hotel Info:</strong> {location.hotelInfo}</p>
                  <div>
                    <p className="font-semibold">Attraction Details:</p>
                    <ul className="list-disc list-inside text-sm">
                      {location.attractions.map((attr, i) => (
                        <li key={i}><strong>{attr.name}:</strong> {attr.info}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="200"
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded-xl border"
                    ></iframe>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Page;
