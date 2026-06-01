"use client";

import Image from "next/image";
import { solutions } from "../data/solutions";

export default function Home() {
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
                  className="rounded-lg shadow-md mb-4 w-full h-auto"
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