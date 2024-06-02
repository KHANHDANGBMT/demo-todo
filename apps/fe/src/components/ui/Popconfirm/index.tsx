import { Button } from "../Button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../popover";

export const Popconfirm = ({ children, onOk }: any) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div>
          Are you sure to delete this item?
          <div className="mt-4 flex justify-end">
            <PopoverClose className="PopoverClose mr-4" aria-label="Close">
              <Button
                variant={"outline"}
                size={"sm"}
                onClick={() => {
                  console.log("click ok");
                  onOk?.();
                }}
              >
                Ok
              </Button>
            </PopoverClose>
            <PopoverClose className="PopoverClose" aria-label="Close">
              <Button size={"sm"}>Cancel</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
