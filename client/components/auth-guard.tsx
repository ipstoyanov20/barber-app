"use client";

import { useEffect, useState } from "react";
import storageService from "@/services/storage-service";

const AuthGuard = ({ onAuthChange }: { onAuthChange:any }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = storageService.retrieveAccessToken();
      onAuthChange(!!user); // Notify parent about login status
      setIsLoading(false);
    };
    checkAuth();
  }, [onAuthChange]);

  if (isLoading) {
    return null; // No need to block rendering the Navbar
  }

  return null; // This component just validates, doesn't render anything
};

export default AuthGuard;
