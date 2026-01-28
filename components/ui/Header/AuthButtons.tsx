import Link from "next/link";

function AuthButtons() {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <Link href="/sign-in">
        <button className="cursor-pointer flex items-center justify-center h-10 px-6 rounded-xl bg-purple-gradient text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
          Login
        </button>
      </Link>

      <Link href="/sign-up">
        <button className="cursor-pointer flex items-center justify-center h-10 px-6 rounded-xl border border-slate-200 dark:border-border-dark bg-transparent text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-100 dark:hover:bg-[#302839] transition-colors">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default AuthButtons;
