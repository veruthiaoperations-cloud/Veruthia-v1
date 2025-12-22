"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import type { Lead } from "@/types";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  onSuccess,
  onError,
}: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Lead>({
    full_name: "",
    email: "",
    company_name: "",
    service_type: "",
    project_budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          full_name: "",
          email: "",
          company_name: "",
          service_type: "",
          project_budget: "",
        });
        setStep(1);
        onSuccess();
      } else {
        onError();
      }
    } catch {
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="The Asset Audit">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-6">
              Step 1 of 3: Personal Information
            </p>
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <Button onClick={handleNext} className="w-full mt-4">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-6">
              Step 2 of 3: Business Information
            </p>
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Interest
              </label>
              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">Select a service</option>
                <option value="ai-receptionist">The AI Receptionist ($3,500)</option>
                <option value="recovery-sprint">The Recovery Sprint ($5,000)</option>
                <option value="business-engine">The Business Engine ($15,000)</option>
                <option value="saas-core">The SaaS Core ($45,000+)</option>
              </select>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={handleBack} variant="outline" className="flex-1">
                Back
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-6">
              Step 3 of 3: Project Details
            </p>
            <div>
              <label className="block text-sm font-medium mb-2">
                Estimated Budget
              </label>
              <select
                name="project_budget"
                value={formData.project_budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">Select a budget range</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-45k">$15,000 - $45,000</option>
                <option value="45k+">$45,000+</option>
              </select>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={handleBack} variant="outline" className="flex-1">
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Submitting..." : "Submit Audit Request"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Modal>
  );
}
