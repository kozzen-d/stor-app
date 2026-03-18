import { useEffect, useState } from "react";
import styles from "./Calculator.module.css";

export default function GoldPriceCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [goldPriceGram, setGoldPriceGram] = useState(0);
  const [dateTime, setDateTime] = useState<string>("");
  const [currencyCode, setCurrencyCode] = useState("EUR");

  useEffect(() => {
    async function fetchGoldPrice(code: string) {
      const BASE_URL = import.meta.env.VITE_GOLD_API_URL;
      const PATH = `/XAU/${code}`;
      try {
        const res = await fetch(BASE_URL + PATH, {
          headers: {
            "x-access-token": import.meta.env.VITE_GOLD_API_KEY,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch gold price");
        }

        const data = await res.json();
        setDateTime(new Date(data.timestamp * 1000).toLocaleString());
        setGoldPriceGram(data.price_gram_24k);
      } catch (error) {
        console.error(error);
        setGoldPriceGram(0);
      }
    }

    fetchGoldPrice(currencyCode);
  }, [currencyCode]); // weight здесь не нужен

  return (
    <div className={styles.calculator}>
      <h2>GOLD PRICE CALCULATOR</h2>

      <select
        value={currencyCode}
        onChange={(e) => setCurrencyCode(e.target.value)}
      >
        <option value="USD">USD - United States Dollar</option>
        <option value="EUR">EUR - European Euro</option>
        <option value="CHF">CHF - Swiss Franc</option>
      </select>

      {goldPriceGram ? (
        <div>
          <p>
            Price per gram: {goldPriceGram.toFixed(2)} {currencyCode}
          </p>
          <p>Updated: {dateTime}</p>

          <label>Weight (grams)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />

          <p>
            Total price: {(weight * goldPriceGram).toFixed(2)} {currencyCode}
          </p>
        </div>
      ) : (
        <p>First pick currency and update the price ...</p>
      )}
    </div>
  );
}