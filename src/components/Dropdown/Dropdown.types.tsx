export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
  backgroundColor?: string;
  textColor?: string;
}
