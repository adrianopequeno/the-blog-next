import { ZodError } from 'zod';

export function getZodErrorMessages(error: ZodError): string[] {
  // Extrair mensagens diretamente do array de erros
  return error.issues.map((issue) => issue.message);
}
