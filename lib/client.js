import { createClient } from "next-sanity"

export const client = createClient({
    dataset: 'production',
    projectId: 'z1zo4z3v',
    apiVersion: '2022-01-28',
    useCdn: true
})