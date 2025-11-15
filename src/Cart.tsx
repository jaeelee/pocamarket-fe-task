import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "./_components/Header";
import { useShoppingList } from "./_libs/shopping.store";

export function Cart() {
  /**
   * @todo
   * 1. 카트 아이템 리스트 완성
   * 2. 상단 헤더 완성
   * 3. 결제 금액 영역 완성
   *
  */

  const userCash = 100;
  const { list: cartList, selecteAll, selected, selecteList, removeList, removeSelectedList } = useShoppingList();

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
            <input type="checkbox" checked={cartList.length === selected.length} onClick={selecteAll} />
            <button className="text-sm text-gray-500 hover:text-blue-500" >
              전체 선택 ({selected.length}/{cartList.length})
            </button>
          </div>
          <button className="bg-gray-200 text-sm text-gray-500 hover:text-blue-500 p-2 rounded-md cursor-pointer" onClick={() => removeSelectedList()}>
            선택 제거
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <section className="flex flex-1 flex-col p-4">
            {cartList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 border-b border-gray-100"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selected.includes(item.id)}
                    onClick={() => selecteList(item.id)}
                  />
                  <span>
                    {item.name} - USD {item.price}
                  </span>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={() => removeList(item.id)}>
                  삭제
                </button>
              </div>
            ))}
          </section>
          <nav className="md:w-1/3 flex flex-col gap-8 justify-center items-center p-4 border-l border-gray-100">
            <h2 className="text-lg font-bold">결제금액</h2>
            <div className="w-full flex flex-col gap-1">
              <p className="flex justify-between">
                전체 아이템 수:{" "}
                <span className="font-bold">{cartList.length}개</span>
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
