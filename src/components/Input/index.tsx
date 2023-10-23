import { InputHTMLAttributes } from 'react';
import * as S from './index.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return <S.Input {...props} />;
};

export default Input;
