import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminNewPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite seu nome" />
      <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />
      <InputText
        labelText="Sobrenome"
        placeholder="Digite seu sobrenome"
        disabled
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
    </div>
  );
}
