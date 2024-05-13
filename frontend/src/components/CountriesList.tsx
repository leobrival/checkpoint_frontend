import { useQuery } from "@apollo/client";
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
          {country.name} {country.emoji}
        </li>
      ))}
    </ul>
  );
}
