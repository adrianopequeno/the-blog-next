import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDateTime = (rawDate: string): string => {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
};

export const formatDistanceToNow = (rawDate: string): string => {
  const date = new Date(rawDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};

export const getFormattedDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const now = new Date();
  const diffInHours =
    Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours >= 24) {
    return formatDateTime(rawDate);
  }

  return formatDistanceToNow(rawDate);
};
