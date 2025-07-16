'use server';

import { revalidateTag } from 'next/cache';

export const revalidateExampleAction = (formData: FormData) => {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action', path);

  revalidateTag('posts'); // home
  revalidateTag('post/rotina-matinal-de-pessoas-altamente-eficazes'); // simgle
};
