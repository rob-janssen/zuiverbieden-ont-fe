import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect } from "react-router-dom";
import ItemCard from "../components/UI/ItemCard.tsx";

interface Item {
  item_id: string;
  name: string;
  description: string;
  image: string;
}

export const loader = async () => {
  try {
    const response = await customFetch.get("/items/allitems");
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    toast.error(`You are not authorized to view this page. Error: ${error}`);
    return redirect("/");
  }
};

const ItemManagement = () => {
  const items = useLoaderData<Item[]>();
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin - Item management</h1>
      <div className="px-2 sm:px-2 lg:px-2">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <p className="mt-2 text-sm text-gray-700">
              A list of all the items/objects !
            </p>
          </div>
          <div className="py-6 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div>

        <div>
          <ItemCard items={items} />
        </div>
      </div>
    </div>
  );
};
export default ItemManagement;
