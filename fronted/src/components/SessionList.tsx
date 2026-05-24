import GlassCard from "./GlassCard";

const sessions = [
  {
    device: "Windows PC",
    location: "Germany",
    status: "Active"
  },
  {
    device: "Android",
    location: "USA",
    status: "Online"
  }
];

export default function SessionList() {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold mb-6">
        Active Sessions
      </h2>

      <div className="space-y-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">
                  {session.device}
                </h3>

                <p className="text-white/50">
                  {session.location}
                </p>
              </div>

              <span className="text-cyan-300">
                {session.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
