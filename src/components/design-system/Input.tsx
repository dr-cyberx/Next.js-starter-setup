import React, { type CSSProperties } from "react";
import { useController } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  inputType?: "text" | "number" | "password" | "email" | "tel";
  control: any;
  isDisabled?: boolean;
  rules?: any;
  style?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  isDisabled,
  name,
  control,
  rules,
  placeholder,
  inputType,
  style,
}) => {
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="relative h-11 w-full min-w-full">
      <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
        {icon ?? <></>}
      </div>
      <input
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        onChange={onChange}
        name={name}
        type={inputType}
        disabled={isDisabled}
        placeholder={" "}
        style={{ ...style }}
        autoFocus={false}
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
      {fieldState?.invalid && (
        <span className="text-red-500 text-xs">
          {fieldState.error?.message
            ? fieldState.error?.message
            : `${label} is required !`}
        </span>
      )}
    </div>
  );
};

Input.defaultProps = {
  label: "Input Label",
  icon: <></>,
  isDisabled: false,
  name: "input",
  onChange: (e) => true,
};

export default React.memo(Input);
