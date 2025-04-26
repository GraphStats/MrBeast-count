import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host') || '';

  // Vérifie si c'est une URL de preview
  const isPreview = hostname.includes('-git-') || hostname.match(/-[a-z0-9]{9}-/);

  if (isPreview) {
    // Redirige vers ton vrai site
    return NextResponse.redirect('https://fastcount.vercel.app', 302);
  }

  // Sinon, continue normalement
  return NextResponse.next();
}
