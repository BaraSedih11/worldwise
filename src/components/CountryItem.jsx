import styles from "./CountryItem.module.css";

function CountryItem({ country, key }) {
  return (
    <li className={styles.countryItem} key={key}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
