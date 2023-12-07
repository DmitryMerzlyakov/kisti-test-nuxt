export default defineEventHandler(async (event) => {
  const category = [
    {
      id: 1,
      title: "Брови и ресницы",
      slug: "brovi-i-resnicy",
    },
    {
      id: 2,
      title: "Покрытие и дизайн",
      slug: "pokrytie-i-dizajn",
    },
    {
      id: 3,
      title: "Педикюр",
      slug: "pedikyur",
    },
    {
      id: 4,
      title: "Маникюр",
      slug: "manikyur",
    },
    {
      id: 5,
      title: "Популярное",
      slug: "populyarnoe",
    },
  ];

  return category;
});
