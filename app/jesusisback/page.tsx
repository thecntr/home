export default function JesusIsBack() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#faf8f5", color: "#1c1c1c" }}
    >
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        {/* Wordmark */}
        <p
          className="mb-10 text-4xl md:text-5xl italic"
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

        <div className="mb-10 h-px w-10 bg-stone-300" />

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

        <div className="my-12 h-px w-10 bg-stone-200" />

        <p
          className="max-w-md text-xs leading-7 tracking-wide"
          style={{ fontFamily: "var(--font-inter)", color: "#999" }}
        >
          The illustrations and images in this book were commissioned by{" "}
          <span style={{ color: "#666" }}>The Cntr</span>, a non-profit
          organization at the intersection of creativity, communication, and the
          church.
        </p>

        {/* Download CTA form */}
        <div
          className="mt-16 w-full max-w-md border border-stone-200 px-8 py-10"
          style={{ backgroundColor: "#f3f0eb" }}
        >
          <p
            className="mb-2 text-base"
            style={{ fontFamily: "var(--font-playfair)", color: "#1c1c1c" }}
          >
            Download the art
          </p>
          <p
            className="mb-8 text-xs leading-6"
            style={{ fontFamily: "var(--font-inter)", color: "#999" }}
          >
            For non-commercial use only. Enter your details to access the full collection.
          </p>

          <form action="/jesusisback/download" method="GET" className="flex flex-col gap-4">
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="w-full border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-stone-500 placeholder:text-stone-400"
                style={{ fontFamily: "var(--font-inter)" }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="w-full border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-stone-500 placeholder:text-stone-400"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              min="1"
              max="120"
              required
              className="w-full border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-stone-500 placeholder:text-stone-400"
              style={{ fontFamily: "var(--font-inter)" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-stone-500 placeholder:text-stone-400"
              style={{ fontFamily: "var(--font-inter)" }}
            />
            <button
              type="submit"
              className="mt-2 border border-stone-800 bg-stone-800 px-8 py-3 text-xs tracking-[0.25em] uppercase text-white transition-colors hover:bg-stone-700"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Access the collection
            </button>
          </form>
        </div>

        {/* Donate */}
        <a
          href="https://donate.stripe.com/bIY9CA4Wk33TcAofYY"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-stone-400 px-8 py-3 text-xs tracking-[0.25em] uppercase transition-colors hover:bg-stone-800 hover:border-stone-800 hover:text-white"
          style={{ fontFamily: "var(--font-inter)", color: "#555" }}
        >
          Make a donation
        </a>
      </section>

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
