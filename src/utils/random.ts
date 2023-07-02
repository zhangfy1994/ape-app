import { ALL_NFT_URIS } from "../const/nfts";

export function generateRandom(from: number, to: number): number {
  if (to < from) {
    return generateRandom(to, from);
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export function getRandomURI() {
  const random = generateRandom(0, ALL_NFT_URIS.length - 1);
  return ALL_NFT_URIS[random];
}
