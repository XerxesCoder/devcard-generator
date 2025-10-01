"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSelector } from "./theme-selector";
import { useBusinessCardStore } from "@/store/business-card-store";
import {
  Globe,
  Mail,
  Paperclip,
  Pen,
  Phone,
  TicketSlash,
  User,
} from "lucide-react";
import Image from "next/image";

export function BusinessCardForm({ onDataChange }) {
  const { cardData, setField, selectedTheme, setSelectedTheme } =
    useBusinessCardStore();

  const handleChange = (field, value) => {
    setField(field, value);

    if (onDataChange) {
      const newData = { ...cardData, [field]: value };
      onDataChange(newData);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader className={"flex justify-between items-center"}>
        <CardTitle>Developer Information</CardTitle>
        <ThemeSelector
          selectedTheme={selectedTheme}
          onThemeChange={setSelectedTheme}
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name">
              <Pen className="w-4 h-4" /> Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={cardData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">
              <TicketSlash className="w-4 h-4" /> Job Title
            </Label>
            <Input
              id="title"
              placeholder="Full Stack Developer"
              value={cardData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">
            <User className="w-4 h-4" /> Bio
          </Label>
          <Textarea
            id="bio"
            placeholder="Passionate developer with expertise in..."
            value={cardData.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            rows={3}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">
              {" "}
              <Mail className="w-4 h-4" /> Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={cardData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              {" "}
              <Phone className="w-4 h-4" /> Phone
            </Label>
            <Input
              id="phone"
              placeholder="+1 234 567 8900"
              value={cardData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="website">
              <Globe className="w-4 h-4" />
              Website
            </Label>
            <Input
              id="website"
              placeholder="https://johndoe.dev"
              value={cardData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="github">
              <Image
                src={"/assets/github.svg"}
                width={16}
                height={16}
                alt="github"
              />
              GitHub
            </Label>
            <Input
              id="github"
              placeholder="johndoe"
              value={cardData.github}
              onChange={(e) => handleChange("github", e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="linkedin">
              {" "}
              <Image
                src={"/assets/lk.svg"}
                width={16}
                height={16}
                alt="linkedin"
              />
              LinkedIn
            </Label>
            <Input
              id="linkedin"
              placeholder="linkedin.com/in/johndoe"
              value={cardData.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter">
              {" "}
              <Image
                src={"/assets/x.svg"}
                width={16}
                height={16}
                alt="twitter"
              />
              Twitter/X
            </Label>
            <Input
              id="twitter"
              placeholder="@johndoe"
              value={cardData.twitter}
              onChange={(e) => handleChange("twitter", e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="instagram">
              {" "}
              <Image
                src={"/assets/instagram.svg"}
                width={16}
                height={16}
                alt="instagram"
              />
              Instagram
            </Label>
            <Input
              id="instagram"
              placeholder="@johndoe"
              value={cardData.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tiktok">
              {" "}
              <Image
                src={"/assets/tiktok.svg"}
                width={16}
                height={16}
                alt="tiktok"
              />
              TikTok
            </Label>
            <Input
              id="tiktok"
              placeholder="@johndoe"
              value={cardData.tiktok}
              onChange={(e) => handleChange("tiktok", e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">
              {" "}
              <Image
                src={"/assets/whatsapp.svg"}
                width={16}
                height={16}
                alt="whatsapp"
              />
              WhatsApp
            </Label>
            <Input
              id="whatsapp"
              placeholder="+1234567890"
              value={cardData.whatsapp}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegram">
              {" "}
              <Image
                src={"/assets/telegram.svg"}
                width={16}
                height={16}
                alt="telegram"
              />
              Telegram
            </Label>
            <Input
              id="telegram"
              placeholder="@johndoe"
              value={cardData.telegram}
              onChange={(e) => handleChange("telegram", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
