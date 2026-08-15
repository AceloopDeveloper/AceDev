export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}