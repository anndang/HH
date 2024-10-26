import React from 'react';
import { ChevronLeft } from 'lucide-react';

// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState('home');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'signup':
        return <SignupScreen onNavigate={navigateTo} />;
      case 'features':
        return <FeaturesScreen onNavigate={navigateTo} />;
      case 'familyPlanning':
        return <FamilyPlanningScreen onNavigate={navigateTo} />;
      case 'workplace':
        return <WorkplaceScreen onNavigate={navigateTo} />;
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      {renderScreen()}
    </div>
  );
};

// Home Screen
const HomeScreen = ({ onNavigate }) => (
  <div className="p-6 min-h-screen bg-pink-50">
    <div className="flex flex-col items-center space-y-6">
      <img src="/api/placeholder/100/100" alt="Bird Logo" className="mb-4" />
      <h1 className="text-4xl font-bold text-pink-400">CARE NEST</h1>
      <p className="text-center text-gray-700 font-medium">
        Empower, Educate, Embrace:<br />
        Your Path to Reproductive Wellness
      </p>
      <div className="w-full space-y-4 mt-8">
        <p className="text-purple-700 font-medium">PLEASE ENTER YOUR LOGIN INFORMATION</p>
        <input
          type="text"
          placeholder="Enter your email or phone number..."
          className="w-full p-3 rounded-lg border border-pink-200"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          className="w-full p-3 rounded-lg border border-pink-200"
        />
        <p className="text-pink-500 text-sm">Forgot your password?</p>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => onNavigate('features')}
            className="flex-1 bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-500"
          >
            SIGN IN
          </button>
          <button
            onClick={() => onNavigate('signup')}
            className="flex-1 bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-500"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Signup Screen
const SignupScreen = ({ onNavigate }) => (
  <div className="p-6 min-h-screen bg-pink-50">
    <div className="flex flex-col items-center space-y-6">
      <img src="/api/placeholder/100/100" alt="Bird Logo" className="mb-4" />
      <h1 className="text-4xl font-bold text-pink-400">CARE NEST</h1>
      <div className="w-full space-y-4 mt-8">
        <p className="text-purple-700 font-medium">CREATE A NEW ACCOUNT</p>
        <input
          type="text"
          placeholder="Enter your preferred display name..."
          className="w-full p-3 rounded-lg border border-pink-200"
        />
        <input
          type="text"
          placeholder="Enter your email or phone number..."
          className="w-full p-3 rounded-lg border border-pink-200"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          className="w-full p-3 rounded-lg border border-pink-200"
        />
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex-1 bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-500"
          >
            BACK
          </button>
          <button
            className="flex-1 bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-500"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Features Screen
const FeaturesScreen = ({ onNavigate }) => (
  <div className="min-h-screen bg-white">
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Care Nest</h1>
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard
          title="Family Planning & Health Resources"
          color="bg-blue-100"
          onClick={() => onNavigate('familyPlanning')}
        />
        <FeatureCard
          title="Workplace & Legal Rights"
          color="bg-yellow-100"
          onClick={() => onNavigate('workplace')}
        />
        <FeatureCard
          title="Financial Literacy"
          color="bg-orange-100"
        />
        <FeatureCard
          title="Telehealth & HealthApp Integration"
          color="bg-blue-200"
        />
      </div>
      <div className="space-y-4 mt-4">
        <div className="p-4 bg-pink-100 rounded-lg">
          <h3 className="font-medium">Surrogacy, Adoption & Post-Care</h3>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
        <div className="p-4 bg-green-100 rounded-lg">
          <h3 className="font-medium">Support & Safe Space</h3>
          <button className="mt-2 px-4 py-1 bg-purple-500 text-white rounded">
            Join Community
          </button>
        </div>
      </div>
    </div>
    <nav className="fixed bottom-0 w-full max-w-md bg-white border-t">
      <div className="flex justify-around py-2">
        <button className="text-pink-500">Home</button>
        <button>Features</button>
        <button>About</button>
      </div>
    </nav>
  </div>
);

// Feature Card Component
const FeatureCard = ({ title, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} p-4 rounded-lg text-left h-32`}
  >
    <h3 className="font-medium text-sm">{title}</h3>
  </button>
);

// Family Planning Screen
const FamilyPlanningScreen = ({ onNavigate }) => (
  <div className="min-h-screen bg-white">
    <div className="p-4">
      <button
        onClick={() => onNavigate('features')}
        className="mb-4"
      >
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-semibold mb-4">Family Resources</h1>
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard title="Family Planning" color="bg-blue-100" />
        <FeatureCard title="Nearby Clinics" color="bg-yellow-100" />
        <FeatureCard title="Nutrition" color="bg-purple-100" />
        <FeatureCard title="Insurance Coverage" color="bg-orange-100" />
      </div>
    </div>
  </div>
);

// Workplace Screen
const WorkplaceScreen = ({ onNavigate }) => (
  <div className="min-h-screen bg-white">
    <div className="p-4">
      <button
        onClick={() => onNavigate('features')}
        className="mb-4"
      >
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-semibold mb-4">Workplace & Legal Rights</h1>
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard title="Workplace Rights" color="bg-yellow-100" />
        <FeatureCard title="Legal Rights" color="bg-pink-100" />
      </div>
    </div>
  </div>
);

export default App;