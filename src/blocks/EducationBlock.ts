/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education[]) {}

  /**
   * Рендеринг блоку освіти
   *
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";
    this.d.forEach((edu) => {
      const item = document.createElement("div")
      item.className = "education-item";
      item.innerHTML = `${edu.degree} ${edu.field}, ${edu.institution} (${edu.graduation})`
      el.appendChild(item);

    });

    return el;
  }
}
