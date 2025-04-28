
import React, { createContext, useContext, useState } from 'react';

export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  startDate: string;
  graduationDate: string;
  location: string;
  willingToRelocate: boolean;
};

export type OnboardingStep = 'welcome' | 'profile' | 'location' | 'progress' | 'complete';

interface OnboardingContextType {
  userProfile: UserProfile;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  currentStep: OnboardingStep;
  setCurrentStep: (step: OnboardingStep) => void;
  profileCompletionPercentage: number;
}

const defaultProfileData: UserProfile = {
  firstName: 'Alex',
  lastName: 'Johnson',
  email: 'alex.johnson@example.com',
  phone: '(555) 123-4567',
  program: 'Computer Science',
  startDate: '2024-09-01',
  graduationDate: '2026-06-15',
  location: 'Norfolk, VA',
  willingToRelocate: false
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfileData);
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');

  // Calculate profile completion percentage based on filled fields
  const profileCompletionPercentage = React.useMemo(() => {
    const totalFields = Object.keys(userProfile).length;
    const filledFields = Object.values(userProfile).filter(value => 
      value !== undefined && value !== null && value !== ''
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  }, [userProfile]);

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <OnboardingContext.Provider 
      value={{
        userProfile,
        updateUserProfile,
        currentStep,
        setCurrentStep,
        profileCompletionPercentage
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
