
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputWithLabelProps {
  label: string;
  id: string;
  placeholder: string;
  type: string;
}

export function InputWithLabel({
  label,
  id,
  placeholder,
  type = "text",
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}