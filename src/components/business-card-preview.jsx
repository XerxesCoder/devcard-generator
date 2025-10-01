"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Download, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";

export function BusinessCardPreview({ data, theme }) {
  const cardRef = useRef(null);

  const getDisplayData = () => {
    return {
      name: data.name || "",
      title: data.title || "",
      bio: data.bio || "",
      contact: {
        email: data.email || "",
        phone: data.phone || "",
        website: data.website || "",
      },
      social: {
        github: data.github || "",
        linkedin: data.linkedin || "",
        twitter: data.twitter || "",
        instagram: data.instagram || "",
        tiktok: data.tiktok || "",
        whatsapp: data.whatsapp || "",
        telegram: data.telegram || "",
      },
    };
  };

  const handleDownloadJSON = () => {
    const displayData = getDisplayData();
    const jsonString = JSON.stringify(displayData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${
      data.name.replace(/\s+/g, "-").toLowerCase() || "business-card"
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadFullImage = async () => {
    if (cardRef.current) {
      try {
        const card = cardRef.current;

        const canvas = await html2canvas(card, {
          backgroundColor: theme.backgroundColor,
          scale: 2,
          useCORS: true,
          logging: false,

          onclone: (clonedDoc) => {
            const clonedCard = clonedDoc.querySelector(".card-element");
            if (clonedCard) {
              clonedCard.style.paddingBottom = "2px";
            }
          },
        });

        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = `${
          data.name.replace(/\s+/g, "-").toLowerCase() || "business-card"
        }-full.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error("Error capturing full image:", error);
      }
    }
  };

  const handleDownloadImage = async () => {
    if (cardRef.current) {
      const card = cardRef.current;

      const tempCard = document.createElement("div");
      tempCard.style.width = "400px";
      tempCard.style.height = "250px";
      tempCard.style.padding = "20px";
      tempCard.style.backgroundColor = theme.backgroundColor;
      tempCard.style.color = theme.textColor;
      tempCard.style.fontFamily = "'Consolas', 'Courier New', monospace";
      tempCard.style.borderRadius = "8px";
      tempCard.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      tempCard.style.display = "flex";
      tempCard.style.flexDirection = "column";
      tempCard.style.justifyContent = "space-between";

      // Build fields dynamically
      const fields = [];

      // Always show name and title
      fields.push(
        `"name": <span style="color: ${theme.stringColor};">"${
          data.name || "Your Name"
        }"</span>`
      );
      fields.push(
        `"title": <span style="color: ${theme.stringColor};">"${
          data.title || "Your Title"
        }"</span>`
      );

      // Show bio if present
      if (data.bio) {
        fields.push(
          `"bio": <span style="color: ${theme.stringColor};">"${data.bio}"</span>`
        );
      }

      // Show contact info if present
      if (data.email) {
        fields.push(
          `"email": <span style="color: ${theme.stringColor};">"${data.email}"</span>`
        );
      }
      if (data.phone) {
        fields.push(
          `"phone": <span style="color: ${theme.stringColor};">"${data.phone}"</span>`
        );
      }
      if (data.website) {
        fields.push(
          `"website": <span style="color: ${theme.stringColor};">"${data.website}"</span>`
        );
      }
      if (data.github) {
        fields.push(
          `"github": <span style="color: ${theme.stringColor};">"${data.github}"</span>`
        );
      }

      // Build the content with proper commas
      const fieldsContent = fields
        .map(
          (field, index) =>
            `<div style="color: ${
              theme.propertyColor
            }; font-size: 11px; margin-left: 12px;">${field}${
              index < fields.length - 1 ? "," : ""
            }</div>`
        )
        .join("");

      // Business card content in JSON-like format
      tempCard.innerHTML = `
      <div style="flex: 1;">
        <div style="margin-bottom: 15px;">
          <div style="color: ${theme.propertyColor}; font-size: 12px; margin-bottom: 5px;">{</div>
          ${fieldsContent}
          <div style="color: ${theme.propertyColor}; font-size: 12px;">}</div>
        </div>
      </div>
      <div style="text-align: center; font-size: 6px; color: ${theme.lineNumberColor}; margin-top: 10px;">
        Generated with DevCard Generator
      </div>
    `;

      // Add to document temporarily
      document.body.appendChild(tempCard);

      try {
        const canvas = await html2canvas(tempCard, {
          backgroundColor: theme.backgroundColor,
          scale: 3, // Higher scale for better quality
          width: 400,
          height: 250,
          useCORS: true,
          logging: false,
        });

        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = `${
          data.name.replace(/\s+/g, "-").toLowerCase() || "business-card"
        }.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error("Error generating image:", error);
      } finally {
        // Clean up
        document.body.removeChild(tempCard);
      }
    }
  };

  const displayData = getDisplayData();
  const jsonLines = [];

  const buildJsonLines = (obj, indent = 0) => {
    const entries = Object.entries(obj).filter(([key, value]) => {
      // Filter out empty strings and empty objects
      if (typeof value === "string" && value === "") return false;
      if (typeof value === "object" && value !== null) {
        // Check if object has any non-empty values
        return Object.values(value).some((val) => val !== "");
      }
      return true;
    });

    entries.forEach(([key, value], index) => {
      const isLast = index === entries.length - 1;

      if (typeof value === "object" && value !== null) {
        // Recursively filter nested objects
        const nestedEntries = Object.entries(value).filter(
          ([k, v]) => v !== ""
        );
        if (nestedEntries.length > 0) {
          jsonLines.push({
            content: `${"  ".repeat(indent)}"${key}": {`,
            type: "property",
          });
          buildJsonLines(value, indent + 1);
          jsonLines.push({
            content: `${"  ".repeat(indent)}}${isLast ? "" : ","}`,
            type: "bracket",
          });
        }
      } else if (value !== "") {
        // Only add non-empty values
        jsonLines.push({
          content: `${"  ".repeat(indent)}"${key}": "${value}"${
            isLast ? "" : ","
          }`,
          type: "property",
        });
      }
    });
  };
  jsonLines.push({ content: "{", type: "bracket" });
  buildJsonLines(displayData);
  jsonLines.push({ content: "}", type: "bracket" });

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm ">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2Z"
              fill="#CBCB41"
            />
            <path d="M5.5 11V5.5L8.5 8L5.5 11Z" fill="#1E1E1E" />
            <path d="M9 10.5H11.5V11.5H9V10.5Z" fill="#1E1E1E" />
          </svg>
          {data.name
            ? `${data.name.replace(/\s+/g, "-").toLowerCase()}.json`
            : "business-card.json"}
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleDownloadJSON}>
            <Download className="w-4 h-4 mr-2" />
            JSON
          </Button>
          <Button size="sm" variant="outline" onClick={handleDownloadImage}>
            <Download className="w-4 h-4 mr-2" />
            Card
          </Button>
          <Button size="sm" variant="outline" onClick={handleDownloadFullImage}>
            <Download className="w-4 h-4 mr-2" />
            Full Image
          </Button>
        </div>
      </div>

      <Card
        className="w-full overflow-hidden"
        style={{ backgroundColor: theme.backgroundColor }}
        ref={cardRef}
      >
        <div
          className="p-4 overflow-auto"
          style={{
            backgroundColor: theme.editorBackground,
            maxHeight: "350px",
          }}
        >
          {jsonLines.map((line, index) => (
            <div key={index} className="flex font-mono text-sm leading-6">
              <span
                className="select-none w-8 text-right pr-3 flex-shrink-0 text-xs"
                style={{ color: theme.lineNumberColor }}
              >
                {index + 1}
              </span>
              <pre
                className="text-xs"
                style={{
                  margin: 0,
                  fontFamily: "'Consolas', 'Courier New', monospace",
                }}
              >
                {line.content.split(/(".*?"|[{}[\],:]|\s+)/).map((part, i) => {
                  if (!part || part.match(/^\s+$/))
                    return <span key={i}>{part}</span>;

                  if (
                    part === "{" ||
                    part === "}" ||
                    part === "[" ||
                    part === "]" ||
                    part === "," ||
                    part === ":"
                  ) {
                    return (
                      <span key={i} style={{ color: theme.bracketColor }}>
                        {part}
                      </span>
                    );
                  }

                  if (part.startsWith('"') && part.endsWith('"')) {
                    const beforeColon =
                      line.content.indexOf(part) < line.content.indexOf(":");
                    if (beforeColon && line.content.includes(":")) {
                      return (
                        <span key={i} style={{ color: theme.propertyColor }}>
                          {part}
                        </span>
                      );
                    }
                    return (
                      <span key={i} style={{ color: theme.stringColor }}>
                        {part}
                      </span>
                    );
                  }

                  return (
                    <span key={i} style={{ color: theme.textColor }}>
                      {part}
                    </span>
                  );
                })}
              </pre>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
