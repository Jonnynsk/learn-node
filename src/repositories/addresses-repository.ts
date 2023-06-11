const addresses = [
  { id: 1, title: "Leskova" },
  { id: 2, title: "Nikitina" },
];

export const AddressesRepository = {
  addressById(id: number) {
    const address = addresses.find((p) => p.id === id);
    return address;
  },
};
