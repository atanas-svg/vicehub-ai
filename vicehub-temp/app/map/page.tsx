import ComingSoonPage from "../components/ComingSoonPage";

export default function MapPage() {
  return (
    <ComingSoonPage
      label="Interactive Map"
      title="Explore every corner."
      description="The future ViceHub map will help players find missions, secrets, collectibles, vehicles and important locations faster."
      features={[
        "Mission locations",
        "Secret spots",
        "Collectibles",
        "Vehicle spawn points",
      ]}
      askPrompt="Tell me how the ViceHub interactive map will help me in GTA 6."
    />
  );
}