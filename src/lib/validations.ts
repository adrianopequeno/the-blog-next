import { isUrlOrRelativePath } from '@/utils/is-url-or-relative-path';
import sanitizeHtml from 'sanitize-html';
import { z } from 'zod';

const PostBaseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Título deve ter, no mínimo, 3 caracteres')
    .max(120, 'Título deve ter um máximo de 120 caracteres'),
  content: z
    .string()
    .trim()
    .min(3, 'Conteúdo é obrigatório')
    .transform((val) => sanitizeHtml(val)),
  author: z
    .string()
    .trim()
    .min(4, 'Autor precisa de um mínimo de 4 caracteres')
    .max(100, 'Nome do autor não deve ter mais que 100 caracteres'),
  excerpt: z
    .string()
    .trim()
    .min(3, 'Excerto precisa de um mínimo de 3 caracteres')
    .max(200, 'Excerto não deve ter mais que 200 caracteres'),
  coverImageUrl: z.string().trim().refine(isUrlOrRelativePath, {
    message: 'URL da capa deve ser uma URL ou caminho para imagem',
  }),
  published: z
    .union([
      z.literal('on'),
      z.literal('true'),
      z.literal('false'),
      z.literal(true),
      z.literal(false),
      z.literal(null),
      z.literal(undefined),
    ])
    .default(false)
    .transform((val) => val === 'on' || val === 'true' || val === true),
});

// PostCreateSchema: igual ao base por enquanto
export const PostCreateSchema = PostBaseSchema;

// PostUpdateSchema: pode incluir campos extras no futuro (ex: id)
export const PostUpdateSchema = PostBaseSchema.extend({
  // id: z.string().uuid('ID inválido'),
});

/*
Testando a validação de error pegando as mensagens e colocando em um array, retorno:
  [
    'Título deve ter, no mínimo, 3 caracteres',
    'Autor precisa de um mínimo de 4 caracteres'
  ]

const obj = {
  id: 'afa086e4-53e4-492d-acf2-7c2966d83fcd',
  slug: 'dicas-para-manter-a-saude-mental-em-dia',
  title: '',
  author: '',
  excerpt:
    'Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página.',
  content:
    'Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página.',
  file: {
    size: 0,
    type: 'application/octet-stream',
    name: 'undefined',
    lastModified: 1755471292162,
  },
  coverImageUrl: '/images/bryen_6.png',
  published: 'on',
};

const zodParseObj = PostCreateSchema.safeParse(obj);

if (!zodParseObj.success) {
  const errors = getZodErrorMessages(zodParseObj.error);
  console.log(errors);
}
*/
