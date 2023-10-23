import { ReactNode } from 'react';

export type PropsWithRequiredChildren<P = unknown> = P & {
  children: ReactNode | undefined;
};

export type Lang = 'ko';
