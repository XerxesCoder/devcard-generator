"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vscodeThemes } from "@/lib/vscode-themes";

export function ThemeSelector({ selectedTheme, onThemeChange }) {
  return (
    <Select value={selectedTheme} onValueChange={onThemeChange}>
      <SelectTrigger id="theme">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(vscodeThemes).map(([key, theme]) => (
          <SelectItem key={key} value={key}>
            {theme.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
