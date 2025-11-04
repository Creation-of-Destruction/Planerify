"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetFlags } from "@/data/flags";
import { useCookies } from "react-cookie";

export const LanguageSelect = () => {
  const t = useTranslations("usedLanguage");
  const flags = GetFlags(t);
  const locale = useLocale();

  const [cookies, setCookie] = useCookies(["MYNEXTAPP_LOCALE"]);
  const [selected, setSelected] = useState<string>(cookies.MYNEXTAPP_LOCALE || locale);

  useEffect(() => {
    if (selected) {
      setCookie("MYNEXTAPP_LOCALE", selected, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
  }, [selected, setCookie]);

  const handleChange = (newLocale: string) => {
    setSelected(newLocale);
    setCookie("MYNEXTAPP_LOCALE", newLocale, { path: "/" });
    window.location.reload();
  };

  const currentFlag = flags.find((flag) => flag.value === selected);

  return (
    <Select onValueChange={handleChange} value={selected}>
      <SelectTrigger className="border-input">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className={currentFlag?.className}></span>
          </div>
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="border-input">
        <SelectGroup>
          <SelectLabel className="text-xs text-foreground px-2 py-1">{t("label")}</SelectLabel>
          {flags.map((flag) => (
            <SelectItem key={flag.value} value={flag.value}>
              <div className="flex items-center gap-2">
                <span className={flag.className}></span>
                <span>{flag.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
