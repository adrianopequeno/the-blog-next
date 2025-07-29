import { Button } from '@/components/Button';
import { BanIcon, BugIcon, CheckIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminNewPostPage() {
  return (
    <div>
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm" positionIcon="left">
          <BugIcon />
          Confimar
        </Button>
        <Button variant="ghost" size="md" positionIcon="top">
          <BugIcon />
          Cancelar
        </Button>
        <Button variant="danger" size="lg" positionIcon="right">
          <BugIcon />
          Ok
        </Button>

        <Button
          variant="danger"
          size="lg"
          positionIcon="left"
          elementPosition="center"
          className="w-full"
        >
          <BugIcon />
          Confimar
        </Button>

        <Button
          variant="ghost"
          size="lg"
          positionIcon="right"
          elementPosition="center"
          className="w-full"
        >
          <BanIcon />
          Cancel
        </Button>

        <Button
          variant="default"
          size="lg"
          positionIcon="left"
          elementPosition="center"
          className="w-full"
        >
          <CheckIcon />
          Ok
        </Button>
      </div>

      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm" positionIcon="left" disabled>
          <BugIcon />
          Confimar
        </Button>
        <Button variant="ghost" size="md" positionIcon="top" disabled>
          <BugIcon />
          Cancelar
        </Button>
        <Button variant="danger" size="lg" positionIcon="right" disabled>
          <BugIcon />
          Ok
        </Button>

        <Button
          variant="default"
          size="md"
          positionIcon="left"
          elementPosition="center"
          className="w-full"
          disabled
        >
          <BugIcon />
          Confimar
        </Button>
      </div>
    </div>
  );
}
