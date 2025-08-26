import { hashPassword } from '@/lib/login/manage-login';

// exemplo de uso
(async () => {
  // BD
  const hashedPassword = await hashPassword('');
  console.log({ hashedPassword });

  // Form loginm
  // const valid = await verifyPasswor('123456', hashedPassword);
  // console.log({ valid });
})();
