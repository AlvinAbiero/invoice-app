import { useMutation } from "@tanstack/react-query";
import { deleteItemsRow } from "../../utils/helpers";

export function useDeleteItems() {
  const { mutateAsync: deleteItemsAsync, isSuccess: isDeletingItems } = useMutation({
    mutationFn: (id: number) => deleteItemsRow(id),
  });

  return { deleteItemsAsync, isDeletingItems };
}
