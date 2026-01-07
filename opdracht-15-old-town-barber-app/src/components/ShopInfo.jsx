const ShopInfo = () => {
  const shop = {
    name: "Old Town Barber",
    openingHours: {
      monday: "09:00 - 18:00",
      tuesday: "09:00 - 18:00",
      wednesday: "09:00 - 18:00",
      thursday: "09:00 - 20:00",
      friday: "09:00 - 20:00",
      saturday: "10:00 - 16:00",
      sunday: "Gesloten",
    },
    services: [
      {
        id: 1,
        name: "Heren Knipbeurt",
        price: 25,
        duration: 30,
      },
      {
        id: 2,
        name: "Baard Trim",
        price: 15,
        duration: 15,
      },
      {
        id: 3,
        name: "Knipbeurt + Baard",
        price: 35,
        duration: 45,
      },
    ],
  };

  return (
    <div>
      <h2>{shop.name}</h2>

      <h3>Openingstijden</h3>
      <ul>
        {Object.entries(shop.openingHours).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>

      <h3>Services</h3>
      <ul>
        {shop.services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> – €{service.price} (
            {service.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopInfo;
