import { useQuery } from "@apollo/client";
import Link from "next/link";
import { LIST_COUNTRIES } from "../graphql/queries/listCountries";
import { Country } from "../types";

export default function CountriesList() {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(
    LIST_COUNTRIES
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <ul>
      {data?.countries.map((country) => (
        <li key={country.id}>
          <Link href={`/countries/${country.code}`}>
            {country.name} {country.emoji}
          </Link>
        </li>
      ))}
    </ul>
  );
}
