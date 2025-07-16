```
SSR -> Server Side Rendering
CSR -> Client Side Rendering

ROTAS:
  Static / SSG -> Static Site Generation <- tenho o HTML pronto
  Dinamic <- Não tenho nada pronto.
  ISR <- Incremental Static Regeneration. Tem os SSG e o Dinamic junto.
    Na hora que faz o build ela é estática e depois de um tempo ela atualiza.
```

```
/ <- ISR -> Depois de 60s quero atualizar o conteúdo dela
/ <- ISR -> Depois quie eu atualizar algum conteúdo ela atualiza

/ (Púplica)
/post/[slug] (Púplica)

/adminpost (Privado - Dynamic) - Ler (R) Lista de posts / (D) Delete
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Privado - Dynamic) - Criar um post (C)

/admin/login (Dynamic) - Fazer o login do usuário
```
