"use client";

import { useState, useEffect } from "react";
import SubTypeModal from "@/components/SubTypeModal";

const ModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //trick per errori nel server side
  if (!isMounted) {
    return null;
  }

  return (
    <SubTypeModal>
      <></>
    </SubTypeModal>
  );
};
export default ModalProvider;
