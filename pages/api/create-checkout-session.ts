import { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items, email } = req.body;
  const transformItems = items.map((item: any) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
    },

    quantity: 1,
  }));
  console.log({ transformItems: JSON.stringify(transformItems) });
  const session = await stripe.checkout.sessions.create({
    line_items: transformItems,
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 6, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["US", "VN"],
    },
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: any) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
}
