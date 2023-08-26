import { ProductCardProps } from "@/app/components/ui/ProductCard";
import SelectSize from "@/app/components/ui/SelectSize";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decrementItemToCart,
  removeItemToCart,
} from "../../rtk-slices/cartSlice";
import { RootState } from "@/app/store/store";

const ItemInCartDropdown: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrls } = product;
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const selectedProduct = cartItems.find((item) => item.id === product.id);
  const dispatch = useDispatch();
  const handleDecrement = () => dispatch(decrementItemToCart(product));
  const handleIncrement = () => dispatch(addItemToCart(product));
  const handleRemoveItem = () => dispatch(removeItemToCart(product));
  return (
    <div className="flex items-center p-3 font-montserrat text-slate-500">
      <div className="flex justify-center mr-5">
        <Image
          src={imageUrls[0]}
          alt={name}
          width={150}
          height={150}
          className="rounded-md shadow-sm shadow-slate-900/50"
        />
      </div>
      <div className="relative flex flex-col h-[130px] w-3/5">
        <h2 className="inline text-sm font-medium text-orange-950">{name}</h2>
        <span className="mb-1 text-sm font-light text-orange-950">
          $ {price.toLocaleString()}
        </span>
        <SelectSize />
        <div className="absolute bottom-0 left-0 text-orange-900 transition-all duration-300 border border-orange-300 rounded-md">
          <Button
            variant="outline"
            className="h-[26px] p-1 m-0 bg-transparent border-none text-base px-2 items-center hover:bg-orange-100 group transition-all duration-300"
            onClick={handleDecrement}
          >
            <span className="transition-all duration-300 group-hover:scale-150 group-hover:text-orange-900">
              -
            </span>
          </Button>
          <span className="items-center px-2 py-1 text-sm border-none pointer-events-none">
            {selectedProduct?.quantity}
          </span>
          <Button
            variant="outline"
            className="h-[26px] p-1 m-0 bg-transparent border-none text-base px-2 items-center hover:bg-transparent group transition-all duration-300"
            onClick={handleIncrement}
          >
            <span className="transition-all duration-300 group-hover:scale-150 group-hover:text-orange-900">
              +
            </span>
          </Button>
        </div>
        <button className="absolute bottom-0 right-0">
          <Image
            src="/icons/trash.svg"
            alt=""
            width={30}
            height={30}
            className="transition-all duration-300 hover:scale-125"
            onClick={handleRemoveItem}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemInCartDropdown;
