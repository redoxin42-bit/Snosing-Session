import GlassCard from "./GlassCard";

export default function SessionUploader() {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold mb-6">
        Session Upload
      </h2>

      <div className="flex flex-col gap-4">
        <button className="glass-button">
          Upload Session Files
        </button>

        <button className="glass-button-purple">
          Use Demo Sessions
        </button>
      </div>
    </GlassCard>
  );
}
