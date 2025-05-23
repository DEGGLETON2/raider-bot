import ChatWindow from '@/components/chat/chat-window';
import FinancialMetrics from '@/components/dashboard/financial-metrics';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Financial Dashboard */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Financial Overview</h2>
          <FinancialMetrics />
        </div>

        {/* Right side: Chat Interface */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">RaiderBot Assistant</h2>
          <div className="h-[800px]">
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
}
