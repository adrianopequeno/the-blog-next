import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { redirect } from 'next/navigation';

type JwtPayload = {
  username: string;
  expiresAt: Date;
};

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
  const loginSession = await signJwt({ username, expiresAt }); // vai ser o JWT
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

// sistema de login ok.
export async function getLoginSession() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get(loginCookieName)?.value;

  if (!jwt) return false;

  return verifyJwt(jwt);
}

// como só tem um usuário add essa verificaçao a +
export async function verifyLoginSession() {
  const jwtPayload = await getLoginSession();

  if (!jwtPayload) return false;

  return jwtPayload?.username === process.env.LOGIN_USER;
}

// função que ficará nas pags para ver se o usuário esta logado ou não
export async function requireLoginSessionOrRedirect() {
  // const isAuthenticated = await getLoginSession(); // usar quando tiver mais usuários
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    redirect('/admin/login');
  }
}

// Assinando o JWT
export async function signJwt(jwtPayload: JwtPayload) {
  return new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime(loginExpStr)
    .sign(jwtEncodedKey);
}

// verifica o token jwt
export async function verifyJwt(jwt: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(jwt, jwtEncodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    console.error('Invalid Token!');
    return false;
  }
}
