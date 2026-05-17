"use client";
export default function EndPage() {
return ( <main className="min-h-screen flex items-center justify-center bg-pink-100 text-center p-10"> <div> <h1 className="text-5xl font-bold text-pink-600 mb-6">
Mumbai may have your meetings ❤️ </h1>
  <p className="text-2xl text-red-500 mb-4">
      But Hyderabad still has your heart.
    </p>
  <p className="text-xl text-pink-700 mb-8">
      I’ll be waiting for you — Maha ❤️
    </p>
    <audio autoPlay loop controls className="mx-auto">
      <source src="/song.mp3" type="audio/mpeg" />
    </audio>
  </div>
</main>
);
}
