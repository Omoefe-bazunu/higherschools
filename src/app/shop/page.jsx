import Shop from "@/components/ShopPage/Shop";
import ShopHeader from "@/components/ShopPage/Hero";

export const metadata = {
  title: "Shop | HigherSchools",
  description:
    "Browse our comprehensive inventory of academic textbooks, exam prep tools, and technical robotics documentation.",
};

export default function ShopPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <ShopHeader />
        <Shop />
      </main>
    </div>
  );
}
