import ComingSoonPage from "../components/ComingSoonPage";

export default function MoneyPage() {
  return (
    <ComingSoonPage
      label="Money Guide"
      title="Earn smarter. Spend better."
      description="ViceHub will help players find the best ways to make money, avoid bad purchases and plan upgrades."
      features={[
        "Fast money methods",
        "Best early purchases",
        "Income planning",
        "Smart spending tips",
      ]}
      askPrompt="Help me make money fast in GTA 6."
    />
  );
}