import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LogOut, User, CreditCard, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function Settings() {
  const { user } = useStore();

  const sections = [
    { title: 'Profile', icon: User, items: ['Edit Information', 'Privacy Settings'] },
    { title: 'Payment & Membership', icon: CreditCard, items: ['Manage Subscription', 'Payment Methods', 'Billing History'] },
    { title: 'App Preferences', icon: SettingsIcon, items: ['Notifications', 'Unit (Yards/Meters)', 'Dark Mode'] },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      
      <Card className="flex flex-col sm:flex-row items-center gap-4 bg-background">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
          {user.name.charAt(0)}
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p className="text-sm text-primary75 mb-2">{user.membership} Member • {user.handicap} HCP</p>
          <Button variant="secondary" className="h-8 px-4 text-xs font-semibold">Edit Profile</Button>
        </div>
      </Card>

      <div className="space-y-4">
        {sections.map((section, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <section.icon size={18} className="text-primary75" /> {section.title}
              </CardTitle>
            </CardHeader>
            <div className="divide-y divide-primary/5">
              {section.items.map((item, i) => (
                <div key={i} className="py-3 px-2 flex justify-between items-center cursor-pointer hover:bg-primary/5 transition-colors rounded-md">
                  <span className="text-sm font-medium">{item}</span>
                  <span className="text-primary/30">→</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <Link to="/">
          <Button variant="secondary" className="w-full text-red-600 border-red-200 hover:bg-red-50 focus:ring-red-500 flex items-center gap-2 justify-center">
            <LogOut size={16} /> Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
}
