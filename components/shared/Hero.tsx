import { PlusCircle } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section className="p-4 md:p-6 lg:p-10 w-full flex justify-center">
      <div className="relative w-full lg:w-[80%] rounded-3xl overflow-hidden min-h-125 flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-20 group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-gradient z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center opacity-60 transition-transform duration-[20s] ease-linear group-hover:scale-110"
            data-alt="People laughing while watching a movie on a laptop in a dark room"
            style={{ backgroundImage: "url(/hero.png)" }}
          ></div>
        </div>

        <div className="relative z-20 flex flex-col gap-6 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              24,302 Parties Live Now
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-2xl">
            Watch Together.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              Anytime. Anywhere.
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Stream your favorites with friends in perfect sync. High quality
            video chat, real-time reactions, and zero lag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full max-w-md mx-auto sm:max-w-none">
            <button className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-primary hover:bg-secondary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <PlusCircle />
              <span>Create Room</span>
            </button>
            <div className="flex items-center h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-1 w-full sm:w-auto min-w-75">
              <input
                className="bg-transparent border-none text-white placeholder-slate-400 focus:ring-0 h-full flex-1 px-4 font-medium"
                placeholder="Enter Room Code"
                type="text"
              />
              <button className="h-full px-6 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
