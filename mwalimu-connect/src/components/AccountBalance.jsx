export function AccountBalance(){
    const transactions = [
    { id: '1', type: 'deposit', amount: 500, description: 'Account top-up', date: '2026-05-22', status: 'completed' },
    { id: '2', type: 'payment', amount: -50, description: 'Payment to Dr. Sarah Johnson (held in escrow)', date: '2026-05-23', status: 'held' },
    { id: '3', type: 'payment', amount: -67.5, description: 'Payment to Prof. Michael Chen', date: '2026-05-20', status: 'completed' },
    { id: '4', type: 'payment', amount: -40, description: 'Payment to Ms. Emily Williams (held in escrow)', date: '2026-05-24', status: 'held' },
    { id: '5', type: 'refund', amount: 25, description: 'Partial refund from cancelled session', date: '2026-05-19', status: 'completed' }
  ];
    return(
      <div>
        <h1 className="text-2xl mb-6">Wallet</h1>
        <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <p className="text-3xl">$250.00</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Held in Escrow</p>
          <p className="text-3xl text-yellow-600">$90.00</p>
          <p className="text-xs text-muted-foreground mt-2">Released after class completion</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Spent</p>
          <p className="text-3xl">$157.50</p>
          <p className="text-xs text-muted-foreground mt-2">This month</p>
        </div>
      
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl mb-4">Transaction History</h2>
        <div className="space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm">{t.description}</p>
                <p className="text-xs text-muted-foreground">{t.date} • {t.status}</p>
              </div>
              <div className={t.amount > 0 ? 'text-green-600' : 'text-foreground'}>
                {t.amount > 0 ? '+' : ''}${Math.abs(t.amount).toFixed(2)}
              </div>
            </div>
      ))}
      </div>
      </div>
    </div>
  );
}

