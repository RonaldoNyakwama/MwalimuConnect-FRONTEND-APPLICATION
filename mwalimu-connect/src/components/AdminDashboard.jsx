import { useState } from 'react'
import { Home, Wallet, BookOpen, Flag, LogOut} from 'lucide-react'
export function AdminDashboard({ onLogout }){
    const [activeTab, setActiveTab] = useState('overview')
    const navItems = [
        {id: 'overview', icon: Home, label:'Overview'},
        {id: 'payments', icon: Wallet, label: 'Payments'},
        {id: 'classes', icon:BookOpen, label: 'Classes'},
        {id: 'disputes', icon: Flag, label: 'Disputes'}];
    return (
        <div className="min-h-screen bg-background flex">
            <aside className="w-64 bg-secondary text-white border-r border-border">
                <div className="p-6">
                    <h2 className="text-xl mb-1">TutorConnect</h2>
                    <p className="text-sm text-muted-foreground">Admin Portal</p>
                </div>
                <nav className="space-y-1 px-3">
                    {navItems.map((item) => (
                        <button
                         key={item.id}
                         onClick={() => setActiveTab(item.id)}
                         className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id ? 'bg-primary text-white' :'hover:bg-white/10' }`} > 
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                         </button>
                    ))}
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-red-600 mt-8">
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </nav>
            </aside>
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    {activeTab === 'overview' && <h1 className="text-2xl mb-6">Platform Overview</h1>}
                    {activeTab === 'payments' && <h1 className="text-2xl mb-6">Payment Management</h1>}
                    {activeTab === 'classes' && <h1 className="text-2xl mb-6">Class Management</h1>}
                    {activeTab === 'disputes' && <h1 className="text-2xl mb-6">Dispute Resolution</h1>}
                    
                </div>
            </main>
        </div>
    )
}