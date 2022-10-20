export const formatCurrency = (value: number) => {
  return value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "").trim();
};

export const formatToNumber = (value: string) => Number(value.replace('R$ ', '').replace('.', '').replace(',', '.'));