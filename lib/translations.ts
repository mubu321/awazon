export const translations = {
  en: {
    header: {
      balance: "Balance",
      searchPlaceholder: "Search Awazon.ai",
    },
    productView: {
      ratings: "ratings",
      buyNow: "Buy Now",
      skip: "Skip",
    },
    productCard: {
      addToCart: "Add to Cart",
    },
    cart: {
      title: "Shopping Cart",
      empty: "Your cart is empty.",
      remove: "Remove",
      subtotal: "Subtotal:",
      yourBalance: "Your Balance:",
      insufficientFunds: "Insufficient funds to complete purchase.",
      checkout: "Proceed to Checkout",
    },
    loader: {
      thinking: "Awazon.ai is thinking...",
      generating: "Generating unique, never-before-seen products just for you!",
    },
    app: {
        error: "Failed to load a new product. The AI might be taking a break. Please try again.",
        tryAgain: "Try Again",
        purchaseSuccess: (name: string, price: string) => `Purchase successful! You bought "${name}" for G ${price}.`,
        purchaseFail: "Purchase failed: Insufficient balance.",
    },
    language: "Language",
  },
  ja: {
    header: {
      balance: "残高",
      searchPlaceholder: "Awazon.ai を検索",
    },
    productView: {
      ratings: "件の評価",
      buyNow: "今すぐ購入",
      skip: "スキップ",
    },
    productCard: {
      addToCart: "カートに入れる",
    },
    cart: {
      title: "ショッピングカート",
      empty: "カートは空です。",
      remove: "削除",
      subtotal: "小計:",
      yourBalance: "あなたの残高:",
      insufficientFunds: "残高が不足しています。",
      checkout: "レジに進む",
    },
    loader: {
      thinking: "Awazon.ai は考え中です...",
      generating: "あなたのために、ユニークでまだ誰も見たことのない商品を生成しています！",
    },
    app: {
        error: "新しい商品の読み込みに失敗しました。AIが休憩中かもしれません。もう一度お試しください。",
        tryAgain: "再試行",
        purchaseSuccess: (name: string, price: string) => `購入に成功しました！「${name}」を G ${price} で購入しました。`,
        purchaseFail: "購入失敗：残高が不足しています。",
    },
    language: "言語",
  },
};

export type Language = keyof typeof translations;
