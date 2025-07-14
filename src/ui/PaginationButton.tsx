import { Button } from './button';
import React from 'react';

interface PaginationButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  onClick,
  disabled,
}) => (
  <Button onClick={onClick} disabled={disabled} variant="outline">
    {children}
  </Button>
);

export default PaginationButton;
