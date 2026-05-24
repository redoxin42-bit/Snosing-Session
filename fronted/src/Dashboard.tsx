import GlassCard from "../components/GlassCard";
import SessionUploader from "../components/SessionUploader";
import SessionList from "../components/SessionList";
import SupportForm from "../components/SupportForm";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-black mb-3 tracking-tight">
          Telegram Dashboard
        </h1>

        <p className="text-white/60 mb-10 text-lg">
          Liquid Glass Interface
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6">
              Account Information
            </h2>

            <div className="space-y-4">
              <input
                className="glass-input"
                placeholder="Phone number"
              />

              <input
                className="glass-input"
                placeholder="Telegram ID"
              />

              <input
                className="glass-input"
                placeholder="@username"
              />
            </div>
          </GlassCard>

          <SessionUploader />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <SessionList />
          <SupportForm />
        </div>
      </div>
    </div>
  );
}
