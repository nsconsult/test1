// pages/api/auth/login.ts
import { NextResponse } from 'next/server';
import { BASE_URL } from '@/app/services/apiService';
export async function POST(req: Request) {
  const { email, password } = await req.json();
  const API_URL = BASE_URL;

  const externalApiResponse = await fetch(API_URL+'auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await externalApiResponse.json();

  if (externalApiResponse.ok) {
    const token = data.token;
    const user = data.user;
    console.log(token);
    console.log(user);
    // Créer une réponse et définir les cookies
    const response = NextResponse.json({ success: true, user, token });

    // Définir les cookies HttpOnly pour Next.js
    response.cookies.set('user_token', token, {
      secure: process.env.NODE_ENV === 'production', // Activer HTTPS en production
      path: '/',
      sameSite: 'strict',
    });

    response.cookies.set('user_role', user.role, {
      httpOnly:true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
    });

    response.cookies.set('user_id', user.id, {
      httpOnly:true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
    });

    return response;
  } else {
    // Si l'authentification échoue, renvoyer une erreur
    return NextResponse.json({ error: 'Entrées invalides. Veuillez réessayer!' }, { status: 401 });
  }
}