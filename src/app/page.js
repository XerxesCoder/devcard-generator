"use client";

import { BusinessCardForm } from "@/components/business-card-form";
import { BusinessCardPreview } from "@/components/business-card-preview";
import { vscodeThemes } from "@/lib/vscode-themes";
import { useBusinessCardStore } from "@/store/business-card-store";

export default function Home() {
  const { selectedTheme, cardData, handleDataChange } = useBusinessCardStore();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">
              Developer Business Card Generator
            </h1>
            <p className="text-lg text-slate-600">
              Create your professional business card with VS Code themes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <BusinessCardForm onDataChange={handleDataChange} />

            <BusinessCardPreview
              data={cardData}
              theme={vscodeThemes[selectedTheme]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
