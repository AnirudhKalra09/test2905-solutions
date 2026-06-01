"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { solutions } from "../data/solutions";

export default function Home() {
const unlockTime = new Date();
unlockTime.setHours(19, 0, 0); // Set to 7:00 PM
  

  const [unlocked, setUnlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const messages = [
    "Nice try 😏",
    "Exam khatam hone do 😎",
    "7 baje aana 😈",
    "Main nahi bataunga 😏",
    "Paper pe focus karo 👀",
  ];

  const randomMessage =
    messages[new Date().getSeconds() % messages.length];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (now >= unlockTime) {
        setUnlocked(true);
        clearInterval(timer);
        return;
      }

      const diff = unlockTime.getTime() - now.getTime();

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

        <Image
          src="/meme.jpg"
          alt="Main Nahi Bataunga"
          width={1200}
          height={800}
          className="rounded-2xl shadow-2xl mb-8"
          priority
        />

        <p className="text-xl text-gray-300 mb-6">
          Solutions unlock at 7:00 PM
        </p>

        <div className="text-6xl md:text-7xl font-extrabold text-yellow-400">
          {timeLeft}
        </div>

        <p className="mt-8 text-xl text-gray-400">
          {randomMessage}
        </p>

      </main>
    );
  }

    return (
  <main className="min-h-screen bg-slate-50 text-black py-10">
    <div className="max-w-5xl mx-auto px-6">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3">
          SURBHI STUDY CIRCLE 
        </h1>

        <p className="text-3xl text-gray-600">
          Monthly Test - II
        </p>
      </div>

      <div className="space-y-8">

        {solutions.map((item) => (
          <div
            key={item.questionNo}
            className="bg-white rounded-2xl shadow-md border p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                Q{item.questionNo}
              </div>
            </div>



            {item.image && (
              <Image
                src={item.image}
                alt={`Question ${item.questionNo}`}
                width={1000}
                height={1000}
                className="rounded-lg shadow-md mb-4"
              />
            )}

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-700 mb-2">
                Answer
              </h3>

              <p className="whitespace-pre-line leading-relaxed">
                {item.answer}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  </main>
);
}