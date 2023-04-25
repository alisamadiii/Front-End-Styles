type DataType = {
  id: number;
  title: string;
  description: string;
  image: string;
}[];

export type EachDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const DATA: DataType = [
  {
    id: 1,
    title: "Earth",
    description:
      "Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. While Earth may not contain the largest volumes of water in the Solar System, only Earth sustains liquid surface water,",
    image:
      "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 2,
    title: "Sun",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
    image:
      "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
