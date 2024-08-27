import { Gene as TGene } from "../api/gene/Gene";

export const GENE_TITLE_FIELD = "name";

export const GeneTitle = (record: TGene): string => {
  return record.name?.toString() || String(record.id);
};
