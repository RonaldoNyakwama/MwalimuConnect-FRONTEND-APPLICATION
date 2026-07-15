import { mockBookings, mockEarningsData } from '../../public/mockData.js';
import{CheckCircle, TrendingUp, Clock, DollarSign} from "lucide-react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

export function TutorEarnings({totalEarned, pendingEarnings, expectedEarnings, earningsData = mockEarningsData, tutorBookings= mockBookings.filter(b => b.tutorId === '1')}){
  const resolvedTotalEarned = totalEarned ?? tutorBookings
    .filter(b => b.paymentStatus === 'released')
    .reduce((sum, b) => sum + b.amount, 0);

  const resolvedPendingEarnings = pendingEarnings ?? tutorBookings
     .filter(b => b.paymentStatus === 'held')
     .reduce((sum, b) => sum + b.amount, 0);

  const resolvedExpectedEarnings = expectedEarnings ?? tutorBookings
     .filter(b => b.status === 'scheduled')
     .reduce((sum, b) => sum + b.amount, 0);
  
  const Months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

  const resolvedEarningsData = Months.map(month => {
    const existing = earningsData.find(d => d.month === month);
    return existing ?? { month, earnings: 0}

  
  });
    return(
        <div>
             <h1 className="text-2xl mb-6">Earnings</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">Total Earned</p>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-3xl mb-1">${resolvedTotalEarned.toFixed(2)}</p>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>+15% from last month</span>
                    </div>
            </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Pending (In Escrow)</p>
            <Clock className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-3xl mb-1 text-yellow-600">${resolvedPendingEarnings.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">
            Awaiting class completion
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Expected (Scheduled)</p>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl mb-1">${resolvedExpectedEarnings.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">
            From upcoming classes
          </p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h2 className="text-xl mb-4">Earnings Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={resolvedEarningsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl mb-4">Payment History</h2>
        <div className="space-y-3">
          {tutorBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <div>
                <p className="text-sm">{booking.studentName} - {booking.subject}</p>
                <p className="text-xs text-muted-foreground">
                  {booking.date} • {booking.duration} min
                </p></div>
            <div className="text-right">
                <p className="text-sm font-medium">${booking.amount.toFixed(2)}</p>
                <p
                  className={`text-xs ${
                    booking.paymentStatus === 'released'
                      ? 'text-green-600'
                      : booking.paymentStatus === 'held'
                      ? 'text-yellow-600'
                      : 'text-gray-600'
                  }`}
                >
                  {booking.paymentStatus}
                </p>
                </div>
                </div>
            ))}
        </div>
     </div>
     </div>
    )}
            

    