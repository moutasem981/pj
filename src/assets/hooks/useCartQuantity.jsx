import useUpdateCartItem from "./useUpdateCartItem";
import useRemoveFormCart from "./useRemoveFormCart";

export default function useCartQuantity() {
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveFormCart();

  const updateQuantity = (productId, currentCount, action) => {
    if (action === "+") {
      updateItem({ productId, count: currentCount + 1 });
    } else if (action === "-") {
      if (currentCount === 1) {
        removeItem(productId);
      } else {
        updateItem({ productId, count: currentCount - 1 });
      }
    }
  };

  return {
    updateQuantity,
    isPending: isUpdating || isRemoving,
  };
}