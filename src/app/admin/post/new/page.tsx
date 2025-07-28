import { Button } from '@/components/Button';

export const dynamic = 'force-dynamic';

export default async function AdminNewPostPage() {
  return (
    <div className="py-16 flex gap-4 flex-wrap">
      <Button variant="default">Confimar</Button>
      <Button variant="ghost">Cancelar</Button>
      <Button variant="danger">Ok</Button>
    </div>
  );
}
