export interface IResponse<DataType> {
  isError: boolean;
  message: string;
  data: DataType | null;
}
