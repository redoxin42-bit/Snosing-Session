import GlassCard from "./GlassCard";

export default function SupportForm() {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold mb-6">
        Support Request
      </h2>

      <textarea
        className="
          w-full
          h-48
          bg-white/10
          border
          border-white/10
          rounded-2xl
          p-4
          resize-none
          outline-none
        "
        placeholder="Generated support text..."
      />

      <button className="glass-button mt-4">
        Generate
      </button>
    </GlassCard>
  );
}
