export interface RadioButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string) => void;
  disabled?: boolean;
  fontSize?: string;
}