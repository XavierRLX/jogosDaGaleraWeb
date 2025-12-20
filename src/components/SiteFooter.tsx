export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="text-sm text-white/60">
          © {year} JG Web. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
