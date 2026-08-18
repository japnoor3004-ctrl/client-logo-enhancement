import { queryOptions } from "@tanstack/react-query";
import { getCompany, listCompanies } from "./companies.functions";

export const companiesQuery = () =>
  queryOptions({
    queryKey: ["companies"],
    queryFn: () => listCompanies(),
    staleTime: 5 * 60_000,
  });

export const companyQuery = (slug: string) =>
  queryOptions({
    queryKey: ["company", slug],
    queryFn: () => getCompany({ data: slug }),
    staleTime: 5 * 60_000,
  });
