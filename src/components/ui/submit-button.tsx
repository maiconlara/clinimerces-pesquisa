import {
    RiLoader4Fill,
   
  } from "@remixicon/react";
  
  import {Button} from "./button";
  
  interface SubmitButtonProps {
    children: React.ReactNode;
    isLoading: boolean;
    form: string;
  }
  
  export const SubmitButton = ({
    isLoading = false,
    form,
    children,
  }: SubmitButtonProps) => {
    return (
      <Button
        type="submit"
        variant="default"
        form={form}
        className={`${isLoading ? "cursor-default" : "cursor-pointer"}`}
        disabled={isLoading}
      >
        {isLoading ? (
            <RiLoader4Fill className="h-5 w-5 text-white animate-spin" />
        ) : (
          children
        )}
      </Button>
    );
  };
  