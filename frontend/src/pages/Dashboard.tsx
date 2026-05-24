import GlassCard from "../components/GlassCard";
import SessionUploader from "../components/SessionUploader";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-black mb-4 tracking-tight">
          Telegram Session Dashboard
        </h1>

        <p className="text-white/60 mb-10 text-lg">
          Управление собственными сессиями Telegram
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6">
              Информация аккаунта
            </h2>

            <div className="space-y-4">
              <input
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
                placeholder="Номер телефона"
              />

              <input
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
                placeholder="Telegram ID"
              />

              <input
                className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none"
                placeholder="@username"
              />
            </div>
          </GlassCard>

          <SessionUploader />
        </div>
      </div>
    </div>
  );
}
