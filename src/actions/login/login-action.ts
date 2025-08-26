'use server';

import { createLoginSession, verifyPassword } from '@/lib/login/manage-login';
import { asyncDelay } from '@/utils/async-delay';
import { redirect } from 'next/navigation';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return {
      username: '',
      error: 'Login não permitido',
    };
  }

  await asyncDelay(5000); // Vou manter

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  // Dados que o usuário digitou no form
  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';

  if (!username || !password) {
    return {
      username,
      error: 'Preencha todos os campos',
    };
  }

  // Aqui eu checaria se o usuário existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || ''
  );

  if (!isUsernameValid || isPasswordValid) {
    return {
      username,
      error: 'Usuário e/ou senha inválidos!',
    };
  }

  // Aqui o usuário e a senha são válidos
  // Criar o cookie e redirecionar a página
  await createLoginSession(username);
  redirect('/admin/post');
}
