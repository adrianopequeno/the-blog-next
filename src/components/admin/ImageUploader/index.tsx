'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  // função que pega a referencia do input ao clicar no button
  const handleChooseFile = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  // função que valida o arquivo enviado
  const handleChange = () => {
    toast.dismiss();

    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`O tamanho máximo permitido é de ${readableMaxSize}kbs`);

      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // TODO: Criar a action para upload de arquivo
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        return;
      }

      // TODO: continuar depois
      toast.success(result.url);
    });

    fileInput.value = '';
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button type="button" className="self-start" onClick={handleChooseFile}>
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
