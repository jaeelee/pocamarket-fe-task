import { Header } from "./_components/Header";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { TYPE_DATA } from "./_libs/type.data";
import { DATA } from "./_libs/card.data";

export function Home() {
  /**
   * @todo DATA 데이터를 바로 사용하지 않고 ../_libs/getPaginatedCard 함수를 사용하여 페이지네이션 처리
   */

  const currentPage = 1; // 현재 페이지 Example: 1
  const totalPages = 10; // 전체 페이지 Example: 10
  const exmpleCardImage = "https://placeholderjs.com/400x400";

  return (
    <div>
      <Header
        linkComponent={
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        }
      />
      <div className="flex">
        <nav className="w-1/4 bg-gray-100 pt-4">
          <div className="flex flex-col gap-2">
            {TYPE_DATA.map((type) => (
              <button
                key={`type-${type}`}
                className="text-sm text-gray-500 hover:text-blue-500 w-full"
              >
                {type}
              </button>
            ))}
          </div>
        </nav>
        <section className="flex-1 px-4 py-4">
          <div className="grid grid-cols-4 gap-4">
            {DATA.map((item, index) => (
              <div key={`${index}`}>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <img
                  src={exmpleCardImage}
                  alt={item.name}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <span className="text-sm text-gray-500 bg-white p-3 rounded shadow-lg fixed bottom-4 right-4">
        ({currentPage ?? 0}/{totalPages ?? 0})
      </span>
    </div>
  );
}
