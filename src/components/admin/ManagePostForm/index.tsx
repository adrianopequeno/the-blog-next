'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/inputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useActionState, useEffect, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';
import { toast } from 'react-toastify';
import { updatePostAction } from '@/actions/post/update-post-action';

type ManagePostFormUpdateProps = {
  mode: 'update';
  publicPost?: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: 'create';
};

type ManagePostFormProps =
  | ManagePostFormUpdateProps
  | ManagePostFormCreateProps;

export function ManagePostForm(props: ManagePostFormProps) {
  const { mode } = props;

  let publicPost;
  if (mode === 'update') {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach((error) => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.dismiss();
      toast.success('Post atualizado com sucesso!');
    }
  }, [state.success]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={formState.id}
          readOnly
          disabled={isPending}
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={formState.slug}
          readOnly
          disabled={isPending}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Título do post"
          type="text"
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={formState.author}
          disabled={isPending}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Resuno do post"
          type="text"
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className="mt-4">
          <Button disabled={isPending} type="submit" size="md">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
