export default function Download() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "#faf8f5", color: "#1c1c1c" }}
    >
      <p
        className="mb-10 text-4xl md:text-5xl italic"
        style={{ fontFamily: "var(--font-playfair)", color: "#1c1c1c", letterSpacing: "0.15em" }}
      >
        / cntr /
      </p>

      <h1
        className="mb-6 text-3xl leading-snug"
        style={{ fontFamily: "var(--font-playfair)", color: "#1c1c1c" }}
      >
        The collection
      </h1>

      <div className="mb-10 h-px w-10 bg-stone-300" />

      <p
        className="max-w-md text-sm leading-8"
        style={{ fontFamily: "var(--font-inter)", color: "#666" }}
      >
        Downloads and sharing options are coming soon. Thank you for your interest — check back shortly.
      </p>

      <a
        href="/jesusisback"
        className="mt-12 text-xs tracking-[0.25em] uppercase underline underline-offset-4"
        style={{ fontFamily: "var(--font-inter)", color: "#999" }}
      >
        Back
      </a>

      <footer className="absolute bottom-8">
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
