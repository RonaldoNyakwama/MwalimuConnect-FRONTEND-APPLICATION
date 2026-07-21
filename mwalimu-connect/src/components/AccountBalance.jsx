import {useState} from 'react'
import { Button } from './Button';
export function AccountBalance(){
  const [balance, setBalance] =useState(250)
  const [addFundsOpen, setAddFundsOpen] = useState(false)
  const[amount, setAmount] =useState('')
  const transactions = [
    { id: '1', type: 'deposit', amount: 500, description: 'Account top-up', date: '2026-05-22', status: 'completed' },
    { id: '2', type: 'payment', amount: -50, description: 'Payment to Dr. Sarah Johnson (held in escrow)', date: '2026-05-23', status: 'held' },
    { id: '3', type: 'payment', amount: -67.5, description: 'Payment to Prof. Michael Chen', date: '2026-05-20', status: 'completed' },
    { id: '4', type: 'payment', amount: -40, description: 'Payment to Ms. Emily Williams (held in escrow)', date: '2026-05-24', status: 'held' },
    { id: '5', type: 'refund', amount: 25, description: 'Partial refund from cancelled session', date: '2026-05-19', status: 'completed' }
  ];
  const heldAmount = transactions
    .filter(t => t.status === 'held')
    .reduce((sum, t)=> sum + Math.abs(t.amount),0)

  const totalSpent = transactions
    .filter(t=> t.type === 'payment')
    .reduce((sum,t)=> sum + Math.abs(t.amount),0)

  const handleAddFunds = ()=> {
    const fundAmount = parseFloat(amount)
    if(fundAmount > 0){
      setBalance(balance + fundAmount)
      setAddFundsOpen(false)
      setAmount('')
    }
  }

    return(
      <div>
        <h1 className="text-2xl mb-6">Wallet</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <p className="text-3xl mb-4">${balance.toFixed(2)}</p>
            <Button variant="primary" size="sm" className="w-full" onClick={()=> setAddFundsOpen(true)}> + Add funds</Button>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Held in Escrow</p>
          <p className="text-3xl text-yellow-600">${heldAmount.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">Released after class completion</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Spent</p>
          <p className="text-3xl">${totalSpent.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">This month</p>
        </div>
        </div>

        {addFundsOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl mb-4"> Add Funds</h2>
              <label className="block mb-2 text-sm">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e)=> setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg mb-4"
                placeholder="Enter amount"
                min="0" />
            
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={()=> setAddFundsOpen(false)}>
                 Cancel
              </Button>
              <Button variant="primary" className="flex-1" onClick={handleAddFunds}>
                Add Funds
              </Button>
            </div>
            </div>
            </div>
        )}
      
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

