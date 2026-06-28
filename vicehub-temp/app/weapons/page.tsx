import ComingSoonPage from "../components/ComingSoonPage";

export default function WeaponsPage() {
  return (
    <ComingSoonPage
      label="Weapons Database"
      title="Build the best loadout."
      description="Discover the best weapons for missions, police chases, online activities and different playstyles."
      features={[
        "Best weapons by situation",
        "Loadout ideas",
        "Unlock info",
        "Weapon stats",
      ]}
    />
  );
}