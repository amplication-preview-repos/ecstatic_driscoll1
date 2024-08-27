import { Sample as TSample } from "../api/sample/Sample";

export const SAMPLE_TITLE_FIELD = "sampleName";

export const SampleTitle = (record: TSample): string => {
  return record.sampleName?.toString() || String(record.id);
};
