import { Card } from "./card.type";

export const ORIGIN_DATA = [
  {
    name: "이상해씨",
    image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
    wishCount: 12,
    price: 15,
    groupName: "풀,독",
    memberName: "No. 001",
    discountedPrice: 12,
    discountRate: 0.2,
    bestPick: true,
  },
  {
    name: "리자몽",
    image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000601.png",
    wishCount: 20,
    price: 25,
    groupName: "불꽃,비행",
    memberName: "No. 006",
    discountedPrice: 20,
    discountRate: 0.2,
    bestPick: false,
  },
  {
    name: "꼬부기",
    image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png",
    wishCount: 8,
    price: 10,
    groupName: "물",
    memberName: "No. 007",
    discountedPrice: 8,
    discountRate: 0.2,
    bestPick: true,
  },
  {
    name: "피카츄",
    image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png",
    wishCount: 15,
    price: 18,
    groupName: "전기",
    memberName: "No. 025",
    discountedPrice: 15,
    discountRate: 0.1667,
    bestPick: false,
  },
  {
    name: "푸린",
    image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003901.png",
    wishCount: 10,
    price: 12,
    groupName: "노말,페어리",
    memberName: "No. 039",
    discountedPrice: 10,
    discountRate: 0.1667,
    bestPick: true,
  },
];

//100
export const DATA: Card[] = Array.from({ length: 20 }, (_, index) =>
  ORIGIN_DATA.map((card, cardIndex) => ({
    ...card,
    id: index * ORIGIN_DATA.length + cardIndex + 1,
  }))
).flat();
