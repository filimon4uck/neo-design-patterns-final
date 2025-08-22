/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   *
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";
    
    Object.entries(this.d).forEach(([category, skills]) => { 
      const divCat = document.createElement("div");
      divCat.className = "slill-category";

      const ul = document.createElement("ul");
      ul.className = "skill-list";
      
      const li = document.createElement("li");
      li.innerHTML = `<li><strong>${category+": "}</strong>${skills.join(", ") as string[]}</li>`
        ul.appendChild(li)

      divCat.appendChild(ul);
      sec.appendChild(divCat);

    })
    return sec;
    

  }
}
