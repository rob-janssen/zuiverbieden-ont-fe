import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

interface Item {
  item_id: string;
  name: string;
  description: string;
  image: string;
}

interface ItemCardProps {
  items: Item[];
}

const ItemCard = ({ items }: ItemCardProps) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map((item: Item) => (
        <li
          key={item.item_id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {item.name}
                </h3>
                <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.name}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {item.description}
              </p>
            </div>
            <img
              alt=""
              src={item.image}
              className="size-10 shrink-0 rounded-full bg-gray-300"
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${item.name}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${item.name}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ItemCard;
