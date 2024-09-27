import { Theme } from "@mui/material";
import { formatPrice } from "../../utils";

export const tooltipWrapper = (
  theme: Theme,
  title: string,
  name: string,
  content: string[]
) => {
  return (
    `<div style="display:flex; flex-direction:column; gap:8px;">` +
    `<div style="display:flex;align-items: center; gap:8px">` +
    `<div style="font-size:12px;line-height:16px;color:${theme.palette.text[1]}">${title}</div>` +
    `<span style="font-size:10px;line-height:12px;color:${theme.palette.text[2]}">${name}</span>` +
    `</div>` +
    `<div class="chart-tooltip" style="display:flex; flex-direction:column; gap:8px;max-height:208px; overflow:auto; padding:0 20px 0 0">` +
    content.join("") +
    `</div>` +
    `</div>`
  );
};

export const tooltipItemMaker = (
  theme: Theme,
  color: string,
  text: string,
  value: number | null,
  past?: boolean
): string => {
  return (
    `<div style="display:flex; gap:8px; align-items: center; line-height:18px">` +
    `<div>` +
    `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${color};${
      past && "opacity:0.2"
    }"></span>` +
    `<span style="font-size:10px;line-height:12px;color:${theme.palette.text[2]}">${text}</span>` +
    `</div>` +
    `<div style="font-size:14px;line-height:18px;font-weight:600;color:${
      past ? theme.palette.text[3] : theme.palette.text[0]
    }">${formatPrice(value ?? 0)}</div>` +
    `</div>`
  );
};
