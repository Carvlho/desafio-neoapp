let coupons = [
  {
    name: "hqrara",
    type: "raro",
    discount: 10,
  },
  {
    name: "hqcomum",
    type: "comum",
    discount: 20,
  },
];

export default function cupounValidate(usedCoupons, coupon) {
  const couponUsed = usedCoupons.find((item) => item.name === coupon);

  if (couponUsed) {
    return "Cupom já utilizado";
  }

  const availableCoupon = coupons.find((item) => item.name === coupon);

  if (!availableCoupon) {
    return "Cupom inválido";
  }

  return availableCoupon;
}
