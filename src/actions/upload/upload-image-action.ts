'use server';

import { verifyLoginSession } from '@/lib/login/manage-login';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  // Verificar se o usuário está logado
  const isAuthenticated = verifyLoginSession();

  if (!isAuthenticated) {
    makeResult({ error: 'Faça login novamente em outra aba!' });
  }

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos' });
  }

  const file = formData.get('file');
  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido' });
  }

  const uploadMaxSize =
    Number(process.env.NEXT_PUBLIC_IMAGE_UPLOADER_MAX_SIZE) || 921600;
  if (file.size > uploadMaxSize) {
    return makeResult({ error: 'Arquivo muito grande' });
  }

  if (!file.type.includes('image')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  const imageExtension = extname(file.name);
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(imageExtension)) {
    return makeResult({ error: 'Extensão de imagem inválida' });
  }
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const imageUploadDirectory = process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads';
  const uploadFullPath = resolve(process.cwd(), 'public', imageUploadDirectory);
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const imageServerURL =
    process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploads';
  const url = `${imageServerURL}/${uniqueImageName}`;

  return makeResult({ url });
}
