'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/inputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />

        <ImageUploader />

        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox labelText="Aceitar" />

        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          disabled
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          disabled
          defaultValue={'Olá Mundo!'}
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue={'Olá Mundo!'}
          readOnly
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          readOnly
        />

        <div className="mt-4">
          <Button type="submit" size="md">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
