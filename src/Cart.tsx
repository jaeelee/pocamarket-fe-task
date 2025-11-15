import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "./_components/Header";

export function Cart() {
  /**
   * @todo
   * 1. 카트 아이템 리스트 완성
   * 2. 상단 헤더 완성
   * 3. 결제 금액 영역 완성
   *
   */
  const checkItemCount = 0;
  const totalItemCount = 4;
  const userCash = 100;
  const exampleCartItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
    { id: 4, name: "Item 4", price: 40 },
  ];

  return (
    <div className="relative">
      <Header
        linkComponent={
          <Link to="/">
            <HomeIcon />
          </Link>
        }
      />
      <div>
        <div className="h-15 flex gap-6 items-center border-b border-gray-100">
          <div className="flex gap-2 items-center px-4">
            <input type="checkbox" />
            <button className="text-sm text-gray-500 hover:text-blue-500">
              전체 선택 ({checkItemCount}/{totalItemCount})
            </button>
          </div>
          <button className="bg-gray-200 text-sm text-gray-500 hover:text-blue-500 p-2 rounded-md cursor-pointer">
            선택 제거
          </button>
        </div>
        <div className="flex">
          <section className="flex flex-1 flex-col p-4">
            {exampleCartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 border-b border-gray-100"
              >
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    {item.name} - USD {item.price}
                  </span>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  삭제
                </button>
              </div>
            ))}
          </section>
          <nav className="w-1/3 flex flex-col gap-8 justify-center items-center p-4 border-l border-gray-100">
            <h2 className="text-lg font-bold">결제금액</h2>
            <div className="w-full flex flex-col gap-1">
              <p className="flex justify-between">
                전체 아이템 수:{" "}
                <span className="font-bold">{totalItemCount}개</span>
              </p>
              <p className="flex justify-between">
                전체 상품 금액: <span className="font-bold">USD {0}</span>
              </p>
              <p className="flex justify-between">
                전체 할인 금액: <span className="font-bold">USD {0}</span>
              </p>
              <p className="flex justify-between">
                결제 예정 금액: <span className="font-bold">USD {0}</span>
              </p>
              <p className="flex justify-between">
                내 캐시: <span className="font-bold">USD {userCash}</span>
              </p>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer w-full">
              구매
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
