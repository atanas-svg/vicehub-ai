import ComingSoonPage from "../components/ComingSoonPage";

export default function TrackerPage() {
  return (
    <ComingSoonPage
      label="100% Tracker"
      title="Track your full progress."
      description="Keep track of missions, collectibles, achievements, vehicles, weapons and everything needed for full completion."
      features={[
        "Mission progress",
        "Collectible checklist",
        "Achievement tracking",
        "Completion percentage",
      ]}
    />
  );
}