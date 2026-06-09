export default function JesusIsBack() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#faf8f5", color: "#1c1c1c" }}
    >
      {/* Top nav bar */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#999" }}
        >
          The Cntr
        </span>
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#999" }}
        >
          Non-profit
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        {/* Wordmark — serif, larger */}
        <p
          className="mb-10 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)", color: "#1c1c1c", letterSpacing: "0.15em" }}
        >
          / cntr /
        </p>

        {/* Main quote */}
        <h1
          className="mb-10 max-w-2xl text-4xl leading-tight md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)", color: "#1c1c1c" }}
        >
          Beauty helps us recognize
          <br />
          what matters.
        </h1>

        {/* Thin rule */}
        <div className="mb-10 h-px w-10 bg-stone-300" />

        {/* Body */}
        <p
          className="max-w-lg text-sm leading-8"
          style={{ fontFamily: "var(--font-inter)", color: "#666" }}
        >
          The visuals throughout this book are part of the story. They are
          created by artists who share the heart behind these pages — reflecting
          the search for something real, beautiful, and lasting.
        </p>

        <p
          className="mt-6 max-w-lg text-sm leading-8"
          style={{ fontFamily: "var(--font-inter)", color: "#666" }}
        >
          In a world that can seem synthetic, artificial, and fragmented, these
          images invite us to slow down, wonder, see, and feel.
        </p>

        {/* Second rule */}
        <div className="my-12 h-px w-10 bg-stone-200" />

        {/* About block */}
        <p
          className="max-w-md text-xs leading-7 tracking-wide"
          style={{ fontFamily: "var(--font-inter)", color: "#999" }}
        >
          The illustrations and images in this book were commissioned by{" "}
          <span style={{ color: "#666" }}>The Cntr</span>, a non-profit
          organization at the intersection of creativity, communication, and the
          church.
        </p>

        {/* Coming soon note */}
        <p
          className="mt-8 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#bbb" }}
        >
          Downloads for non-commercial use — coming soon
        </p>

        {/* Donate button */}
        <a
          href="https://donate.stripe.com/bIY9CA4Wk33TcAofYY"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-none border border-stone-400 px-8 py-3 text-xs tracking-[0.25em] uppercase transition-colors hover:bg-stone-800 hover:border-stone-800 hover:text-white"
          style={{ fontFamily: "var(--font-inter)", color: "#555" }}
        >
          Make a donation
        </a>
      </section>

      {/* Footer */}
      <footer className="flex justify-center px-8 py-8">
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#ccc" }}
        >
          thecntr.com
        </p>
      </footer>
    </main>
  );
}
