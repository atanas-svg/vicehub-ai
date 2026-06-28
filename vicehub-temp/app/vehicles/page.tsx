import ComingSoonPage from "../components/ComingSoonPage";

export default function VehiclesPage() {
  return (
    <ComingSoonPage
      label="Vehicle Database"
      title="Find the perfect ride."
      description="Compare cars, bikes, boats and aircraft by speed, handling, value, unlocks and Vice Score."
      features={[
        "Speed comparison",
        "Best first vehicle",
        "Unlock requirements",
        "Vice Score rating",
      ]}
      askPrompt="Help me choose the best first vehicle in GTA 6."
    />
  );
}