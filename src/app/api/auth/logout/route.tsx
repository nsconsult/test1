// pages/api/auth/login.ts
import { NextResponse } from 'next/server';
export async function POST() {
  const response = NextResponse.json({ success: true });

  // Supprimer les cookies
  response.cookies.set('user_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(0),  // Cookie expiré pour le supprimer
  });

  response.cookies.set('user_role', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(0),
  });

  response.cookies.set('user_id', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(0),
  });

  return response;
}
