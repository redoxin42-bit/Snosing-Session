import GlassCard from "./GlassCard";

export default function SessionUploader() {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold mb-6">
        Сессии
      </h2>

      <div className="flex flex-col gap-4">
        <button
          className="
            w-full
            rounded-2xl
            bg-cyan-400/20
            border border-cyan-300/20
            p-4
            hover:bg-cyan-400/30
            transition-all
          "
        >
          Загрузить свои session-файлы
        </button>

        <button
          className="
            w-full
            rounded-2xl
            bg-purple-400/20
            border border-purple-300/20
            p-4
            hover:bg-purple-400/30
            transition-all
          "
        >
          Использовать тестовые сессии
        </button>
      </div>
    </GlassCard>
  );
}
