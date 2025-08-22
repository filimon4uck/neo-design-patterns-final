/**
 * Блок відображення короткого опису резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private d: ResumeModel["summary"]) {}

  /**
   * Рендеринг блоку короткого опису
   *
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section summary";

    const header = document.createElement("h2");
    header.textContent = "Summary"
    const p = document.createElement("p")
    p.textContent = this.d.text

    el.appendChild(header)
    el.appendChild(p)

    return el;
  }
}
