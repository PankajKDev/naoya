"use client";
import { Switch } from "@radix-ui/react-switch";
import React, { useState } from "react";

const PrivacyToggle = () => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="airplane-mode">Public</label>
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">Private</label>
    </div>
  );
};

export default PrivacyToggle;
