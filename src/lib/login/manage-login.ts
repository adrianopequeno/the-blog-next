import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtEncodedKey = new TextEncoder().encode(jwtSecretKey);

const loginExpSeconds = Number(process.env.LOGIN_EXPIRATION_SECONDS) || 86400;
const loginExpStr = process.env.LOGIN_EXPIRATION_STRING || '1d';
const loginCookieName = process.env.LOGIN_COOKIE_NAME || 'loginSession';

export async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  const base64 = Buffer.from(hash).toString('base64');
  return base64;
}

export async function verifyPassword(password: string, base64Hash: string) {
  const hash = Buffer.from(base64Hash, 'base64').toString('utf-8');
  return bcrypt.compare(password, hash);
}

export async function createLoginSession(username: string) {
  const expiresAt = new Date(Date.now() + loginExpSeconds * 1000); // data no futuro de 1 dia em ms.
  const loginSession = username + ' Qualquer coisa'; // vai ser o JWT
  const cookieStore = await cookies();

  cookieStore.set(loginCookieName, loginSession, {
    httpOnly: true, // só pode ser lido dentro do servidor
    secure: true,
    sameSite: 'strict',
    expires: expiresAt,
  });
}

export async function deleteLoginSession() {
  const cookieStore = await cookies();
  // faz com q o navegador expire o cookie
  cookieStore.set(loginCookieName, '', { expires: new Date(0) });
  cookieStore.delete(loginCookieName);
}
