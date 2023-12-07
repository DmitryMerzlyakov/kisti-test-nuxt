export default defineEventHandler(async (event) => {
  const price = [
    {
      name: "Осветление бровей",
      basePrice: 500,
      category: 1,
    },
    {
      name: "Счастье для бровей/ Ботокс ресниц",
      basePrice: 600,
      category: 1,
      hit: true,
    },
    {
      name: "Моделирование бровей (без окрашивания)",
      basePrice: 400,
      category: 1,
    },
    {
      name: "Прореживание густых бровей",
      basePrice: 200,
      category: 1,
    },
    {
      name: "Лучики/Мокрый эффект/Эффект Ким/Цветные ресницы",
      basePrice: 1200,
      category: 1,
    },
    {
      name: "Моделирование и окрашивание бровей (хна/краска)",
      basePrice: 1500,
      category: 1,
    },
    {
      name: "Наращивание 3D",
      basePrice: 3000,
      category: 1,
    },
    {
      name: "Покрытие гель-лаком (включая выравнивание)",
      basePrice: 2000,
      category: 2,
      hit: true,
    },
    {
      name: "Покрытие база/обычный лак/закрепитель IBX/топ гель-лак",
      basePrice: 1000,
      category: 2,
    },
    {
      name: "Ремонт-донаращивание",
      basePrice: 500,
      category: 2,
    },
    {
      name: "Моделирование ногтей/формы",
      basePrice: 250,
      category: 2,
    },
    {
      name: "Снятие гель-лака и укрепления (при маникюре)",
      basePrice: 1000,
      category: 2,
    },
    {
      name: "Снятие наращённых ногтей / геля / акрила (при маникюре)",
      basePrice: 5000,
      category: 2,
      hit: true,
    },
    {
      name: "Покрытие гель-лаком (включая выравнивание)",
      basePrice: 300,
      category: 2,
    },
    {
      name: "Коррекция нарощенных ногтей",
      basePrice: 2000,
      category: 2,
    },
    {
      name: "Лечебное покрытие IBX",
      basePrice: 300,
      category: 2,
    },
    {
      name: "Ламинирование ногтей",
      basePrice: 500,
      category: 2,
    },
    {
      name: "Комплекс в четыре руки (педикюр + маникюр в четыре руки, без покрытия)",
      basePrice: 3000,
      category: 3,
    },
    {
      name: "Тампонада ногтя",
      basePrice: 300,
      category: 3,
    },
    {
      name: "Педикюр без покрытия (дисковый, аппаратный, комбинированный, классический)",
      basePrice: 1500,
      category: 3,
    },
    {
      name: "Обработка Smart (обработка дисками + продукция Smart)",
      basePrice: 300,
      category: 3,
    },
    {
      name: "Smart-педикюр (при покрытии)",
      basePrice: 300,
      category: 3,
      hit: true,
    },
    {
      name: "Smart-педикюр (без покрытия)",
      basePrice: 300,
      category: 3,
    },
    {
      name: "Smart-педикюр + гель-лак (Комплекс)",
      basePrice: 300,
      category: 3,
    },
    {
      name: "Установка титановой нити",
      basePrice: 300,
      category: 3,
      hit: true,
    },
    {
      name: " Классический маникюр (обрезной)",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Комбинированный маникюр",
      basePrice: 600,
      category: 4,
      hit: true,
    },
    {
      name: "Аппаратный маникюр",
      basePrice: 600,
      category: 4,
      hit: true,
    },
    {
      name: "Придание формы ногтевой пластине (без маникюра)",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Классический маникюр (обрезной)",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Французский маникюр",
      basePrice: 600,
      category: 4,
      hit: true,
    },
    {
      name: "Мужской маникюр",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Европейский маникюр (необрезной)",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Детский маникюр + лак",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Бразильский маникюр",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Полировка ногтей",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Маникюр при покрытии гель-лаком",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Покрытие гель-лаком (включая выравнивание)",
      basePrice: 600,
      category: 4,
    },
    {
      name: "Покрытие цветным лаком",
      basePrice: 600,
      category: 4,
      hit: true,
    },

    {
      name: "Дизайн четвертого ногтя в подарок",
      basePrice: 3500,
      category: 5,
    },
    {
      name: "Французский маникюр + покрытие гель лак",
      basePrice: 3500,
      category: 5,
    },
    {
      name: "Скидка 10% за удачное фото в Инстаграм",
      basePrice: 3500,
      category: 5,
    },
    {
      name: "SPA-Процедура “Счастье для рук”",
      basePrice: 3500,
      category: 5,
    },
  ];

  return price;
});
